import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>
      <Link to="/Form1">Form1</Link>
    </div>
  );
};

export default App;