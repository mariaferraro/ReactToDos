import React from 'react';
import './App.css'
import { TodoCounter } from './components/TodoCounter.js';
import { TodoSearch } from './components/TodoSearch.js';
import { TodoList } from './components/TodoList.js';
import { TodoItem } from './components/TodoItem.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';

  const defaultTodos = [
    { text: 'Do the shopping', completed: false },
    { text: 'Study', completed: true },
    { text: 'Check Emails', completed: false },
    { text: 'Go for a walk', completed: true },
    { text: 'Buy some avocados', completed: false },
  ]

function App() {

  //--- Saving To-Dos on Local Storage ---//
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //--- Initial States ---//
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

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

  //--- Save todos into Local Storage ---//
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
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

  return (
    <React.Fragment>

    <TodoCounter 
      completed={completedTodos}
      total={totalTodos} 
    />

    <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
    />

    <TodoList>
      {searchedTodos.map( todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => toggleCompleteTodos(todo.text)}
          onDelete={() => deleteTodos(todo.text)}
        />
      ))}
    </TodoList> 

    <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
