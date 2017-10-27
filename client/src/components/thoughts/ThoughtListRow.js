import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ThoughtListRow = ({thought}) => {
  return (
    <div className="blog-post">
      <h3><Link to={'thought/' + thought.id} >{thought.title}</Link></h3>
      <div> {thought.description} </div>
      <div><a href={thought.watchHref} target="_blank" >Go to site</a></div>
    </div>
  );
};

ThoughtListRow.propTypes = {
  thought: PropTypes.object.isRequired
};

export default ThoughtListRow;
