import React, {PropTypes} from 'react';

const ThoughtView = ({thought, onBack}) => {
  return (
    <div className="container">
      <div className="jumbotron">
      <h2 >{thought.title}</h2>
      <p className="lead">{thought.description}</p>
      <input type="button"
        value="Back"
        className="cancel"
        onClick={onBack} />
      </div>

    </div>
  );
};

ThoughtView.propTypes = {
  thought: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired
};

export default ThoughtView;
