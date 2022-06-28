import "./App.css"
import React from "react";
import { ListProvider } from "./context/todoListContext";
import { Routes, Route } from "react-router-dom";
import Note from "./pages/note/Note";
import Home from "./pages/home/Home";
import PokeAPI from "./pages/pokedex/PokeAPI";


function App() {

  return (
    <ListProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<Note />} />
        <Route path="/pokedex" element={<PokeAPI />} />
      </Routes>
    </ListProvider>
  );
}

export default App;
