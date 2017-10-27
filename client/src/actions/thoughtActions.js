import * as types from './actionTypes';
import thoughtApi from '../api/mockThoughtApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadThoughtsSuccess(thoughts) {
  return { type: types.LOAD_THOUGHTS_SUCCESS, thoughts: thoughts };
}

export function updateThoughtSuccess(thought) {
  return { type: types.UPDATE_THOUGHT_SUCCESS, thought: thought };
}

export function createThoughtSuccess(thought) {
  return { type: types.CREATE_THOUGHT_SUCCESS, thought: thought };
}

export function loadThoughts() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return thoughtApi.getAllThoughts()
      .then(thoughts => {
        dispatch(loadThoughtsSuccess(thoughts));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}

export function saveThought(thought) {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return thoughtApi.saveThought(thought)
      .then(savedThought => {
        thought.id ? dispatch(updateThoughtSuccess(savedThought)) : dispatch(createThoughtSuccess(savedThought));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}
