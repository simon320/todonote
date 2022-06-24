import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivContainerHomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
`

export const ButtonDownloadStyled = styled.button`
    border: none;
    border-radius: 25px;
    width: 125px;
    padding: 8px;
    position: absolute;
    right: 0;
    margin: 0 25px;
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
    color: #000;
    margin-left: 1rem;
`