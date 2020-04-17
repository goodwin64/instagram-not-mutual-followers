import {h} from 'preact';
import { useState } from 'preact/hooks';

import {OpenModalButton} from "~src/components/OpenModalButton";
import {MainDialog} from "~src/components/MainDialog/MainDialog";

export function App() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const onDialogToggle = () => setIsDialogOpen(!isDialogOpen);

    return (
        <div>
            <OpenModalButton onDialogToggle={onDialogToggle}/>
            <MainDialog open={isDialogOpen}/>
        </div>
    )
}
