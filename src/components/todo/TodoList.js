import React, { useState, useContext } from 'react'
import { DivInputStyled, DivTodoStyled, InputTodoStyled } from './TodoListStyles'
import { FaPlus } from 'react-icons/fa';
import { ListContext } from '../../context/todoListContext';
import ListCurrent from './ListCurrent';
import { ButtonStyled } from './ListCurrentStyles';
import { v4 as uuidv4 } from 'uuid';


const TodoList = () => {
  const { list, setList } = useContext(ListContext);
  const [input, setInput] = useState("");

  const handleAdd = () => {

    if (input !== "") {
      list.push({
        id: uuidv4(),
        completed: false,
        input
      })

      setList(list);
      setInput("");
    }
  };


  return (
    <DivTodoStyled onSubmit={handleAdd}>
      
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