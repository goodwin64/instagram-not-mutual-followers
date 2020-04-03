import { IEdge } from '~src/interfaces/user-response/IEdge';

export interface IUserResponse {
  'logging_page_id': string;
  'show_suggested_profiles': boolean;
  'show_follow_dialog': boolean;
  'graphql': {
    'user': {
      'edge_followed_by': {
        'count': number
      };
      'followed_by_viewer': boolean;
      'edge_follow': {
        'count': number
      };
      'follows_viewer': boolean;
      'full_name': string;
      'id': string;
      'edge_mutual_followed_by': {
        'count': number;
        'edges': IEdge[]
      };
      'edge_media_collections': {
        'count': number;
        'page_info': {
          'has_next_page': boolean;
          'end_cursor': null
        };
        'edges': []
      }
    }
  };
  'toast_content_on_load': null
}
