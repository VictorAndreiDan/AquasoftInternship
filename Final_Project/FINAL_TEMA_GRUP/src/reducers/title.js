const titleReducer = (state = 'defaultTitle', action) => {
    switch (action.type){
        case 'CHANGE_TITLE':
            if(action.new)
                state = action.new;
            return state;
        default:
            return state;
    }
}
export default titleReducer;