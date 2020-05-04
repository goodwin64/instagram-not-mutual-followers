import { h } from 'preact';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import { ResultsEdges } from '~src/components/ResultsEdges/ResultsEdges';
import { useEffect, useState } from 'preact/hooks';
import { bot } from '~src/components/MainDialog/MainDialog';
import { IEdgeNode } from '~src/interfaces/edges-response/IEdgeNode';
import { Props as ResultUserRowProps } from '~src/components/ResultUserRow/ResultUserRow';

interface Props {
  username: string;
}

export function UserAnalyzer(props: Props) {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

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
    if (!isRunning) {
      setProgress(0);
    }
  }, [isRunning]);

  useEffect(() => {
    setLocalCache({
      followers: [],
      following: [],
      usernameToUser: new Map(),
    });
  }, [props.username]);

  const startBot = () => {
    setIsRunning(true);
    bot.startBot(setProgress)
      .then(({ followers, following, usernameToUser }) => {
        setLocalCache({
          followers,
          following,
          usernameToUser,
        });
        setIsRunning(false);
      });
  };

  const followUser: ResultUserRowProps['followUser'] = (username) => {
    setLocalCache((prevState) => ({
      ...prevState,
      following: prevState.following.concat(username),
    }));
  };

  const unfollowUser: ResultUserRowProps['unfollowUser'] = (username) => {
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
        isRunning && <LinearProgress variant={'determinate'} value={progress * 100} />
      }

      <ResultsEdges
        followers={localCache.followers}
        following={localCache.following}
        usernameToUser={localCache.usernameToUser}
        followUser={followUser}
        unfollowUser={unfollowUser}
        currentUser={props.username}
      />
    </div>
  );
}
