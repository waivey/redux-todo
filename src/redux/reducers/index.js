import tasks from './tasks';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

export default combineReducers({
    tasks,
    visibilityFilter
})