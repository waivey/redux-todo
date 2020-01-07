import React from 'react';
import TaskCard from './TaskCard';


const TaskList = ({ tasks, toggleTask }) => {
    return(
        <ul>
            {tasks.map(task => <TaskCard key={task.id} {...task} onClick={() => {toggleTask(task.id)}}/>)}
        </ul>
    )
}


export default TaskList