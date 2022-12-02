const categoryReducer = (state = 'defaultCategory', action) => {
    switch (action.type){
        case 'CHANGE_CATEGORY':
            if(action.new)
                state = action.new;
            return state;
        default:
            return state;
    }
}
export default categoryReducer;