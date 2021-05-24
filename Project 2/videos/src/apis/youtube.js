import axios from 'axios';

const KEY = 'AIzaSyBYgE-PsP-SmXSYSM8_1rygL65Pe3-tj5E'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

