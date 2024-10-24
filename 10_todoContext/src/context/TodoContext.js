import {createContext, useContext} from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:Date.now(),
            todo:"Take break!",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}