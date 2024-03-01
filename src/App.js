import './App.css';
import TodoContext from './context/TodoContext';
import Home from './Pages/Home';
function App() {
  return (
    <>
    <TodoContext>
      <Home/>
    </TodoContext>
    </>
  );
}

export default App;
