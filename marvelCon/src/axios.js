import * as axios from 'axios'

let options = {}
    // The server-side needs a full url to works
if (process.server) {
    options.baseURL = `https://gateway.marvel.com:443'
}

export default axios.create(options)