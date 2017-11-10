import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as thoughtActions from '../../actions/thoughtActions';
import ThoughtList from './ThoughtList';
import {browserHistory} from 'react-router';

class ThoughtsPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.redirectToAddThoughtPage = this.redirectToAddThoughtPage.bind(this);

		//React.PropTypes.object.dispatch(thoughtActions.loadThoughts());
	}

	redirectToAddThoughtPage() {
		browserHistory.push('/thought');
	}

	render() {
		const {thoughts} = this.props;

		return (
			<div className="container">
				<div className="jumbotron">
				<h1 >Thoughts</h1>
				<p className="lead">You are welcome to read my thoughts!!!</p>
				<input type="submit"
					value="What are you thinking?"
					className="btn btn-primary"
					onClick={this.redirectToAddThoughtPage} />
				</div>

					<ThoughtList thoughts={thoughts} />

			</div>
			);
	}
}

ThoughtsPage.propTypes = {
	thoughts: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
	return {
		thoughts: state.thoughts
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(thoughtActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ThoughtsPage);
