export function currentUserUsernameSelector() {
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
  return visibleUserNickname;
}
