import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AcademicConsessionFormPage from './container/AcademicConsessionFormPage';
import SampleForm from './components/SampleForm';
import NotFoundPage from './components/NotFoundPage';

export default  (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="AcademicConsessionFormPage" component={AcademicConsessionFormPage}/>
    <Route path="SampleForm" component={SampleForm}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);