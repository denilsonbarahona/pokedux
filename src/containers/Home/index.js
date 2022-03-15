import React,{useEffect} from 'react'; 
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {getPokemonWithDetails} from '../../actions/actions';
import Loader from '../../components/Loader';

function Home() {
  const {list} = useSelector((state)=>state.PokemonReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPokemonWithDetails())
  },[dispatch])

  
  return (
    <div className='Home'>
      <Searcher />
      <Loader></Loader>
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
