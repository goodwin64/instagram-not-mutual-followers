import { IFollowersEdgesData } from '../edges-response/IFollowersEdgesData';
import { IFollowingEdgesData } from '../edges-response/IFollowingEdgesData';

export interface IEdgesResponse {
  data: {
    user: IFollowersEdgesData | IFollowingEdgesData;
  };
  status: 'ok';
}
