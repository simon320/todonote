import React, { useContext, useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import Title from '../../components/title/Title';
import { ButtonStyled, DivContainerListStyled, DivContainerNoteStyled, ParagraphStyled, DivButtonStyled } from '../../components/todo/ListCurrentStyles';
import { DivInputStyled, DivTodoStyled, InputTodoStyled } from '../../components/todo/TodoListStyles';
import { ListContext } from '../../context/todoListContext';
import { useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';
import { DivContainerHomeStyled, ButtonDownloadStyled, DivContainerListNoteStyled, DivStyled, LinkStyled } from './homeStyles';

const Home = () => {
  const { setTitle, listTitle, setListTitle, list, setList } = useContext(ListContext)
  const [newTitle, setNewTitle] = useState("")
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
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
    }
    setNewTitle("");
    navigate("/note");
  }

  const handleDelete = (listnote) => {
    setList(list.filter((item)=> item.title !== listnote.newTitle));
    setListTitle(listTitle.filter((item)=> item.id !== listnote.id));
  }


  return (
    <DivContainerHomeStyled style={{background: "#4e727e", height: "100%"}}>

      {isReadyForInstall && (<button onClick={downloadApp}>Descargar App</button>)}
      <ButtonDownloadStyled onClick={downloadApp}>Descargar App</ButtonDownloadStyled>
      <Title />
      <DivTodoStyled onSubmit={handleCreateList}>
      
      <DivInputStyled>
        <InputTodoStyled 
          type="text" 
          value={newTitle} 
          onChange={(e)=> setNewTitle(e.target.value)}
          placeholder='Crea una lista nueva'/>
        <ButtonStyled type='submit'><FaPlus></FaPlus></ButtonStyled>
      </DivInputStyled>

      <DivStyled>
        {
            listTitle.map((listnote)=> {
                return (
                  <DivContainerListNoteStyled
                  key={uuidv4()}>
                    <LinkStyled
                      onClick={() => setTitle(listnote.newTitle)}
                      to={`/note`}
                    >
                      {listnote.newTitle}
                    </LinkStyled>
                    <ButtonStyled onClick={()=> handleDelete(listnote)}>
                      <MdDelete></MdDelete>
                    </ButtonStyled>
                  </DivContainerListNoteStyled>
                );})
        }
    </DivStyled>

    </DivTodoStyled>

    </DivContainerHomeStyled>
  )
}

export default Home