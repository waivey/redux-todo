import React from 'react';
import './App.css';
import TaskAdder from './components/TaskAdder';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <TaskAdder />
      <TaskList />
    </>
  );
}

export default App;
