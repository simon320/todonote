import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const DivTodoStyled = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`

export const DivInputStyled = styled.div`
    display: flex;
    justify-content: center;
`

export const InputTodoStyled = styled.input`
    border: none;
    border-radius: 25px;
    width: 55vw;
    height: 35px;
    padding-left: 15px;
    margin-bottom: 2.5rem;
`
// export const LinkStyled = styled(Link)`
//     text-decoration: none;
//     font-size: 1.2rem;
//     font-weight: 700;
//     fill: #000;
//     margin-left: 1rem;
// `