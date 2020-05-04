import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { ChangeEvent } from 'react';

import { IEdgeNode } from '~src/interfaces/edges-response/IEdgeNode';
import { userIdFromEdgeSelector } from '~src/selectors/edgeSelectors';
import { followUser, unfollowUser } from '~src/services/ApiService';
import { getUserUrl } from '~src/helpers/getUserUrl';

export interface Props {
  user?: IEdgeNode;
  username: string;
  followUser: (username: string) => void;
  unfollowUser: (username: string) => void;
  type: 'follower' | 'following';
}

export function ResultUserRow(props: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const follow = (e: ChangeEvent<{}>) => {
    // @ts-ignore
    const username = e.currentTarget?.dataset?.username;
    const id = userIdFromEdgeSelector(props.user);
    if (!id) {
      return;
    }
    setIsLoading(true);
    return followUser(id)
      .then(() => setIsLoading(false))
      .then(() => props.followUser(username))
      .catch(() => console.error(`can't follow user with id=${id}`));
  };

  const unfollow = (e: ChangeEvent<{}>) => {
    // @ts-ignore
    const username = e.currentTarget?.dataset?.username;
    const id = userIdFromEdgeSelector(props.user);
    if (!id) {
      return;
    }
    setIsLoading(true);
    return unfollowUser(id)
      .then(() => setIsLoading(false))
      .then(() => props.unfollowUser(username))
      .catch(() => console.error(`can't unfollow user with id=${id}`));
  };

  if (!props.user) {
    return null;
  }

  return (
    <ListItem>
      <Grid
        container
        justify={'space-between'}
        direction={'row-reverse'}
        alignItems={'center'}
      >
        {
          props.type === 'following' ? (
            <Button
              variant={'outlined'}
              color={'secondary'}
              data-username={props.user?.username}
              onClick={unfollow}
              disabled={isLoading}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              variant={'outlined'}
              color={'primary'}
              data-username={props.username}
              onClick={follow}
              disabled={isLoading}
            >
              Follow back
            </Button>
          )
        }
        <Link target={'_blank'} href={getUserUrl(props.username)}>
          <ListItemText
            style={{
              maxWidth: '50%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {props.username}
          </ListItemText>
        </Link>
        <Box mr={2}>
          <Link target={'_blank'} href={getUserUrl(props.username)}>
            <Avatar
              src={props.user.profile_pic_url}
              alt={props.user.full_name}
              title={props.user.full_name}
            />
          </Link>
        </Box>
      </Grid>
    </ListItem>
  );
}
