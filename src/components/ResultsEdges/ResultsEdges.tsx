import { h } from 'preact';
import List from '@material-ui/core/List';
import { ChangeEvent } from 'react';
import { useState, useEffect } from 'preact/hooks';
import React from 'preact/compat';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { getUsersOnlyIFollowThem, getUsersOnlyTheyFollowMe } from '~src/helpers/edgeHelpers';
import { IEdgeNode } from '~src/interfaces/edges-response/IEdgeNode';
import { ResultUserRow, Props as ResultUserRowProps } from '~src/components/ResultUserRow/ResultUserRow';
import { NotMutualFollower, NotMutualFollowing } from '~src/components/UserIcon/UserIcon';
import { downloadFile } from '~src/helpers/downloadFile';

interface Props {
  followers: string[];
  following: string[];
  usernameToUser: Map<string, IEdgeNode>;
  followUser: ResultUserRowProps['followUser'];
  unfollowUser: ResultUserRowProps['unfollowUser'];
  currentUser: string;
}

export function ResultsEdges(props: Props) {
  const usersOnlyTheyFollowMe = getUsersOnlyTheyFollowMe(props.followers, props.following);
  const usersOnlyIFollowThem = getUsersOnlyIFollowThem(props.followers, props.following);

  const [tab, setTab] = useState(0);
  // actual for 500+ items in list; ideally, should be solved by virtualization
  const [isListShown, setIsListShown] = useState(false);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  const edges = tab === 0 ? usersOnlyTheyFollowMe : usersOnlyIFollowThem;
  const isListTooBigForRendering = edges.length > 500;

  useEffect(() => {
    if (isListTooBigForRendering) {
      setIsListShown(false);
    } else {
      setIsListShown(true);
    }
  }, [props.followers, props.following]);

  const handleDownload = () => {
    const content = edges
      .map(edge => `https://www.instagram.com/${edge}`)
      .join('\n');
    const fileName = tab === 0
      ? 'Only They Follow Me'
      : 'Only I Follow Them';
    const fileDate = new Date().toLocaleString();
    downloadFile(content, `${fileName} ${fileDate}.txt`);
  };

  return (
    <div>
      <Tabs value={tab} onChange={handleChange} aria-label="not mutual followers tabs">
        <Tab
          label={
            <div>
              Only They Follow Me
              <NotMutualFollower />
            </div>
          }
          id={'tab-1'}
        />
        <Tab
          label={
            <div>
              Only I Follow Them
              <NotMutualFollowing />
            </div>
          }
          id={'tab-2'}
        />
      </Tabs>

      {
        edges.length > 0 && (
          <Box mb={1}>
            <Button
              variant={'outlined'}
              color={'primary'}
              onClick={handleDownload}
              fullWidth={false}
            >
              Download as .txt
            </Button>

            <Button
              variant={'outlined'}
              color={'primary'}
              onClick={() => setIsListShown(!isListShown)}
              fullWidth={false}
            >
              {isListShown ? 'Hide ' : 'Show '}
              list
            </Button>
          </Box>
        )
      }

      {
        isListShown && (
          <List>
            {
              edges.map(username => (
                <ResultUserRow
                  key={username}
                  username={username}
                  user={props.usernameToUser.get(username)}
                  followUser={props.followUser}
                  unfollowUser={props.unfollowUser}
                  type={tab === 0 ? 'follower' : 'following'}
                  isSimpleRendering={isListTooBigForRendering}
                />
              ))
            }
          </List>
        )
      }
    </div>
  );
}
