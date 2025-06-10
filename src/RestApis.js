import axios from 'axios';
const BASE_API = process.env.REACT_APP_BASE_API;

export const getShortLink=(body)=>{
    return axios.post(`${BASE_API}/shorten`,body)
}

export const handleLogin=(payload)=>{
    return axios.post(`${BASE_API}/login`,payload )
}

export const handleSignUp=(payload)=>{
    return axios.post(`${BASE_API}/register`, payload)
}