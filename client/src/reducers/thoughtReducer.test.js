import expect from 'expect';
import thoughtReducer from './thoughtReducer';
import * as actions from '../actions/thoughtActions';

describe('Thought Reducer', () => {
	it('should add thought when passed CREATE_THOUGHT_SUCCESS', () => {
		const initialState = [
			{title: 'A'},
			{title: 'B'}
		];

		const newThought = { title: 'C' };

		const action = actions.createThoughtSuccess(newThought);

		const newState = thoughtReducer(initialState, action);

		expect(newState.length).toEqual(3);
		expect(newState[0].title).toEqual('A');
		expect(newState[2].title).toEqual('C');

	});

	it('should update thought when passed UPDATE_THOUGHT_SUCCESS', () => {
		const initialState = [
			{id: 'A', title: 'A'},
			{id: 'B', title: 'B'},
			{id: 'C', title: 'C'}
		];

		const thought = { id:'C', title: 'New Title' };

		const action = actions.updateThoughtSuccess(thought);

		const newState = thoughtReducer(initialState, action);
		const updatedThought = newState.find(a => a.id == thought.id);
		const untouchedThought = newState.find(a => a.id == 'A');

		expect(newState.length).toEqual(3);
		expect(updatedThought.title).toEqual('New Title');
		expect(untouchedThought.title).toEqual('A');

	});
});
