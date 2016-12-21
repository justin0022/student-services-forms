import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AcademicConsessionFormView from './components/AcademicConsessionFormView';
import SampleForm from './components/SampleForm';
import NotFoundPage from './components/NotFoundPage';

export default  (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="AcademicConsessionFormView" component={AcademicConsessionFormView}/>
    <Route path="SampleForm" component={SampleForm}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);