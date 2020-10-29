import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { ChangeEvent } from 'react';

import { IEdgeNode } from '~src/interfaces/edges-response/IEdgeNode';
import { userIdFromEdgeSelector } from '~src/selectors/edgeSelectors';
import { followUser, unfollowUser } from '~src/services/ApiService';
import { getUserUrl } from '~src/helpers/getUserUrl';
import { useStyles } from '~src/components/ResultUserRow/ResultUserRow.styled';

export interface Props {
  user?: IEdgeNode;
  username: string;
  followUser: (username: string) => void;
  unfollowUser: (username: string) => void;
  type: 'follower' | 'following';
  isSimpleRendering: boolean;
}

export function ResultUserRow(props: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const follow = (e: ChangeEvent<{}>) => {
    e.preventDefault();
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

  const classes = useStyles();

  if (!props.user) {
    return null;
  }

  const ButtonComponent = props.isSimpleRendering ? 'button' : Button;

  return (
    <ListItem>
      <Grid
        container
        justify={'flex-start'}
        direction={'row'}
        alignItems={'center'}
      >
        <Box mr={2}>
          <Link target={'_blank'} href={getUserUrl(props.username)}>
            {
              props.isSimpleRendering
                ? null
                : (
                  <Avatar
                    src={props.user.profile_pic_url}
                    alt={props.user.full_name}
                    title={props.user.full_name}
                  />
                )
            }
          </Link>
        </Box>
        <Box width={200}>
          {
            props.isSimpleRendering
              ? <a target={'_blank'} href={getUserUrl(props.username)}>{props.username}</a>
              : (
                <Link target={'_blank'} href={getUserUrl(props.username)}>
                  <Typography
                    className={classes.ListItemTextPrimary}
                    variant={'body1'}
                    title={props.username}
                  >
                    {props.username}
                  </Typography>
                </Link>
              )
          }
        </Box>
        {
          props.type === 'following' ? (
            <ButtonComponent
              variant={'outlined'}
              color={'secondary'}
              data-username={props.user?.username}
              // @ts-ignore
              onClick={unfollow}
              disabled={isLoading}
            >
              Unfollow
            </ButtonComponent>
          ) : (
            <ButtonComponent
              variant={'outlined'}
              color={'primary'}
              data-username={props.username}
              // @ts-ignore
              onClick={follow}
              disabled={isLoading}
            >
              Follow back
            </ButtonComponent>
          )
        }
      </Grid>
    </ListItem>
  );
}
