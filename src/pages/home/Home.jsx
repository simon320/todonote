import React, { useContext, useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { ButtonStyled } from '../../components/todo/ListCurrentStyles';
import { DivTodoStyled, InputTodoStyled } from '../../components/todo/TodoListStyles';
import { ListContext } from '../../context/todoListContext';
import { useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { DivContainerHomeStyled, ButtonDownloadStyled, DivStyled, LinkStyled, ButtonAdd, DeleteStyled } from './homeStyles';
import { motion } from 'framer-motion'
import { MdDelete } from 'react-icons/md';



const Home = () => {
  const { setTitle, listTitle, setListTitle, list, setList } = useContext(ListContext)
  const [newTitle, setNewTitle] = useState("")
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  const handleCreateList = (e) => {
    e.preventDefault()
    if (newTitle !== "") {
      listTitle.push({
        id: uuidv4(),
        newTitle
      })
      setListTitle(listTitle);
      setTitle(newTitle);
      setHomeVisible(true)
    }
    setInputVisible(false)
    setNewTitle("");
    setTimeout(()=> {
      navigate("/note");
    }, 500)
  }

  const handleDelete = (listnote) => {
    setList(list.filter((item)=> item.title !== listnote.newTitle));
    setListTitle(listTitle.filter((item)=> item.id !== listnote.id));
  }


  return (

      <DivContainerHomeStyled className={homeVisible && 'hidden'}>

        {isReadyForInstall && (<ButtonDownloadStyled onClick={downloadApp}>Descargar App</ButtonDownloadStyled>)}

        <motion.h1
          animate={{
            x: [-600, 8, -5, 0],
            rotateY: [0, 34, 0] 
          }}
        >
          misNotas
        </motion.h1>

        <DivTodoStyled onSubmit={handleCreateList}>
        
        {inputVisible &&
          <motion.div 
          className='container-div'
          animate={{
            opacity:[0, 1],
          }}
          transition={{
            ease: 'easeOut',
            duration: 1.5,
            type: 'spring'
          }}
        >
            <InputTodoStyled 
                type="text" 
                value={newTitle} 
                onChange={(e)=> setNewTitle(e.target.value)}
                placeholder="Crear una lista..."
            />
            <ButtonStyled type='submit'>
                <FaPlus />
            </ButtonStyled>
          </motion.div>
        }

          
          <DivStyled>
              {
                listTitle.map((listnote)=> {
                  return (
                        <motion.section
                          className='container-list'
                          key={uuidv4()}
                        >
                          <LinkStyled
                            onClick={() => setTitle(listnote.newTitle)}
                            to={`/note`}
                          >
                            {listnote.newTitle}
                          </LinkStyled>
                          <ButtonStyled dark deleted onClick={()=> handleDelete(listnote)}>
                            <DeleteStyled />
                          </ButtonStyled>
                        </motion.section>
                      );
                })
              }
          </DivStyled>

        {!inputVisible &&
          <motion.button 
            onClick={() => setInputVisible(true)}
            className='button-add'
            animate={{
              opacity: [0, 1]
            }}
              transition= {{
                duration: 1.5,
                delay: 0.2
              }}
          >
            AGREAR LISTA
          </motion.button>
        }
        </DivTodoStyled>
      </DivContainerHomeStyled>

  )
}

export default Home