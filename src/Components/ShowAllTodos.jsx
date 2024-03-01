import React from "react";
import { TodoStore } from "../context/TodoContext";
import { useContext } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsArrowsFullscreen } from "react-icons/bs";
import { RiSpotifyFill } from "react-icons/ri";


const ShowAllTodos = ()=>{

const{todolist, handleReadoverlay,setDeletetodo,setShowdeleteoverlay,setUpdateTodo,setShowupdateoverlay,handleStatus,showaddtodo,search,input}=useContext(TodoStore);

if(showaddtodo == true){
  
  return(
    
    <section className=" w-[100%] flex justify-center items-center p-8">
        <article className="flex flex-wrap gap-6 w-[100%]  justify-center ">

            {
            todolist.map(value=>{
                const{
                status,
                id,
                title,
                details,
                n_char,
                n_words,
                n_sentences,
                createdAt,} = value;

                return(
                    <div
                  className={`flex flex-col w-[90%] lg:w-[20%]  gap-6 p-4 rounded-md ${
                    status == "done" ? "border-emerald-300" : "border-slate-300"
                  } border-2 shadow-lg hover:shadow-2xl group hover:border-blue-600`}
                >
                  <div className="flex justify-between items-center">
                    <button
                      className={`w-9 h-9 px-1 border-4 rounded-full  border-slate-300 ${
                        status == "done"
                          ? "border-emerald-400"
                          : "border-slate-300"
                      }  `}
                      onClick={() => handleStatus(id)}
                    >
                      {status == "done" ? (
                          <IoCheckmarkDoneSharp className="text-xl text-emerald-300" />
                      ) : (
                        ""
                      )}
                    </button>{" "}
                    <button className=" " onClick={() => handleReadoverlay(id)}>
                      <BsArrowsFullscreen className="text-xl text-slate-400" />
                    </button>
                      </div>
                    
                        <h3 className="text-2xl font-semibold text-center bg-slate-300 rounded-md p-3">{title}</h3>
                        <p className="text-base bg-slate-200 p-2  text-ellipsis whitespace-nowrap overflow-hidden">{details}</p>
                        <div className="group-hover:flex flex-col gap-2 hidden justify-center items-center">
                            <div  className="text-sm flex gap-4 text">
                                <span className="text-center">Characters : {n_char}</span>
                                <span className="text-center">Words : {n_words}</span>
                                <span className="text-center">Words : {n_sentences}</span>
                                <span className="text-center">CreatedAt : {createdAt}</span>
                                
                            </div>
                            <div className="flex justify-around w-[100%]">
                                <button onClick={()=>{
                                    
                                    setShowdeleteoverlay(true);
                                    setDeletetodo(id);
                                    
                                }} className="font-semibold bg-red-400 px-2 py-1 rounded-lg hover:bg-red-600 text-white ">Delete</button>
                                <button onClick={()=>{
                                    setShowupdateoverlay(true);
                                    setUpdateTodo({id,title,details,createdAt})
                                }} 
                                className="font-semibold bg-green-400 px-2  py-1 rounded-lg hover:bg-green-700 text-white ">Edit</button>
                            </div>
                        </div>
                    </div>
                
               
                );
            })}{" "}
        </article>
    </section>
)    
}
else{
  return(
  <section className=" w-[100%] flex justify-center items-center p-8">
        <article className="flex flex-wrap gap-6 w-[100%]  justify-center">
          { input.length == 0 ? (
              <h2 className="lg:text-3xl text-2xl  text-slate-400  font-semibold">
              No Search Todo Available!!
              </h2>   
            ) : ( 
              search.map(value => {
                const{
                  status,
                  id,
                  title,
                  details,  
                  n_char,
                  n_words,
                  n_sentences,
                  createdAt,}=value;

                  return(
                    <div
                    className={`flex flex-col w-[90%] lg:w-[20%]  gap-6 p-4 rounded-md ${
                      status == "done" ? "border-emerald-300" : "border-slate-300"
                    } border-2 shadow-lg hover:shadow-2xl group hover:border-blue-600`}
                  >
                    <div className="flex justify-between items-center">
                      <button
                        className={`w-9 h-9 px-1 border-4 rounded-full  border-slate-300 ${
                          status == "done"
                            ? "border-emerald-400"
                            : "border-slate-300"
                        }  `}
                        onClick={() => handleStatus(id)}
                      >
                        {status == "done" ? (
                            <IoCheckmarkDoneSharp className="text-xl text-emerald-300" />
                        ) : (
                          ""
                        )}
                      </button>{" "}
                      <button className=" " onClick={() => handleReadoverlay(id)}>
                        <BsArrowsFullscreen className="text-xl text-slate-400" />
                      </button>
                        </div>
                      
                          <h3 className="text-2xl font-semibold text-center bg-slate-300 rounded-md p-3">{title}</h3>
                          <p className="text-base bg-slate-500 p-2  text-ellipsis whitespace-nowrap overflow-hidden">{details}</p>
                          <div className="group-hover:flex flex-col gap-2 hidden justify-center items-center">
                              <div  className="text-sm flex gap-4 text">
                                  <span className="text-center">Characters : {n_char}</span>
                                  <span className="text-center">Words : {n_words}</span>
                                  <span className="text-center">Words : {n_sentences}</span>
                                  <span className="text-center">CreatedAt : {createdAt}</span>
                                  
                              </div>
                              <div className="flex justify-around w-[100%]">
                                  <button onClick={()=>{
                                      setShowdeleteoverlay(true);
                                      setDeletetodo(id);
                                  }} className="font-semibold bg-red-400 px-2 py-1 rounded-lg hover:bg-red-600 text-white ">Delete</button>
                                  <button onClick={()=>{
                                      setShowupdateoverlay(true);
                                      setUpdateTodo({id,title,details,createdAt})
                                  }} 
                                  className="font-semibold bg-green-400 px-2  py-1 rounded-lg hover:bg-green-700 text-white ">Edit</button>
                              </div>
                          </div>
                      </div>

                  );
              })
            ) }
          </article>
          </section>
          )
  
}


    
}

export default ShowAllTodos;