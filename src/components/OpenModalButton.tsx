import React from "react";
import {IUserResponse} from "~src/interfaces/user-response/IUserResponse";
import {serialize} from "~src/helpers/serialize";
import {IEdgesResponse} from "~src/interfaces/edges-response/IEdgesResponse";
import {IUser} from "~src/interfaces/IUser";
import {IEdgeNode} from "~src/interfaces/edges-response/IEdgeNode";
import {ImageService} from "~src/services/ImageService";
import * as pkg from '~pkg';

export const FOLLOWERS_HASH = 'c76146de99bb02f6415203be841dd25a';
export const FOLLOWING_HASH = 'd04b0a864b4b54837c0d870b0e77e076';

export function createBot() {
    let isEnabled = false;

    const api = {
        startBot: () => {
            if (isEnabled) {
                return;
            }
            collectEdges()
                .then(data => data || [])
                .then(([followers, following]) => [
                    followers.map(usernameFromUserSelector),
                    following.map(usernameFromUserSelector),
                ])
                .then(([followers, following]) => {
                    api.stopBot();
                    logResults(followers, following);
                    alert('Press F12 and see result in console ->');
                });
        },
        stopBot: () => {
            isEnabled = false;
        },
        isEnabled: () => Boolean(isEnabled),
    };

    return api;
}

async function collectEdges() {
    const RE_INSTA_URL = /instagram\.com\/(?<nickname>[A-Za-z0-9_.]*)\/.*/;
    const match = RE_INSTA_URL.exec(window.location.href);
    if (!match || !match.groups) {
        console.error('no username detected from URL');
        return;
    }
    const visibleUserNickname = match.groups.nickname;

    if (!visibleUserNickname) {
        console.error('no username detected from URL');
    }

    const userDataResponse = await retrieveUserData(visibleUserNickname);
    const [userId, followersCount, followingCount] = [
        userIdSelector(userDataResponse),
        followersCountSelector(userDataResponse),
        followingCountSelector(userDataResponse),
    ];

    const [collectedFollowers, collectedFollowing] = await Promise.all([
        retrieveAllEdges(userId, followersCount, true),
        retrieveAllEdges(userId, followingCount, false),
    ]);

    return [collectedFollowers, collectedFollowing];
}

export function retrieveUserData(userNickname: string) {
    return fetch(`https://www.instagram.com/${userNickname}/?__a=1`, {
        'method': 'GET',
    })
        .then(r => r.json())
        .then((r: IUserResponse) => r)
        ;
}

export function retrieveEdgesSlice(
    userId: string,
    isFollowers?: boolean,
    sliceSize = 49,
    after?: string,
    fetchMutual = false,
) {
    const queryParams = {
        query_hash: isFollowers ? FOLLOWERS_HASH : FOLLOWING_HASH,
        variables: JSON.stringify({
            'id': userId,
            'include_reel': true,
            'fetch_mutual': fetchMutual,
            'first': sliceSize,
            after,
        }),
    };
    const queryParamsSerialized = serialize(queryParams);
    return fetch(`https://www.instagram.com/graphql/query/?${queryParamsSerialized}`, {
        'method': 'GET',
    })
        .then(r => r.json())
        .then((r: IEdgesResponse) => r.data)
        ;
}

async function retrieveAllEdges(
    userId: string,
    totalEdgesCount: number,
    isFollowers?: boolean,
) {
    let result: IEdgeNode[] = [];
    const firstSliceResponse = await retrieveEdgesSlice(userId, isFollowers);
    let edges = edgesListFromResponseSelector(firstSliceResponse);
    let [hasNextPage, pageEnd] = pageEndFromResponseSelector(firstSliceResponse);
    result = result.concat(edges);

    while (result.length < totalEdgesCount) {
        console.log(result.length / totalEdgesCount);
        const nextSliceResponse = await retrieveEdgesSlice(userId, isFollowers, 49, pageEnd);
        edges = edgesListFromResponseSelector(nextSliceResponse);
        [hasNextPage, pageEnd] = pageEndFromResponseSelector(nextSliceResponse);
        result = result.concat(edges);
    }

    return result;
}

export function userCommonDataSelector(userDataResponse: IUserResponse) {
    return userDataResponse.graphql.user;
}

export function userIdSelector(userDataResponse: IUserResponse) {
    const userData = userCommonDataSelector(userDataResponse);
    return userData.id;
}

export function followersCountSelector(userDataResponse: IUserResponse) {
    const userData = userCommonDataSelector(userDataResponse);
    return userData.edge_followed_by.count;
}

export function followingCountSelector(userDataResponse: IUserResponse) {
    const userData = userCommonDataSelector(userDataResponse);
    return userData.edge_follow.count;
}

export function edgesListFromResponseSelector(
    followersResponseData: IEdgesResponse['data'],
) {
    const edges = 'edge_followed_by' in followersResponseData.user
        ? followersResponseData.user.edge_followed_by.edges
        : followersResponseData.user.edge_follow.edges;
    return edges
        ? edges.map(edge => edge.node)
        : []
        ;
}

export function pageEndFromResponseSelector(
    followersResponseData: IEdgesResponse['data'],
): [boolean, string?] {
    const pageInfo = 'edge_followed_by' in followersResponseData.user
        ? followersResponseData.user.edge_followed_by.page_info
        : followersResponseData.user.edge_follow.page_info
    ;
    return pageInfo
        ? [pageInfo.has_next_page, pageInfo.end_cursor]
        : [false, undefined]
        ;
}

export function logResults(
    followers: Array<string>,
    following: Array<string>,
) {
    const s1 = new Set(followers);
    const s2 = new Set(following);

    const onlyTheyFollowMe = [...s1.difference(s2)];
    const onlyIFollowThem = [...s2.difference(s1)];

    console.log('onlyTheyFollowMe (you ignore them):', onlyTheyFollowMe);
    console.log('onlyIFollowThem (fucking bastards):', onlyIFollowThem);
}

export function usernameFromUserSelector(user: IUser) {
    return user.username;
}

const bot = createBot();

export function OpenModalButton() {
    return (
        <div
            onClick={() => bot.startBot()}
            id={'bot-control-button'}
            aria-label={pkg.name}
            dangerouslySetInnerHTML={{
                __html: ImageService.people
            }}
        />
    )
}
