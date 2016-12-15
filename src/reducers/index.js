// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import userInformation from './userInformationReducer';
 import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    userInformation,
    routing: routerReducer
});

 export default rootReducer;

