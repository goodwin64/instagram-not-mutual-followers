import { IEdge } from '~src/interfaces/edges-response/IEdge';

export interface IFollowingEdgesData {
  edge_follow: {
    count: number;
    page_info: {
      has_next_page: boolean;
      end_cursor: string
    };
    edges: IEdge[];
  },
}
