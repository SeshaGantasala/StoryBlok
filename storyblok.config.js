// storyblok.config.js
module.exports = {
    componentDirectory: 'storyblok',
    backupDirectory: 'backup',
   
    oauthToken: process.env.STORYBLOK_OAUTH_TOKEN,
    spaceId: process.env.STORYBLOK_SPACE_ID,
  };