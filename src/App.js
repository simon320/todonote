import "./App.css"
import React, { useEffect } from "react";
import Title from "./components/title/Title";
import ListCurrent from "./components/todo/ListCurrent";
import TodoList from "./components/todo/TodoList";
import { ListProvider } from "./context/todoListContext";


function App() {

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

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

  return (
    <ListProvider>

      <div className="container-page">
        {isReadyForInstall && <button onClick={downloadApp}>Descargar App</button>}
        <Title/> 
        <button id='butInstall' arial-label='Install' hidden>INSTALAR APP</button>
        <TodoList />
      </div>
      
    </ListProvider>
  );
}

export default App;
