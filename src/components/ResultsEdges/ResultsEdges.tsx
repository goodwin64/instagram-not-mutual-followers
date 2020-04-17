import {h} from 'preact';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ChangeEvent } from 'react';
import { useState } from 'preact/hooks';
import React from 'preact/compat';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { getUsersOnlyIFollowThem, getUsersOnlyTheyFollowMe } from '~src/helpers/edgeHelpers';

interface Props {
  followers: string[];
  following: string[];
}

export function ResultsEdges(props: Props) {
  const usersOnlyTheyFollowMe = getUsersOnlyTheyFollowMe(props.followers, props.following);
  const usersOnlyIFollowThem = getUsersOnlyIFollowThem(props.followers, props.following);

  const [tab, setTab] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  const edges = tab === 0 ? usersOnlyTheyFollowMe : usersOnlyIFollowThem;

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
              {userIFollowUsername}
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}
