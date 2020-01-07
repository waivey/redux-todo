import TaskList from './TaskList';
import { connect } from 'react-redux';
import { VisibilityFilters } from '../redux/actions';
import { toggleTask } from '../redux/actions'


const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:    
            return tasks;
        case VisibilityFilters.SHOW_COMPLETED:
            return tasks.filter(task => task.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return tasks.filter(task => !task.completed);
        default:
            throw new Error(`Unknown filter: ${filter}`)
    }
}

const mapStateToProps = state => ({
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTask: id => dispatch(toggleTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)