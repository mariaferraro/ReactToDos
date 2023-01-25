import React from 'react';
import { AppUI } from './AppUI.js'

//--- Calling the Provider ---//
import { TodoProvider } from './components/TodoContext.js';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
