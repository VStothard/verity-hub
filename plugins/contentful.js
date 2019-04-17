const contentful = require('contentful')
const config = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}

console.log(config.accessToken, 7000)
const client = contentful.createClient(config)

console.log(client, 8000)
export default client