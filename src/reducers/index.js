// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { reducer as formReducer } from 'redux-form';
 import academicConsessionFormReducer from './academicConsessionFormReducer';
 import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    academicConsessionFormReducer,
    routing: routerReducer,
    form: formReducer
});

 export default rootReducer;

