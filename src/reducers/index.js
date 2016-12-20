// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import academicConsessionFormReducer from './academicConsessionFormReducer';
 import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    academicConsessionFormReducer,
    routing: routerReducer
});

 export default rootReducer;

