import React from 'react'
import { useSelector } from 'react-redux';
import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react';

const Loader = _ =>{

    const {isLoading} = useSelector((state)=>state.LoaderReducer)

    return (
        <Dimmer active={isLoading}>
            <SemanticLoader></SemanticLoader>
        </Dimmer>
    )
}

export default Loader;
