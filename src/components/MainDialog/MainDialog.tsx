import {Dialog, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import { h } from "preact";
import * as pkg from "~pkg";
import {collectEdges} from "~src/services/ApiService";
import {IUser} from "~src/interfaces/IUser";
import { useEffect, useState } from 'preact/hooks';
import { currentUserUsernameSelector } from '~src/selectors/currentUser';
import { NoUserDetected } from '~src/components/NoUserDetected/NoUserDetected';
import { UserAnalyzer } from '~src/components/UserAnalyzer/UserAnalyzer';

export function usernameFromUserSelector(user: IUser) {
    return user.username;
}

export function createBot() {
    const api = {
        startBot: () => {
            return Promise.resolve(collectEdges())
                .then(data => data || [])
                .then(([followers, following]) => [
                    followers.map(usernameFromUserSelector),
                    following.map(usernameFromUserSelector),
                ]);
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
