import React from 'react';
import './App.css';
import TaskAdder from './components/TaskAdder';
import VisibleTaskList from './components/VisibleTaskList';

function App() {
  return (
    <>
      <TaskAdder />
      <VisibleTaskList />
    </>
  );
}

export default App;
