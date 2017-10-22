import {
    ADD_ITEM,
    MARK_DONE
} from './types';

export const addItem = (text)=>{
    return {
        id: 0,
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