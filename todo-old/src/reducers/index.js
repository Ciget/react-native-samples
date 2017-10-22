import { combineReducers} from 'redux';
import * as ActionTypes from '../actions/types';
export const ToDoReducers = (state = [], action)=>{
    switch(action.type){
        case ActionTypes.ADD_ITEM: 
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    isCompleted: false
                }];
        default: 
            return state;
    }
}

const reducers = combineReducers({ToDoReducers});
export default reducers;