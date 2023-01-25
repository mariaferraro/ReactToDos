import React from 'react';
import './App.css'
import { TodoCounter } from './components/TodoCounter.js';
import { TodoSearch } from './components/TodoSearch.js';
import { TodoList } from './components/TodoList.js';
import { TodoItem } from './components/TodoItem.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';

 //--- Calling the Provider ---//
import { TodoContext} from './components/TodoContext.js';
import { TodoProvider } from './components/TodoContext.js';


function App() {

  return (
    <TodoProvider>
      <React.Fragment>

      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>

        {({ error, loading, searchedTodos, toggleCompleteTodos, deleteTodos }) => (
          <TodoList>
            {error && <p>There was an error...</p>}
            {loading && <p>Loading...</p>}
            {(!loading && !searchedTodos.length) && <p>Ready to create your first To-Do!</p>}

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
        )}

      </TodoContext.Consumer>

      <CreateTodoButton />

      </React.Fragment>
    </TodoProvider>
  );
}

export default App;
