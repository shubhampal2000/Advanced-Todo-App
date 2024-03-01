import { createContext, useState } from "react";

export const TodoStore = createContext([]);

const TodoContext = ({children}) => {

  //state to handle darktheme 
  const[theme,setTheme]=useState(true);

    const [todolist,setTodolist] = useState([]);
    //States to manage read overlay 
    const[showTododata,setShowTododata] = useState({});
    const[showReadoverlay,setShowReadoverlay] = useState(false);

    //states to manage delete Todo....
    const[showdeleteoverlay,setShowdeleteoverlay] = useState(false);
    const[deletetodo,setDeletetodo] = useState(false);

    //State to search Todo
    const[search,setSearch]=useState([]);
    const[input,setInput]=useState("");
    
    //state to show and hide addtodo 
    const[showaddtodo,setShowaddtodo]=useState(true);

    //states to manage UpdateTodo 
    const[showupdateoverlay,setShowupdateoverlay] = useState(false);

    //  using updatetodo state to store data of todo that we want to update!
    const[updatetodo, setUpdateTodo] = useState(false);


    const handleAddTodo = ({title,details,n_char,n_words,n_sentences})=> {

        setTodolist([...todolist,
        {id: `${new Date()}`,
        title,
        status: "pending",
        details,
        n_char,
        n_words,
        n_sentences,
        createdAt:`Date : ${new Date().toLocaleDateString()} Time : ${new Date().toLocaleTimeString()}`,
        },
    ]
    );
    console.log(todolist);
    };
    const handleSearch = (searchdata) => {

      if(searchdata == "/read"){

        setSearch(todolist.filter(value=>{
          if(value.status == "done")
          return true;

        }))
      }else if(searchdata == "/pending"){
        setSearch(todolist.filter(value=>{
          if(value.status == "pending")
          return true;
        }))
      }else{
        setSearch(todolist.filter( value => {

          if(value.title.toLowerCase().includes(searchdata.toLowerCase()) || value.details.toLowerCase().includes(searchdata.toLowerCase())){
            console.log("Matched");
            return true; 
          }
          })
          );
      }

    

    };
    const handleDeleteTodo = id => {

      
        setTodolist(todolist.filter(value => value.id != id));
        setShowdeleteoverlay(false);
        
        setShowReadoverlay(false);


    };
    const handleUpdateTodo = ({id,title,details,createdAt}) => {
        const words = details.split(" ").length;
        const characters = details.split("").length;
        const sentences = details.split(".").length-1;

        todolist.filter(value => {
          if(value.id == id){
              value.title=title;
              value.details = details;
              value.n_words = words;
              value.n_char = characters;
              value.n_sentences = sentences;
              value.createdAt  = `Date : ${new Date().toLocaleDateString()} Time : ${new Date().toLocaleTimeString()}`;
          }
      })

        setTodolist(todolist);
        setShowupdateoverlay(false);



    };
    const handleReadoverlay = id => {
      
        const data = todolist.filter(value => value.id === id);
        // console.log("DATA",data);
        setShowTododata({...data[0]});
        console.log("showTododata",showTododata);
        setShowReadoverlay(true);
    };



    // this methods will used to update status of todo
  const handleStatus = id => {
    setTodolist(
      todolist.map(value => {
        if (value.id == id) {
          if (value.status != "done") value.status = "done";
          else if (value.status == "done") value.status = "pending";
        }
        return value;
      })
    );
  };


    return(
        <TodoStore.Provider value = {{todolist,
        handleAddTodo,
        handleDeleteTodo,
        handleUpdateTodo,
        handleReadoverlay,
        showTododata,
        showReadoverlay,
        setShowReadoverlay,
        setShowTododata,
        deletetodo,
        setDeletetodo,
        showdeleteoverlay,
        setShowdeleteoverlay,
        updatetodo,
        setUpdateTodo,
        showupdateoverlay,
        setShowupdateoverlay,
        handleStatus,
        handleSearch,
        search,
        setShowaddtodo,
        showaddtodo,input,
        setInput,
        theme,
        setTheme,
        }}>
            {children}
        </TodoStore.Provider>
    )
}

export default TodoContext;