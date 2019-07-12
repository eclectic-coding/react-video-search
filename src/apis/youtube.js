import axios from 'axios'

const KEY = 'AIzaSyCn0rWZnxcIhL0UL_b_QwIUimqAftt6EMk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
