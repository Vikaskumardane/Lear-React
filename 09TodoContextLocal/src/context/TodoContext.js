import { useContext, createContext } from "react";


export const TodoContext = createContext({
    //THIS IS THE CONTEXT
    todos:[
        {
            id:1,
            todo: "todo msg",
            completed:false,
        }
    ],

    //METHODS FOR THE CONTEXT
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
});


//create a custom hook useTodo
export const useTodo=()=>{
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider