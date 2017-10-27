import expect from 'expect';
import * as thoughtActions from './thoughtActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Thought Actions', () => {
	describe('creaateThoughtSuccess', () => {
		it('should create a CREATE_THOUGHT_SUCCESS action', () => {
			const thought = {id: 'my-thought', title: 'My Thought'};
			const expectedAction = {
				type: types.CREATE_THOUGHT_SUCCESS,
				thought: thought
			};

			const action = thoughtActions.createThoughtSuccess(thought);

			expect(action).toEqual(expectedAction);

		});
	});
});

const middleware = [thunk];
const mockStore = 	configureMockStore(middleware);

describe('Async Actions', () => {

	afterEach(() => {
		nock.cleanAll();
	});

	it('should create BEGIN_AJAX_CALL and LOAD_THOUGHT_SUCCESS when loading thoughts', (done) => {
		//here is an example to nock
		// nock('Http://example.com/')
		//	.get('/courses')
		//	.reply(200, {body: {course: [{id: 'clean-code', title: 'Clean Code'}] }});

		const expectedActions = [
			{type: types.BEGIN_AJAX_CALL},
			{type: types.LOAD_THOUGHTS_SUCCESS, body: {thought: [{id: 'my-thought', title: 'My Thought'}] }}
		];

		const store = mockStore({thought: []}, expectedActions);
		store.dispatch(thoughtActions.loadThoughts()).then(() => {
			const actions = store.getActions();
			expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
			expect(actions[1].type).toEqual(types.LOAD_THOUGHTS_SUCCESS);
			done();
		});

	});
});
