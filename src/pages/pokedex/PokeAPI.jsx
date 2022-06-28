import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerLinkStyled, PokePageStyled } from './PokeApiStyles';
import misnotas from '../../assets/pokeAPI/misnotas.png'
import { useAxios } from './useAxios';
import Pokedex from './Pokedex';
import Loader from './Loader';
import Search from './Search';


const PokeAPI = () => {

  const {  data, isLoading, error, handleSubmit } = useAxios();

  return (
    <PokePageStyled>

      <ContainerLinkStyled>
        <Link to={'/'}>
          <img src={misnotas} alt="" />
        </Link>
      </ContainerLinkStyled>

      <Search handleSubmit={handleSubmit}/>
      
      <Pokedex isLoading={isLoading} error={error} {...data} />

    </PokePageStyled>
  )
}

export default PokeAPI