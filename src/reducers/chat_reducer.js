//import types 
import types from '../actions/types';
const DEFAULT_STATE= {

};

export default (state=DEFAULT_STATE, action)=>{
    // always takes 2 parameters
    switch(action.type){
        // always has a switch on the action type
        default:
            return state;
    }
}
// a function that returns an object