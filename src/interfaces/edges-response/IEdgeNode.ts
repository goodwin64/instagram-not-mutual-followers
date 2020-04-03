export interface IEdgeNode {
  id: string,
  username: string,
  full_name: string,
  profile_pic_url: string,
  is_private: boolean,
  is_verified: boolean,
  followed_by_viewer: boolean,
  requested_by_viewer: boolean,
  reel: {
    id: string,
    expiring_at: number,
    has_pride_media: boolean,
    latest_reel_media: number,
    seen: null,
    owner: {
      __typename: string,
      id: string,
      profile_pic_url: string,
      username: string,
    }
  }
}
