import { combineReducers } from 'redux';
import apiReducer from './api/api-reducer';

const rootReducer = combineReducers({
    apiReducer
});

export default rootReducer;
