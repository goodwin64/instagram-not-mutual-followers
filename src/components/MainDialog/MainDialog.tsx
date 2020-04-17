import {Button, Dialog, DialogContent, DialogTitle, LinearProgress, Typography} from "@material-ui/core";
import { h } from "preact";
import * as pkg from "~pkg";
import {collectEdges} from "~src/services/ApiService";
import {IUser} from "~src/interfaces/IUser";
import { useState } from 'preact/hooks';

export function logResults(
    followers: Array<string>,
    following: Array<string>,
) {
    const s1 = new Set(followers);
    const s2 = new Set(following);

    const onlyTheyFollowMe = [...s1.difference(s2)];
    const onlyIFollowThem = [...s2.difference(s1)];

    console.log('onlyTheyFollowMe (you ignore them):', onlyTheyFollowMe);
    console.log('onlyIFollowThem (fucking bastards):', onlyIFollowThem);
}

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
}

const bot = createBot();

export function MainDialog(props: Props) {
    const [isRunning, setIsRunning] = useState(false);
    const startBot = () => {
        setIsRunning(true);
        bot.startBot()
            .then(([followers, following]) => {
                logResults(followers, following);
                alert('Press F12 and see result in console ->');
                setIsRunning(false);
            });
    };

    return (
        <Dialog open={props.open}>
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
            </DialogContent>
            <Typography variant={'body2'}>Version: {pkg.version}</Typography>
        </Dialog>
    );
}
