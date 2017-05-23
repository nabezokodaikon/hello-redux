import ActionTypes from "../actions/ActionTypes";
import VisibilityFilters from "../actions/VisibilityFilters";

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
