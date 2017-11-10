import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import thoughts from './thoughtReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	courses,
	authors,
	thoughts,
	ajaxCallsInProgress
});

export default rootReducer;
