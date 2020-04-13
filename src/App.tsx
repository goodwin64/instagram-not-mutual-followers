import React from 'react';

import {OpenModalButton} from "~src/components/OpenModalButton";
import {MainDialog} from "~src/components/MainDialog/MainDialog";

export function App() {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const onDialogToggle = () => setIsDialogOpen(!isDialogOpen);

    return (
        <>
            <OpenModalButton onDialogToggle={onDialogToggle}/>
            <MainDialog open={isDialogOpen}/>
        </>
    )
}
