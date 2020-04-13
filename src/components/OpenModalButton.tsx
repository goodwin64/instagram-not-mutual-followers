import React from "react";
import {ImageService} from "~src/services/ImageService";
import * as pkg from '~pkg';

interface Props {
    onDialogToggle: () => void;
}

export function OpenModalButton(props: Props) {
    return (
        <div
            onClick={props.onDialogToggle}
            id={'bot-control-button'}
            aria-label={pkg.name}
            title={pkg.name}
            dangerouslySetInnerHTML={{
                __html: ImageService.people
            }}
        />
    )
}
