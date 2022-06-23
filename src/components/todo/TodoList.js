import React, { useState, useContext } from 'react'
import { DivInputStyled, DivTodoStyled, InputTodoStyled } from './TodoListStyles'
import { FaPlus } from 'react-icons/fa';
import { ListContext } from '../../context/todoListContext';
import ListCurrent from './ListCurrent';
import { ButtonStyled } from './ListCurrentStyles';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';


const TodoList = () => {
  const { list, setList, title } = useContext(ListContext);
  const [input, setInput] = useState("");

  const handleAdd = () => {

    if (input !== "") {
      list.push({
        id: uuidv4(),
        title,
        completed: false,
        input
      })

      setList(list);
      setInput("");
    }
  };


  return (
    <DivTodoStyled onSubmit={handleAdd}>

      <Link to="/">home</Link>
      
      <DivInputStyled>
        <InputTodoStyled 
          type="text" 
          value={input} 
          onChange={(e)=> setInput(e.target.value)}
          placeholder='Debo recordar que...'/>
        <ButtonStyled type='submit'><FaPlus></FaPlus></ButtonStyled>
      </DivInputStyled>

      <ListCurrent></ListCurrent>
    </DivTodoStyled>
  )
}

export default TodoList