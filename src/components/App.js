import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/AcademicConsessionFormView">Academic Consession Form</Link>
        {' | '}
        <Link to="/SampleForm">Sample Form</Link>
      </div>
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
  );
};

export default App;