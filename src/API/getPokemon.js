import axiosInstance from './api'

export const getPokemon = (limit=151)=>axiosInstance.get(`pokemon?limit=${limit}`).then(res=>res.data);

