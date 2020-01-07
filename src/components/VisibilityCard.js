import React from 'react';
import FilterButton from './FilterButton';
import { VisibilityFilters } from '../redux/actions';


const VisibilityCard = () => (
    <div>
        <span>View: </span>
        <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
        <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
        <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterButton>
    </div>
)

export default VisibilityCard;