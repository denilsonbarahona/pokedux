import { TOGGLE_LOADER } from "../actions/types";

const initialState = {
    isLoading: false, 
}


const LoaderReducer = (state = initialState, actions)=>{
    switch(actions.type){
        case TOGGLE_LOADER: return {...state, isLoading: !state.isLoading}
        default: return state
    }
}

export default LoaderReducer