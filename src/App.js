import React from 'react';
import './App.css';
import TaskAdder from './components/TaskAdder';
import VisibleTaskList from './components/VisibleTaskList';
import VisibilityCard from './components/VisibilityCard'

function App() {
  return (
    <>
      <TaskAdder />
      <VisibleTaskList />
      <VisibilityCard />
    </>
  );
}

export default App;
