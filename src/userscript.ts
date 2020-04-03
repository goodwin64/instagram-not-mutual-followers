const scriptDescription = "With this script you will detect which people you follow do not follow you mutually. And vice-versa, which your followers don't you follow. Source code can be found here: https://github.com/goodwin64/instagram-not-mutual-followers";

export default {
    id: "instagram-not-mutual-followers",
    name: "Instagram not mutual followers",
    version: "0.1.0",
    description: scriptDescription,
    author: "goodwin64",
    hostname: "instagram.com",
    sitename: "instagram.com",
    namespace: "instagram.com",
    runAt: "document-start",
    match: 'https://www.instagram.com/*'
} as const;
