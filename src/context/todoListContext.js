import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const ListContext = createContext();

export const ListProvider = ({ children }) => {
    const [list, setList] = useLocalStorage('list', []);
    const [listTitle, setListTitle] = useLocalStorage('listTitle', []);
    const [title, setTitle] = useLocalStorage('title', "");

    return (
        <ListContext.Provider value={{ list, setList, listTitle, setListTitle, title, setTitle}}>
            {children}
        </ListContext.Provider>
    )
};