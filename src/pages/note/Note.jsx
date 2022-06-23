import React, { useContext } from 'react'
import { TitleStyled } from '../../components/title/TitleStyles';
import TodoList from '../../components/todo/TodoList';
import { ListContext } from '../../context/todoListContext';

const Note = () => {

const { title } = useContext(ListContext);

  return (
    <div className="container-page">
      <TitleStyled>{title}</TitleStyled>

      <TodoList />
    </div>
  );
}

export default Note