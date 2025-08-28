import axios from 'axios';
const BASE_API = process.env.REACT_APP_BASE_API;
const URL_SHORTEN = process.env.REACT_APP_URL_SHORTEN_API;

export const getShortLink=(body,token)=>{
    return axios.post(`${URL_SHORTEN}/shorten`,body,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}   

export const handleLogin=(payload)=>{
    return axios.post(`${BASE_API}/login`,payload )
}

export const handleSignUp=(payload)=>{
    return axios.post(`${BASE_API}/register`, payload)
}