import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const ListContext = createContext();

export const ListProvider = ({ children }) => {
    const [list, setList] = useLocalStorage('list', []);

    return (
        <ListContext.Provider value={{ list, setList}}>
            {children}
        </ListContext.Provider>
    )
};