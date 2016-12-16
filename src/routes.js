import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Form1 from './components/Form1';
import NotFoundPage from './components/NotFoundPage';

export default  (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="form-1" component={Form1}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);