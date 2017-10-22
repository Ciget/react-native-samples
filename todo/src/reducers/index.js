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
        case ActionTypes.MARK_DONE: 
        console.log('done');
                return state.map(todo=>todo.id == action.id?{...todo, isCompleted:true}:todo);
        default: 
            return state;
    }
}

const reducers = combineReducers({ToDoReducers});
export default reducers;