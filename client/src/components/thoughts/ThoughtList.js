import React, {PropTypes} from 'react';
import ThoughtListRow from './ThoughtListRow';

const ThoughtList = ({thoughts}) => {
  return (
    <div className="row marketing">
      <div className="col-lg-6 ">
        {thoughts.map((thought, index) =>
            {if (index % 2 === 0) return <ThoughtListRow key={thought.id} thought={thought} />;}
          )}
      </div>
      <div className="col-lg-6 ">
        {thoughts.map((thought, index) =>
            {if (index % 2 != 0) return <ThoughtListRow key={thought.id} thought={thought} />;}
          )}
      </div>
    </div>
  );
};

ThoughtList.propTypes = {
  thoughts: PropTypes.array.isRequired
};

export default ThoughtList;
