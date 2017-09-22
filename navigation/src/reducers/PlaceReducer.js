export default (state=[], action)=>{
    switch (action.type){
        case 'sample':
            return 12;
        default: 
            return state;
    }
} 