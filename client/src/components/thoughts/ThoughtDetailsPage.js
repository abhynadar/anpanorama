import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as thoughtActions from '../../actions/thoughtActions';
import ThoughtView from './ThoughtView';
import {browserHistory} from 'react-router';

export class ThoughtDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      thought: Object.assign({}, this.props.thought)
    };

    this.goBack = this.goBack.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.thought.id != nextProps.thought.id) {
      this.setState({thought: Object.assign({}, nextProps.thought)});
    }
  }

  goBack() {
    this.context.router.push('/thoughts');
  }

  render() {
    return(
      <ThoughtView
          thought={this.state.thought}
          onBack={this.goBack}
      />
    );
  }

}

ThoughtDetailsPage.propTypes = {
  thought: PropTypes.object.isRequired
};

//get access to react router context so router is available on this.context.router
ThoughtDetailsPage.contextTypes = {
	router: PropTypes.object
};

function getThoughtById(thoughts, thoughtId) {
	const thought = thoughts.filter(thought => thought.id == thoughtId);
	if (thought) return thought[0];

	return null;
}

function mapStateToProps(state, ownProps) {
  let thoughtId = ownProps.params.id; // from the path 'thought/:id'

  let thought = {id:'', title:'', description:'', watchHref:''};

  if (thoughtId && state.thoughts.length > 0) {
    thought = getThoughtById(state.thoughts, thoughtId);
  }

  return { thought: thought };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(thoughtActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThoughtDetailsPage);
