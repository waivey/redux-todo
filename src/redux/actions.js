import { ADD_TASK } from './actionTypes';

let nextTaskId = 0;

export const addTask = content => ({
    type: ADD_TASK,
    payload: {
        id: ++nextTaskId,
        content
    }
})