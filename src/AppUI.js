import React from 'react';
import './App.css'
import { TodoCounter } from './components/TodoCounter.js';
import { TodoSearch } from './components/TodoSearch.js';
import { TodoList } from './components/TodoList.js';
import { TodoItem } from './components/TodoItem.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';
import { Modal } from './components/Modal.js'

//--- Calling the Provider ---//
import { TodoContext } from './components/TodoContext.js';

function AppUI() {

     //--- Calling the Provider ---//
  const { 
    error, 
    loading, 
    searchedTodos, 
    toggleCompleteTodos, 
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>

      <TodoCounter />

      <TodoSearch />

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

        {openModal && (
          <Modal>
            <p>Hola</p>
          </Modal>
        )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      </React.Fragment>

  )
}

export { AppUI };