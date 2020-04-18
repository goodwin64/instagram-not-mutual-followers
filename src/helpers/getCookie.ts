export function getCookie(name: string) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length == 2) {
    const lastPair = parts.pop();
    if (lastPair) {
      return lastPair.split(';').shift();
    }
  }
}
