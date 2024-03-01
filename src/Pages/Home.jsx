import React, { useContext } from "react";
import AddTodo from "../Components/AddTodo";
import { TodoStore } from "../context/TodoContext";
import ShowAllTodos from "../Components/ShowAllTodos";
import Overlay from "./Overlay";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";
import SearchTodo from "../Components/SearchTodo";
import { BiAddToQueue } from "react-icons/bi";
import { TbFileSearch } from "react-icons/tb";
import { IoMoon, IoSunny } from "react-icons/io5";


const Home = ()=> { 

    const{theme,setTheme,setShowaddtodo,showaddtodo}=useContext(TodoStore);
    
    
    return(
        <section className={`h-[100vh] overflow-scroll flex justify-center ${theme == true ? "bg-white text-black" :"bg-black text-white"  } `} >
            <article className=" flex flex-col gap-10 w-full items-center py-9">
              
            <nav className=" w-full flex items-center justify-between px-3 lg:px-8 ">
          <h1 className="text-lg lg:text-2xl py-5 font-bold">
            Advanced Todo App
          </h1>

          <div className=" flex gap-6 ">
            
            <button
              className="bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg flex items-center gap-3 justify-center hover:bg-blue-500 lg:text-xl"
              onClick={() => setShowaddtodo(true)}
            >
              <span>Create</span>{" "}
              <BiAddToQueue className="text-white lg:text-2xl text-xl" />
            </button>

            <button
              className="bg-slate-600 text-white font-semibold py-1 px-3 rounded-lg flex items-center gap-3 justify-center hover:bg-slate-500 lg:text-xl"
              onClick={() => setShowaddtodo(false)}
            >
              <span> Search</span>{" "}
              <TbFileSearch className="lg:text-2xl text-xl" />
            </button>
            <button className="self-end  rounded-full" onClick={()=>{
                setTheme(!theme)
              }}>{
               theme == true ? (<IoMoon className="text-3xl text-black-300" />) : (<IoSunny className=" text-3xl text-yellow-300" />) 
              }</button>
          </div>
        </nav>
        {showaddtodo == true ? <AddTodo /> : <SearchTodo />}
            
            <Overlay/>
            <ShowAllTodos/>
            <DeleteTodo/>
            <UpdateTodo/>
            </article>
        </section>

    )
}

export default Home;