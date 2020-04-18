import { h } from 'preact';
import { Button, LinearProgress, Typography } from '@material-ui/core';

import { ResultsEdges } from '~src/components/ResultsEdges/ResultsEdges';
import { useEffect, useState } from 'preact/hooks';
import { bot } from '~src/components/MainDialog/MainDialog';
import { IEdgeNode } from '~src/interfaces/edges-response/IEdgeNode';

interface Props {
  username: string;
}

export function UserAnalyzer(props: Props) {
  const [isRunning, setIsRunning] = useState(false);

  const [localCache, setLocalCache] = useState<{
    followers: string[];
    following: string[];
    usernameToUser: Map<string, IEdgeNode>;
  }>({
    followers: [],
    following: [],
    usernameToUser: new Map(),
  });

  useEffect(() => {
    setLocalCache({
      followers: [],
      following: [],
      usernameToUser: new Map(),
    });
  }, [props.username]);

  const startBot = () => {
    setIsRunning(true);
    bot.startBot()
      .then(({ followers, following, usernameToUser }) => {
        setLocalCache({
          followers,
          following,
          usernameToUser,
        });
        setIsRunning(false);
      });
  };

  const unfollowUser = (username: string) => {
    setLocalCache((prevState) => ({
      ...prevState,
      following: prevState.following.filter(edgeUsername => edgeUsername !== username),
    }));
  };

  return (
    <div>
      <Typography variant={'body1'}>User: {props.username}</Typography>
      <Button
        variant={'outlined'}
        color={'primary'}
        onClick={startBot}
        disabled={isRunning}
        fullWidth={false}
      >
        Start
      </Button>

      {
        isRunning && <LinearProgress />
      }

      <ResultsEdges
        followers={localCache.followers}
        following={localCache.following}
        usernameToUser={localCache.usernameToUser}
        unfollowUser={unfollowUser}
        currentUser={props.username}
      />
    </div>
  );
}
