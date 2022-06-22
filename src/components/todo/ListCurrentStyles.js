import styled from "styled-components";

export const DivContainerListStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const DivContainerNoteStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: .5rem 0;
    border-radius: 5px;
    padding: .5rem;
    background: #aaeeff40;
`

export const DivButtonStyles = styled.div`
    display: flex;
    flex-direction: row;
`

export const ButtonStyled = styled.button`
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #1f2f33;
        font-size: 1.2rem;
        border: none;
        border-radius: 50%;
        color: #bbc6c9;
        cursor: pointer;
        margin-left: 8px;
        overflow: visible;
        transition: all .1s;
        &:hover {
            background: ${props => props.deleted ? '#882222' : '#22aa22'};
            color: #fff;
            font-size: 1.4rem;
        }
        &:active {
            background: ${props => props.deleted ? '#ee2222' : '#44ee44'};
            font-size: 2rem;
        }
`

export const ParagraphStyled = styled.p`
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`