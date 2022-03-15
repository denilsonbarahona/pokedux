import { combineReducers } from "redux";
import PokemonReducer from "./pokemonReducers";
import LoaderReducer from './LoaderReducer'

export default combineReducers({
    PokemonReducer,
    LoaderReducer
}) 

