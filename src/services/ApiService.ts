import { IEdgeNode } from '~src/interfaces/edges-response/IEdgeNode';
import { IUserResponse } from '~src/interfaces/user-response/IUserResponse';
import { serialize } from '~src/helpers/serialize';
import { IEdgesResponse } from '~src/interfaces/edges-response/IEdgesResponse';
import { currentUserUsernameSelector } from '~src/selectors/currentUser';
import { getCookie } from '~src/helpers/getCookie';
import { SetProgress } from '~src/interfaces/setProgress';

export const FOLLOWERS_HASH = 'c76146de99bb02f6415203be841dd25a';
export const FOLLOWING_HASH = 'd04b0a864b4b54837c0d870b0e77e076';

export async function collectEdges(setProgress: SetProgress) {
    const visibleUserNickname = currentUserUsernameSelector();
    if (!visibleUserNickname) {
        console.error('no username detected from URL');
        return;
    }

    const userDataResponse = await retrieveUserData(visibleUserNickname);
    const [userId, followersCount, followingCount] = [
        userIdSelector(userDataResponse),
        followersCountSelector(userDataResponse),
        followingCountSelector(userDataResponse),
    ];

    const progress = { operated: 0, total: followersCount + followingCount };
    const [collectedFollowers, collectedFollowing] = await Promise.all([
        retrieveAllEdges(userId, followersCount, setProgress, progress, true),
        retrieveAllEdges(userId, followingCount, setProgress, progress, false),
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
    setProgress: SetProgress,
    progress: { operated: number, total: number },
    isFollowers?: boolean,
) {
    let result: IEdgeNode[] = [];
    const firstSliceResponse = await retrieveEdgesSlice(userId, isFollowers);
    let edges = edgesListFromResponseSelector(firstSliceResponse);
    let [hasNextPage, pageEnd] = pageEndFromResponseSelector(firstSliceResponse);
    result = result.concat(edges);
    progress.operated += edges.length;
    setProgress(progress.operated / progress.total);

    while (result.length < totalEdgesCount) {
        const nextSliceResponse = await retrieveEdgesSlice(userId, isFollowers, 49, pageEnd);
        edges = edgesListFromResponseSelector(nextSliceResponse);
        [hasNextPage, pageEnd] = pageEndFromResponseSelector(nextSliceResponse);
        result = result.concat(edges);
        progress.operated += edges.length;
        setProgress(progress.operated / progress.total);
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

export function unfollowUser(id: string) {
    const url = `https://www.instagram.com/web/friendships/${id}/unfollow/`;
    const csrftoken = getCookie('csrftoken') || '';
    return fetch(url, {
        method: 'POST',
        headers: {
            'x-csrftoken': csrftoken,
        },
    });
}

export function followUser(id: string) {
    const url = `https://www.instagram.com/web/friendships/${id}/follow/`;
    return fetch(url, {
        method: 'POST',
    });
}
