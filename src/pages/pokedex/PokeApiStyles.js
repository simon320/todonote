import styled from "styled-components";

export const PokePageStyled = styled.main`
    width: 100%;
    height: 100vh;
    background: #ff8833;
`

export const ContainerLinkStyled = styled.div`
    padding: 1.2rem;
`

export const ContainerInputStyled = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const Input = styled.input`
    border: none;
    border-radius: 15px;
    padding: 5px;
    margin-right: 10px; 
`

export const Button = styled.button`
    border: none;
    border-radius: 15px;
    padding: 5px;
    background: #ff6622;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
`

export const PokedexStyled = styled.div`
    position: relative;
    width: 380px;
    display: flex;
    justify-content: center;
    margin: 3rem auto;
`

export const Img = styled.img`
    width: 370px;
`

export const ImgPokemon = styled.img`
    position: absolute;
    left: 40px;
    top: 100px;
    width: 100px;
`

export const InfoDiv = styled.div`
    /* background-color: #fff; */
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px;
    height: 110px;
    right: 18px;
    top: 90px;
    color: #55dd22;
    font-family: 'Goldman', cursive;
`

export const Error = styled.div`
    /* background-color: #fff; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 110px;
    text-align: center;
    position: absolute;
    right: 18px;
    top: 90px;
    color: #55dd22;
    font-family: 'Goldman', cursive;
`