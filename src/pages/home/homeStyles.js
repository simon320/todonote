import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";


export const DivContainerHomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    width: 100vw;
`
const borderFlicker = keyframes`
    from {
        border: 4px solid #6dcccc;
    }
    to {
        border: 4px solid transparent;
    }
`

export const ButtonDownloadStyled = styled.button`
    border: 2px solid transparent;
    border-radius: 25px;
    background: #d3d3d3;
    width: 125px;
    height: 40px;
    padding: 8px;
    position: absolute;
    right: 0;
    margin: 5px 25px;

    animation: ${borderFlicker} 1s 5 alternate;

    &:hover {
        background: #fff;
        border: 4px solid #d3d3d3; 
    }
`

export const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivContainerListNoteStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 330px;
    margin: .5rem 0;
    border-radius: 5px;
    padding: .5rem;
    background: #aaeeff40;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    margin-left: 1rem;
`

export const ButtonAdd = styled.button`
    border: none;
    border-radius: 35px;
    font-size: 1.2rem;
    font-weight: 700;
    background: #6dcccc;
    box-shadow: 3px 3px 6px #1c2c30;
    color: #000;
    padding:0.7rem; 
    width: max-content;
    margin: 2rem auto; 
`

export const DeleteStyled = styled(MdDelete)`
    color: #222222;
`