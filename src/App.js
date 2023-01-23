import React from 'react';
import './App.css'
import { TodoCounter } from './components/TodoCounter.js';
import { TodoSearch } from './components/TodoSearch.js';
import { TodoList } from './components/TodoList.js';
import { TodoItem } from './components/TodoItem.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';

const todos = [
  { text: 'Do the shopping', completed: false },
  { text: 'Study', completed: true },
  { text: 'Check Emails', completed: false },
]

function App() {
  return (
    <React.Fragment>

    <TodoCounter />

    <TodoSearch />

    <TodoList>
      {todos.map( todo => (
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
