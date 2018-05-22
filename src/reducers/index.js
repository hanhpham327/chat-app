import {combineReducers} from 'redux';
// always import combine reducers
// import all the files in the reducers file
import chatReducer from './chat_reducer';

const rootReducer=combineReducers({
    chat:chatReducer
    // takes in parameter of the file
});
export default rootReducer;