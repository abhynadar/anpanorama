import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function thoughtReducer(state = initialState.thoughts, action) {
  switch(action.type) {
      case types.LOAD_THOUGHTS_SUCCESS:
        return action.thoughts;
      case types.CREATE_THOUGHT_SUCCESS:
        return [
          ...state,
          Object.assign({}, action.thought)
        ];
      case types.UPDATE_THOUGHT_SUCCESS:
        return [
          ...state.filter(thought => thought.id != action.thought.id),
          Object.assign({}, action.thought)
        ];
      default:
        return state;
  }
}
