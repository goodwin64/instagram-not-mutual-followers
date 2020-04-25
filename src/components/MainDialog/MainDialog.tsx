import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { h } from "preact";
import * as pkg from "~pkg";
import {collectEdges} from "~src/services/ApiService";
import {IUser} from "~src/interfaces/IUser";
import { useEffect, useState } from 'preact/hooks';
import { currentUserUsernameSelector } from '~src/selectors/currentUser';
import { NoUserDetected } from '~src/components/NoUserDetected/NoUserDetected';
import { UserAnalyzer } from '~src/components/UserAnalyzer/UserAnalyzer';
import { collectUsernameToUserMap } from '~src/helpers/collectUsernameToUserMap';
import { SetProgress } from '~src/interfaces/setProgress';

export function usernameFromUserSelector(user: IUser) {
    return user.username;
}

export function createBot() {
    const api = {
        startBot: (setProgress: SetProgress) => {
            return Promise.resolve(collectEdges(setProgress))
                .then(data => data || [])
                .then(([followers, following]) => {
                    return {
                        followers: followers.map(usernameFromUserSelector),
                        following: following.map(usernameFromUserSelector),
                        usernameToUser: collectUsernameToUserMap(followers, following),
                    }
                });
        },
    };

    return api;
}

export const bot = createBot();

interface Props {
    open: boolean;
    onDialogClose: () => void;
}

export function MainDialog(props: Props) {
    const [currentUserUsername, setCurrentUserUsername] = useState('');

    useEffect(() => {
      setCurrentUserUsername(currentUserUsernameSelector() || '');
    }, [props.open]);

    return (
        <Dialog
          open={props.open}
          onClose={props.onDialogClose}
          maxWidth={'lg'}
          fullWidth
        >
            <DialogTitle>{pkg.name}</DialogTitle>
            <DialogContent
              style={{ alignItems: 'center' }}
            >
              {
                currentUserUsername
                  ? <UserAnalyzer username={currentUserUsername} />
                  : <NoUserDetected/>
              }
              <Typography variant={'body2'}>Version: {pkg.version}</Typography>
            </DialogContent>
        </Dialog>
    );
}
