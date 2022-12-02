const bodyReducer = (state = 'defaultBody', action) => {
    switch (action.type){
        case 'CHANGE_BODY':
            if(action.new)
                state = action.new;
            return state;
        default:
            return state;
    }
}
export default bodyReducer;