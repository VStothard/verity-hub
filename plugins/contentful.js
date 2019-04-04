const contentful = require('contentful')
const config = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}
const client = contentful.createClient(config)

console.log(client, 2000)
export default client