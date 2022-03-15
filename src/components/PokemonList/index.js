import React from 'react'
import PokemonCard from './PokemonCard'
import { Grid } from 'semantic-ui-react'
 
const PokemonList = ({pokemons}) => { 
    return ( 
            <Grid className='PokemonList'>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon}/>
                ))}
            </Grid> 
    )
}

export default PokemonList