const tokenReducer = (state = 'defaultTokens', action) => {
    switch (action.type){
        case 'CHANGE_TOKENS':
            if(action.new)
                state = action.new;
            return state;
        default:
            return state;
    }
}
export default tokenReducer;