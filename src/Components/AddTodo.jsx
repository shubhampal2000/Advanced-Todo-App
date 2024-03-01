import React, { useContext, useState } from "react";
import { TodoStore } from "../context/TodoContext";


const AddTodo = ()=>{

    const {todolist,handleAddTodo,theme} = useContext(TodoStore);
    const [title,setTitle]=useState("");
    const[details,setDetails]=useState("");
    

    const handleSubmit = e => {
        
        e.preventDefault();
        
       if(title.length != 0){

        const n_char=details.split("").length;
        const n_words=details.split(" ").length;
        const n_sentences=details.split(".").length-1;
        
        handleAddTodo({title,details,n_char,n_words,n_sentences});
       }
       else{
        alert("Fields are Empty!")
       }
       setTitle("");
       setDetails("");
    };
    
return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[70%] lg:w-[50%]">
        <input className={` text-2xl py-1 px-3  outline-none border-b-4 focus:border-b-blue-400 
            ${theme == true ? "text-black bg-white" : "text-white bg-black"}`} type="text" placeholder="Enter Title " value={title} onChange={e =>setTitle(e.target.value) } />
        <input className={` text-2xl py-1 px-3  outline-none border-b-4 focus:border-b-blue-400 
            ${theme == true ? "text-black bg-white" : "text-white bg-black"}`} type="text" placeholder="Enter Details " value={details} onChange={e =>setDetails(e.target.value)} />
        <button className="hover:bg-blue-600 w-[100%] bg-blue-500 px-3 py-2 font-semibold">Create</button>
    </form>
)
}

export default AddTodo;
