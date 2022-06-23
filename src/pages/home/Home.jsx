import React, { useContext, useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import Title from '../../components/title/Title';
import { ButtonStyled, DivContainerListStyled, DivContainerNoteStyled, ParagraphStyled, DivButtonStyled } from '../../components/todo/ListCurrentStyles';
import { DivInputStyled, DivTodoStyled, InputTodoStyled } from '../../components/todo/TodoListStyles';
import { ListContext } from '../../context/todoListContext';
import { useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';

const Home = () => {
  const { setTitle, listTitle, setListTitle } = useContext(ListContext)
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
        newTitle
      })

      setListTitle(listTitle);
      setTitle(newTitle);


    }
    setTimeout(()=>{
      setNewTitle("");
      navigate("/note");
    }, 200)
  }

    console.log(listTitle);

  return (
    <div style={{background: "#4e727e", height: "100%"}}>

      {isReadyForInstall && (<button onClick={downloadApp}>Descargar App</button>)}
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

      <DivContainerListStyled>
        {
            listTitle.map((listnote)=> {
                return (
                  <DivContainerNoteStyled
                  key={uuidv4()}>
                    <Link
                      onClick={() => setTitle(listnote.newTitle)}
                      to={`/note`}
                    >
                      {listnote.newTitle}
                    </Link>
                    <ButtonStyled>
                      <MdDelete></MdDelete>
                    </ButtonStyled>
                  </DivContainerNoteStyled>
                );})
        }
    </DivContainerListStyled>

    </DivTodoStyled>

    </div>
  )
}

export default Home