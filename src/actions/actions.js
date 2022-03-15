import {SET_POKEMONS, TOGGLE_LOADER, SET_FAVORITE} from './types'
import { getPokemon } from '../API/getPokemon'
import axios from 'axios'

export const setPokemons = (payload) =>({
    type: SET_POKEMONS,
    payload
})

export const setFavorite = (payload)=>({
  type: SET_FAVORITE,
  payload
})

export const LOADER = _ =>({
  type: TOGGLE_LOADER
})


export const getPokemonWithDetails = _ =>(dispatch)=>{
  try {
    dispatch(LOADER())
    getPokemon().then((data)=>{  
      const {results} = data;
      return Promise.all( results.map(pokemon =>axios.get(pokemon.url) ) )
    }).then((pokemons)=>{ 
      const data = pokemons.map((response)=>response.data)
      dispatch(setPokemons(data))
      dispatch(LOADER())
    })
  } catch {

  }
    
}


