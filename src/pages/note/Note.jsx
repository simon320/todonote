import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { ListContext } from '../../context/todoListContext';
import TodoList from '../../components/todo/TodoList';
import { LinkArrowStyled } from './noteStyles';

const Note = () => {
  const { title } = useContext(ListContext);

  return (
    <div className="container-page">

      <LinkArrowStyled to="/">
        <FaArrowLeft />
      </LinkArrowStyled>

      <motion.h1
        animate={{
          opacity: [0.5, 1],
          y: [-100, 6, -35, 2, -10, 0],
          scale: [0.8, 1.005, 1],
          rotate: [8, 4, -6, -3, 2, 0],
        }}
        transition={{
          ease: "easeOut",
          duration: 0.8,
          type: "spring",
        }}
      >
        {title}
      </motion.h1>

      <TodoList />

    </div>
  );
};

export default Note