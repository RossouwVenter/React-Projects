import axios from 'axios';

const KEY = 'AIzaSyAYuqL8ru05H_BOdwij2-d3wItxJY6ncUo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

