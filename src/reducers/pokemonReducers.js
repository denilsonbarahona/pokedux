import {SET_POKEMONS,  SET_FAVORITE} from '../actions/types'

const initialState = {
    list: [],
    favorites:[]
}

const PokemonReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_POKEMONS: return {...state, list:action.payload}
        case SET_FAVORITE: return {...state, favorites: [...state.favorites, action.payload]}
        default: return state 
    }
}

export default PokemonReducer