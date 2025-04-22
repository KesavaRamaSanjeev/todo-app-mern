import React from 'react';
import Todo from './components/Todo';
import './App.css';

/**
 * Main App component that serves as the entry point of the application
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
