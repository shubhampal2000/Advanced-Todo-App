import React from "react";
import { TodoStore } from "../context/TodoContext";
import { useContext } from "react";

const Overlay = () => {

  const {  showTododata, showReadoverlay ,setDeletetodo,setShowdeleteoverlay} = useContext(TodoStore);

  const { id, title, details, n_char, n_words, n_sentences, createdAt } = showTododata;

  return (
    <>
    
      {showReadoverlay && (
        <section className="h-[100vh] fixed w-[100vw] bg-[#000a] top-0 left-0">
          <article className=" w-[100%] flex justify-center items-center h-[90%]">
            <div className="bg-white flex flex-col w-[90%] h-[80%] gap-[5vh] p-4 rounded-md border-slate-300 border-2 shadow-lg">
              <h3 className="text-3xl bg-slate-200 rounded-md p-2 font-semibold text-center">
                {title}
              </h3>
              <p className="text-2xl font-semibold text-center p-2 text-ellipsis whitespace-nowrap overflow-hidden h-[35vh] border-2 border-slate-400">
                {" "}
                {details}
              </p>
              <div className="flex flex-col gap-8 justify-center items-center">
                <div className="text-2xl flex gap-3">
                  <span className="text-center">Characters : {n_char}</span>
                  <span className="text-center">Words : {n_words}</span>
                  <span className="text-center">Sentences : {n_sentences}</span>
                </div>
                <div className="flex justify-around w-[100%]">
                  <button onClick={()=>{
                                    setShowdeleteoverlay(true);
                                    setDeletetodo(id);
                                }} className="font-semibold bg-red-400 px-2 py-1 rounded-lg hover:bg-red-600 text-white ">
                    Delete
                  </button>

                  <button className="font-semibold bg-green-400 px-2  py-1 rounded-lg hover:bg-green-700 text-white ">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default Overlay;
