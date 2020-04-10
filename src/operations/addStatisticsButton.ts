import * as pkg from '../../package.json';

import { IUser } from '../interfaces/IUser';
import { IEdgesResponse } from '../interfaces/edges-response/IEdgesResponse';
import { IEdgeNode } from '../interfaces/edges-response/IEdgeNode';
import { IUserResponse } from '../interfaces/user-response/IUserResponse';
import { serialize } from '../helpers/serialize';
import { ImageService } from '../services/ImageService';

const FOLLOWERS_HASH = 'c76146de99bb02f6415203be841dd25a';
const FOLLOWING_HASH = 'd04b0a864b4b54837c0d870b0e77e076';

export const selectors = {
  followersLink: '[href*="/followers/"]',
  followingLink: '[href*="/following/"]',
  instagramUsername: '.FPmhX',
  headerControlPanelContainer: '._47KiJ',
  headerControlButton: '.Fifk5',
  pageContainer: '.v9tJq.AAaSh.VfzDr',
  botControlButton: '#bot-control-button',
};

function createBot() {
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
  const RE_INSTA_URL = /instagram\.com\/(?<nickname>[A-Za-z_.]*)\/.*/;
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

function retrieveUserData(userNickname: string) {
  return fetch(`https://www.instagram.com/${userNickname}/?__a=1`, {
    'method': 'GET',
  })
    .then(r => r.json())
    .then((r: IUserResponse) => r)
    ;
}

function retrieveEdgesSlice(
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
  let [, pageEnd] = pageEndFromResponseSelector(firstSliceResponse);
  result = result.concat(edges);

  while (result.length < totalEdgesCount) {
    console.log(result.length / totalEdgesCount);
    const nextSliceResponse = await retrieveEdgesSlice(userId, isFollowers, 49, pageEnd);
    edges = edgesListFromResponseSelector(nextSliceResponse);
    [, pageEnd] = pageEndFromResponseSelector(nextSliceResponse);
    result = result.concat(edges);
  }

  return result;
}

function userCommonDataSelector(userDataResponse: IUserResponse) {
  return userDataResponse.graphql.user;
}

function userIdSelector(userDataResponse: IUserResponse) {
  const userData = userCommonDataSelector(userDataResponse);
  return userData.id;
}

function followersCountSelector(userDataResponse: IUserResponse) {
  const userData = userCommonDataSelector(userDataResponse);
  return userData.edge_followed_by.count;
}

function followingCountSelector(userDataResponse: IUserResponse) {
  const userData = userCommonDataSelector(userDataResponse);
  return userData.edge_follow.count;
}

function createBotControlButton(): [HTMLDivElement, HTMLDivElement, string, string] {
  const buttonContainer = document.createElement('div');
  const headerControlButtonClass = 'Fifk5';
  buttonContainer.classList.add(headerControlButtonClass);
  const button = document.createElement('div');
  button.innerHTML = ImageService.people;
  button.id = 'bot-control-button';
  button.setAttribute('aria-label', pkg.name);
  buttonContainer.appendChild(button);
  return [buttonContainer, button, 'enabled', 'disabled'];
}

function addBotControlButton() {
  if (document.querySelector(selectors.botControlButton)) {
    return;
  }
  const [buttonContainer, button, enabledClassname, disabledClassname] = createBotControlButton();
  const controlPanel = document.querySelector(selectors.headerControlPanelContainer);
  if (!controlPanel) return;

  controlPanel.insertBefore(buttonContainer, controlPanel.firstChild);

  const bot = createBot();

  buttonContainer.addEventListener('click', () => {
    if (bot.isEnabled()) {
      bot.stopBot();
      button.classList.remove(enabledClassname);
      button.classList.add(disabledClassname);
    } else {
      bot.startBot();
      button.classList.add(enabledClassname);
      button.classList.remove(disabledClassname);
    }
  });
}

function edgesListFromResponseSelector(
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

function pageEndFromResponseSelector(
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

function logResults(
  followers: Array<string>,
  following: Array<string>,
) {
  const s1 = new Set(followers);
  const s2 = new Set(following);

  const onlyTheyFollowMe = Array.from(s1.difference(s2));
  const onlyIFollowThem = Array.from(s2.difference(s1));

  console.log('onlyTheyFollowMe (you ignore them):', onlyTheyFollowMe);
  console.log('onlyIFollowThem (fucking bastards):', onlyIFollowThem);
}

function usernameFromUserSelector(user: IUser) {
  return user.username;
}

export function addStatisticsButton() {
  console.log('addStatisticsButton');
  addBotControlButton();
}
