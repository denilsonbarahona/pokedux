import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Label, Grid, Icon } from 'semantic-ui-react';
import { FAV_COLOR, MAIN_COLOR } from '../../utils/constants';
import { setFavorite } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css'

const PokemonCard = ({pokemon}) =>{
    const {favorites} = useSelector((state)=>state.PokemonReducer)
    const dispatch = useDispatch()

    const HandleFavorite =pokemonId=>{
        dispatch(setFavorite(pokemonId))
    }

    
    return (
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className='PokemonCard'>
                <Button className='pokemon-favorite' onClick={()=>HandleFavorite(pokemon.id)}>
                    <Icon name='favorite' 
                         color={ favorites.includes(pokemon.id)?FAV_COLOR:'' } ></Icon>
                </Button>
                <Image centered src={pokemon.sprites.front_default} alt='pokemon image'></Image>
                <p>{pokemon.name}</p>
                { pokemon.types.map(type=>(<Label 
                        key={`${pokemon.id}-${type.type.name}`}
                        color={MAIN_COLOR}>
                        {type.type.name}
                    </Label>)) }  
            </div>
        </Grid.Column>
    )
}


export default PokemonCard;