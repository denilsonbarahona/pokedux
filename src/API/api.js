import axios from "axios";

const URL = process.env.POKEURL ?? 'https://pokeapi.co/api/v2/'

export default axios.create({
    baseURL: URL
})

