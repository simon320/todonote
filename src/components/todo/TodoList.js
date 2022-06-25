import React, { useState, useContext } from 'react'
import { DivTodoStyled, InputTodoStyled } from './TodoListStyles'
import { ListContext } from '../../context/todoListContext';
import ListCurrent from './ListCurrent';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion'
import { ButtonStyled } from './ListCurrentStyles';
import { FaPlus } from 'react-icons/fa';


const TodoList = () => {
  const { list, setList, title } = useContext(ListContext);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault()
    
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
    <DivTodoStyled onSubmit={(e) => handleAdd(e)}>
    
      <motion.div 
        className='container-div'
        animate={{
          opacity: [0, 1]
        }}
        transition={{
          duration: 2,
          delay: 0.5
        }}
      >
          <InputTodoStyled 
              type="text" 
              value={input} 
              onChange={(e)=> setInput(e.target.value)}
              placeholder="Debo recordar que..."
          />
          <ButtonStyled type='submit'>
              <FaPlus />
          </ButtonStyled>
      </motion.div>

      <ListCurrent />

    </DivTodoStyled>
  )
}

export default TodoList