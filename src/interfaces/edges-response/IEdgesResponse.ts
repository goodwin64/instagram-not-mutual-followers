import { IFollowersEdgesData } from '~src/interfaces/edges-response/IFollowersEdgesData';
import { IFollowingEdgesData } from '~src/interfaces/edges-response/IFollowingEdgesData';

export interface IEdgesResponse {
  data: {
    user: IFollowersEdgesData | IFollowingEdgesData;
  };
  status: 'ok';
}
