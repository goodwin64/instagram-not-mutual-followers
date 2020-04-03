export function serialize(obj: object) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      // @ts-ignore
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
}
