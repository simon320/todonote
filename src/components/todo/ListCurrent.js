import React, { useContext, useState } from 'react';
import { ListContext } from '../../context/todoListContext';
import { MdDelete } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import { ButtonStyled, DivButtonStyles, DivContainerListStyled, DivContainerNoteStyled, ParagraphStyled } from './ListCurrentStyles';


const ListCurrent = () => {
    const { list, setList, title } = useContext(ListContext);

    const handleDelete = (note) => {
        setList(list.filter((item)=> item.id !== note.id));
    }


    const handleCompleted = (note) => {
        let newList = [];
        for (const item of list) {
            if(note.id == item.id){
                item.completed = !item.completed;
                newList.push(item);
            } else {newList.push(item)}
        }
        setList(newList)
    }


  return (
    <DivContainerListStyled>
        {
            list.map((note)=> {
                return (
                note.title == title &&
                <DivContainerNoteStyled key={note.id}>

                    <ParagraphStyled completed={note.completed}>{note.input}</ParagraphStyled>

                    <DivButtonStyles>
                        <ButtonStyled onClick={() => handleCompleted(note)}>
                        {
                            note.completed ? <AiOutlineReload></AiOutlineReload> : <FaCheck></FaCheck>
                        }
                        </ButtonStyled>
                        <ButtonStyled deleted onClick={() => handleDelete(note)}><MdDelete></MdDelete></ButtonStyled>
                    </DivButtonStyles>

                </DivContainerNoteStyled>
            )})
        }
    </DivContainerListStyled>
  )
}

export default ListCurrent
