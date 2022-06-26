import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa';
import { ListContext } from '../../context/todoListContext';
import ListCurrent from './ListCurrent';
import { ButtonStyled } from './ListCurrentStyles';
import { DivTodoStyled, InputTodoStyled } from './TodoListStyles'


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
        initial={{opacity: 0}}
        animate={{
          opacity: [0, 1]
        }}
        transition={{
          duration: 1,
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