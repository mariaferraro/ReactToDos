import React from 'react';

//--- Local Storage Hook ---//
import { useLocalStorage } from '../hooks/useLocalStorage.js';

//--- Creating TodoContext ---//
const TodoContext = React.createContext();


function TodoProvider(props){

const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  //--- Initial State ---//
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  //--- Counting completed and total todos for Heading 2 ---//
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  //--- Var to save search results ---//
  let searchedTodos = [];

  //--- Filtering results ---//
  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      // Lower case to find it no matter how is written
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //--- Mark To-Do as completed or uncompleted ---//
  const toggleCompleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  //--- Delete To-Dos ---//
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodos,
            deleteTodos,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };