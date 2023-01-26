import React from 'react';
import './App.css'
import { TodoCounter } from './components/TodoCounter.js';
import { TodoSearch } from './components/TodoSearch.js';
import { TodoList } from './components/TodoList.js';
import { TodoItem } from './components/TodoItem.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';
import { Modal } from './components/Modal.js'
import { TodoForm } from './components/TodoForm.js'

//--- Calling the Provider ---//
import { TodoContext } from './components/TodoContext.js';

//--- Calling the Error, Loading and Empty ---//
import { TodosError } from './components/TodosError.js';
import { TodosLoading } from './components/TodosLoading.js';
import { EmptyTodos } from './components/EmptyTodos.js';



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
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}

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
            <TodoForm />
          </Modal>
        )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      </React.Fragment>

  )
}

export { AppUI };