import React from 'react';
import TaskCard from './TaskCard';
// import { connect } from 'react-redux'

const TaskList = ({ tasks }) => {
    return(
        <ul>
            {tasks.map(task => <TaskCard key={task.id} {...task}/>)}
        </ul>
    )
}

// const mapStateToProps = state => {
//     return {tasks: state.tasks} 
// }

// export default connect(mapStateToProps)(TaskList)

export default TaskList