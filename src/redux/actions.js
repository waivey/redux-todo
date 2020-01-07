import { ADD_TASK, SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED, SET_VISIBILITY_FILTER, TOGGLE_TASK } from './actionTypes';

let nextTaskId = 0;

export const addTask = text => ({
    type: ADD_TASK,
    id: nextTaskId++,
    text
})

export const VisibilityFilters = {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
}

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const toggleTask = id => ({
    type: TOGGLE_TASK,
    id
})