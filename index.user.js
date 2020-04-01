// ==UserScript==
// @name         instagram-not-mutual-followers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       goodwin64
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

const FOLLOWERS_HASH = 'c76146de99bb02f6415203be841dd25a';
const FOLLOWING_HASH = 'd04b0a864b4b54837c0d870b0e77e076';

const selectors = {
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
      clearInterval(isEnabled);
      isEnabled = null;
    },
    isEnabled: () => Boolean(isEnabled),
  };

  return api;
}

// Performs difference operation between
// called set and otherSet
Set.prototype.difference = function (otherSet) {
  // creating new set to store difference
  var differenceSet = new Set();

  // iterate over the values
  for (var elem of this) {
    // if the value[i] is not present
    // in otherSet add to the differenceSet
    if (!otherSet.has(elem))
      differenceSet.add(elem);
  }

  // returns values of differenceSet
  return differenceSet;
};

async function collectEdges() {
  const RE_INSTA_URL = /instagram\.com\/(?<nickname>[A-Za-z_.]*)\/.*/;
  const match = RE_INSTA_URL.exec(window.location.href);
  if (!match) {
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

function retrieveUserData(userNickname) {
  return fetch(`https://www.instagram.com/${userNickname}/?__a=1`, {
    'method': 'GET',
  })
    .then(r => r.json());
}

function retrieveEdgesSlice(userId, isFollowers, sliceSize = 49, after = undefined, fetchMutual = false) {
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
    .then(r => r.data)
    ;
}

async function retrieveAllEdges(userId, totalEdgesCount, isFollowers) {
  let result = [];
  const firstSliceResponse = await retrieveEdgesSlice(userId, isFollowers);
  let [edges, hasNextPage, pageEnd] = [
    edgesListFromResponseSelector(firstSliceResponse, isFollowers),
    ...pageEndFromResponseSelector(firstSliceResponse, isFollowers),
  ];
  result = result.concat(edges);

  while (result.length < totalEdgesCount) {
    console.log(result.length / totalEdgesCount);
    const nextSliceResponse = await retrieveEdgesSlice(userId, isFollowers, 49, pageEnd);
    [edges, hasNextPage, pageEnd] = [
      edgesListFromResponseSelector(nextSliceResponse, isFollowers),
      ...pageEndFromResponseSelector(nextSliceResponse, isFollowers),
    ];
    result = result.concat(edges);
  }

  return result;
}

function userCommonDataSelector(userDataResponse) {
  return (
    userDataResponse
    && userDataResponse.graphql
    && userDataResponse.graphql.user
  );
}

function userIdSelector(userDataResponse) {
  const userData = userCommonDataSelector(userDataResponse);
  return userData?.id;
}

function followersCountSelector(userDataResponse) {
  const userData = userCommonDataSelector(userDataResponse);
  return userData?.edge_followed_by?.count;
}

function followingCountSelector(userDataResponse) {
  const userData = userCommonDataSelector(userDataResponse);
  return userData?.edge_follow?.count;
}

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
}

function createBotControlButton() {
  const buttonContainer = document.createElement('div');
  const headerControlButtonClass = 'Fifk5';
  buttonContainer.classList.add(headerControlButtonClass);
  const button = document.createElement('button');
  button.innerText = 'bot';
  button.id = 'bot-control-button';
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

function edgesListFromResponseSelector(followersResponseData, isFollowers) {
  const edgesProp = isFollowers ? 'edge_followed_by' : 'edge_follow';
  const edges = followersResponseData?.user?.[edgesProp]?.edges;
  return edges
    ? edges.map(edge => edge.node)
    : []
    ;
}

function pageEndFromResponseSelector(followersResponseData, isFollowers) {
  const edgesProp = isFollowers ? 'edge_followed_by' : 'edge_follow';
  const pageInfo = followersResponseData?.user?.[edgesProp]?.page_info;
  return pageInfo
    ? [pageInfo.has_next_page, pageInfo.end_cursor]
    : [false, null]
    ;
}

function logResults(s1, s2) {
  s1 = Array.isArray(s1) ? new Set(s1) : s1;
  s2 = Array.isArray(s2) ? new Set(s2) : s2;

  const onlyTheyFollowMe = [...s1.difference(s2)];
  const onlyIFollowThem = [...s2.difference(s1)];

  console.log('onlyTheyFollowMe (you ignore them):', onlyTheyFollowMe);
  console.log('onlyIFollowThem (fucking bastards):', onlyIFollowThem);
}

function usernameFromUserSelector(user) {
  return user && user.username;
}

(function () {
  'use strict';

  console.debug('instagram-not-mutual-followers start');

  setInterval(addBotControlButton, 1000);
})();
