import React, { useContext } from 'react'
import { TitleStyled } from '../../components/title/TitleStyles';
import TodoList from '../../components/todo/TodoList';
import { ListContext } from '../../context/todoListContext';
import { LinkArrowStyled } from './noteStyles';
import { FaArrowLeft } from 'react-icons/fa';

const Note = () => {

const { title } = useContext(ListContext);

  return (
    <div className="container-page">
      <LinkArrowStyled to="/"><FaArrowLeft></FaArrowLeft></LinkArrowStyled>
      <TitleStyled>{title}</TitleStyled>

      <TodoList />
    </div>
  );
}

export default Note