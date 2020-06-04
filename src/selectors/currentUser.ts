export function currentUserUsernameSelector() {
  const RE_INSTA_URL = /instagram\.com\/([A-Za-z0-9_.]*)\/.*/;
  const match = RE_INSTA_URL.exec(window.location.href);
  if (!match || !match.length || !match[1]) {
    console.error('no username detected from URL');
    return;
  }
  const visibleUserNickname = match[1];
  return visibleUserNickname;
}
