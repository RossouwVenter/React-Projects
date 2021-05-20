import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers:{
        Authorization: 'Client-ID wbUFv2Js1Jj44rvYmAS6IkkNshGq-XSyisvj1SMVYYw'
    }
});