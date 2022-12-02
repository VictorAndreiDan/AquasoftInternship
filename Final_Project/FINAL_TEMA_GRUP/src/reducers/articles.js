const articleReducer = (state = 'defaultArticles', action) => {
    switch (action.type){
        case 'CHANGE_ARTICLES':
            if(action.new)
                state = action.new;
            return state;
        default:
            return state;
    }
}
export default articleReducer;