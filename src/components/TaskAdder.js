import React from 'react';
import { addTask } from '../redux/actions';
import { connect } from 'react-redux';

const TaskAdder = ({ dispatch }) => {
    let input

    return(
        <form onSubmit={event => {
            event.preventDefault()
            if (!input.value.trim()) return;
            dispatch(addTask(input.value));
            input.value = '';
        }}>
            <input ref={node => (input = node)}/>
            <button type='submit'>Add Task</button>
        </form>
    )
}

export default connect()(TaskAdder)