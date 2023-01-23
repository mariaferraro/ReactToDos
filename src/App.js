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

  // Initial States
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // Counting completed and total todos for Heading 2
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  // Var to save search results
  let searchedTodos = [];

  // Filtering results
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
        />
      ))}
    </TodoList> 

    <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
