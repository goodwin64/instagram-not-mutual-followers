import {Button, Dialog, DialogContent, DialogTitle, LinearProgress, Typography} from "@material-ui/core";
import { h } from "preact";
import * as pkg from "~pkg";
import {collectEdges} from "~src/services/ApiService";
import {IUser} from "~src/interfaces/IUser";
import { useState } from 'preact/hooks';
import { ResultsEdges } from '~src/components/ResultsEdges/ResultsEdges';

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

interface Props {
    open: boolean;
    onDialogClose: () => void;
}

const bot = createBot();

export function MainDialog(props: Props) {
    const [isRunning, setIsRunning] = useState(false);

    const [followers, setFollowers] = useState<string[]>([]);
    const [following, setFollowing] = useState<string[]>([]);

    const startBot = () => {
        setIsRunning(true);
        bot.startBot()
            .then(([followers, following]) => {
                setFollowers(followers);
                setFollowing(following);
                setIsRunning(false);
            });
    };

    return (
        <Dialog open={props.open} onClose={props.onDialogClose} maxWidth={'lg'} fullWidth>
            <DialogTitle>{pkg.name}</DialogTitle>
            <DialogContent>
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
                    isRunning && <LinearProgress/>
                }

                <ResultsEdges
                  followers={followers}
                  following={following}
                />
            </DialogContent>
            <Typography variant={'body2'}>Version: {pkg.version}</Typography>
        </Dialog>
    );
}
