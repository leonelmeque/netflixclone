module.exports = {
    async rewrites(){
        return [
            {
                source: '/browse',
                destination: 'https://api.watchmode.com/v1/sources/',
            }
        ]
    },
    env: {
        api_key: process.env.API_KEY
    }
}