import { IEdge } from './IEdge';

export interface IFollowersEdgesData {
  edge_followed_by: {
    count: number;
    page_info: {
      has_next_page: boolean;
      end_cursor: string
    };
    edges: IEdge[];
  },
}
