import React from 'react'
import pokedex from '../../assets/pokeAPI/pokedex.png'
import Loader from './Loader';
import { Error, Img, ImgPokemon, InfoDiv, PokedexStyled } from './PokeApiStyles';


const Pokedex = (props) => {

    const { name, sprites, types, order, moves, isLoading, error } = props;

  return (
    <PokedexStyled>
      <Img src={pokedex} alt="" />

        {isLoading ? <Loader /> : (error ? "" : <ImgPokemon src={sprites?.front_default} alt="" />)}
      

      {error ? (
        <Error><p>{error}</p></Error>
      )
        :
      <InfoDiv>
        <h3 style={{fontFamily: 'Goldman'}}>{name?.toUpperCase()}</h3>
        <p>{order}</p>
        {types && <p style={{alignSelf: 'flex-start', marginLeft: '5px'}}>{types[0].type.name}</p>}
        {moves && <p style={{alignSelf: 'flex-start', marginLeft: '5px'}}>{moves[0].move.name}</p>}  
      </InfoDiv>
      }

    </PokedexStyled>
  );
}

export default Pokedex