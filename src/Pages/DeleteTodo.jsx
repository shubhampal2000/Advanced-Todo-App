import React,{useContext} from "react";
import { TodoStore } from "../context/TodoContext";

const DeleteTodo = () => {

const{deletetodo,showdeleteoverlay,setShowdeleteoverlay,handleDeleteTodo}=useContext(TodoStore);

return(
    <>
    {showdeleteoverlay && (
        <section className="h-[100vh] w-[100vw] bg-[#000a] fixed top-0 left-0">
            <article className="w-[100%] flex justify-center items-center h-[90%]">
                <div className="bg-white w-[80%] p-5 rounded-lg flex flex-col">
                    <p className="text-lg font-semibold ">It will be permanently deleted. Do you want to continue</p>
                    <div className="flex justify-end gap-5">
                    <button onClick={()=>handleDeleteTodo(deletetodo)} className="font-semibold bg-red-400 px-2 py-1 rounded-lg hover:bg-red-600 text-white ">
                    Delete
                  </button>
                  <button onClick={()=> setShowdeleteoverlay(false)} className="font-semibold bg-green-400 px-2  py-1 rounded-lg hover:bg-green-700 text-white ">
                    Nope
                  </button>
                    </div>
                </div>

            </article>
        </section>

    )}
    </>
)

}

export default DeleteTodo;
