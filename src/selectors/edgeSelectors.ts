import { IEdgeNode } from '~src/interfaces/edges-response/IEdgeNode';

export function userIdFromEdgeSelector(edge?: IEdgeNode) {
  return edge && edge.id;
}

export function usernameFromEdgeSelector(edge?: IEdgeNode) {
  return edge && edge.username;
}
