import {
    ADD_ITEM,
    MARK_DONE
} from './types';

let nextTodoId = 0

export const addItem = (text)=>{
    return {
        id: nextTodoId++,
        title: text,
        type: ADD_ITEM
    };
}

export const markAsDone = (item)=>{
    return {
        id: item.id,
        title: item.title,
        isCompleted: true,
        type: MARK_DONE
    }
}