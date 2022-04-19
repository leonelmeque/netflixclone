module.exports = {
    async rewrites() {
        return [
            {
                source: '/browse',
                destination: 'https://api.watchmode.com/v1/sources/',
            }
        ]
    },
    env: {
        API_KEY: process.env.API_KEY,
        WEB_API: process.env.WEB_API,
        IMAGE_ENDPOINT: process.env.IMAGE_ENDPOINT
    }
}