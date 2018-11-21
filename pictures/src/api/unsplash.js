import axios from 'axios';

const agent = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: "Client-ID db4a1ca8994746ab44405903f4d78645942d2666a1e0d9eab465aa7203c4ae98" },
});

export default agent;

//얘는 anxios를 처리해주는 agent 역학.