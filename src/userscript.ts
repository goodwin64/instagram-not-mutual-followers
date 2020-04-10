import pkg from '../package.json';

const userScript = {
    id: pkg.name,
    name: "Instagram: not mutual followers",
    version: pkg.version,
    description: pkg.description,
    author: "goodwin64",
    hostname: "instagram.com",
    sitename: "instagram.com",
    namespace: "instagram.com",
    runAt: "document-start",
    match: 'https://www.instagram.com/*'
};

export default userScript;
