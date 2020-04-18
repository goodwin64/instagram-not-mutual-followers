import { IEdgeNode } from '~src/interfaces/edges-response/IEdgeNode';
import { usernameFromEdgeSelector } from '~src/selectors/edgeSelectors';

export function collectUsernameToUserMap(
  followers: IEdgeNode[],
  following: IEdgeNode[],
) {
  const map = new Map<string, IEdgeNode>();
  followers.forEach(edge => {
    const username = usernameFromEdgeSelector(edge);
    if (username) {
      map.set(username, edge);
    }
  });
  following.forEach(edge => {
    const username = usernameFromEdgeSelector(edge);
    if (username && !map.has(username)) {
      map.set(username, edge);
    }
  });
  return map;
}
