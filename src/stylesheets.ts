import { ALWAYS } from "userscripter/lib/environment";
import { Stylesheets, stylesheet } from "userscripter/lib/stylesheets";

import mutualFollowersBotStyles from './styles/mutualFollowersBotStyles.scss';

const STYLESHEETS = {
    main: stylesheet({
        condition: ALWAYS,
        css: ``,
    }),
    mutualFollowersBot: stylesheet({
        condition: ALWAYS,
        css: mutualFollowersBotStyles,
    })
} as const;

// This trick uncovers type errors in STYLESHEETS while retaining the static knowledge of its properties (so we can still write e.g. STYLESHEETS.foo):
const _: Stylesheets = STYLESHEETS; void _;

export default STYLESHEETS;
