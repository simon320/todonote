import React, { useState } from 'react'
import { Button, ContainerInputStyled, Input } from './PokeApiStyles';


const Search = ({ handleSubmit }) => {
    const [pokemon, setPokemon] = useState("");

  return (
    <ContainerInputStyled onSubmit={(e) => {
        handleSubmit(e, pokemon);
        setPokemon("");
      }}>
        <Input 
          value={pokemon}
          placeholder="Buscar pokemon"
          onChange={(e) => setPokemon(e.target.value)}
        />
        <Button  type='submit'>BUSCAR</Button>
      </ContainerInputStyled>
  )
}

export default Search