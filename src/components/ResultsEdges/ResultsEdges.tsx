import { h } from 'preact';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ChangeEvent } from 'react';
import { useState } from 'preact/hooks';
import React from 'preact/compat';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { getUsersOnlyIFollowThem, getUsersOnlyTheyFollowMe } from '~src/helpers/edgeHelpers';
import { Button, Grid, ListItemText } from '@material-ui/core';
import { unfollowUser} from '~src/services/ApiService';
import { IEdgeNode } from '~src/interfaces/edges-response/IEdgeNode';
import { userIdFromEdgeSelector } from '~src/selectors/edgeSelectors';

interface Props {
  followers: string[];
  following: string[];
  usernameToUser: Map<string, IEdgeNode>;
  unfollowUser: (username: string) => void;
  currentUser: string;
}

export function ResultsEdges(props: Props) {
  const usersOnlyTheyFollowMe = getUsersOnlyTheyFollowMe(props.followers, props.following);
  const usersOnlyIFollowThem = getUsersOnlyIFollowThem(props.followers, props.following);

  const [tab, setTab] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  const edges = tab === 0 ? usersOnlyTheyFollowMe : usersOnlyIFollowThem;

  const unfollow = (e: ChangeEvent<{}>) => {
    // @ts-ignore
    const username = e.currentTarget?.dataset?.username;
    const id = userIdFromEdgeSelector(props.usernameToUser.get(username));
    if (!id) {
      return;
    }
    return unfollowUser(id)
      .then(() => props.unfollowUser(username))
      .catch(() => console.error(`can't unfollow user with id=${id}`));
  };

  return (
    <div>
      <Tabs value={tab} onChange={handleChange} aria-label="not mutual followers tabs">
        <Tab label="Only They Follow Me" id={'tab-1'} />
        <Tab label="Only I Follow Them" id={'tab-2'} />
      </Tabs>

      <List>
        {
          edges.map(userIFollowUsername => (
            <ListItem key={userIFollowUsername}>
              <Grid
                container
                justify={'space-between'}
                direction={'row-reverse'}
                alignItems={'center'}
              >
                {
                  tab === 1 && (
                    <Button
                      variant={'outlined'}
                      color={'secondary'}
                      data-username={userIFollowUsername}
                      onClick={unfollow}
                    >
                      Unfollow
                    </Button>
                  )
                }
                <ListItemText>{userIFollowUsername}</ListItemText>
              </Grid>
            </ListItem>
          ))
        }
      </List>
    </div>
  );
}
