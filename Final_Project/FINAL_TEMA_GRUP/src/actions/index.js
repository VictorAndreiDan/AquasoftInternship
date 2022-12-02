export const changeTitle = (newTitle) =>{
    return{
        type: 'CHANGE_TITLE',
        new: newTitle
    };
}
export const changeBody = (newBody) =>{
    return{
        type: 'CHANGE_BODY',
        new: newBody
    };
}
export const changeCategory = (newCategory) =>{
    return{
        type: 'CHANGE_CATEGORY',
        new: newCategory
    };
}
export const changeTokens = (newToken) =>{
    return{
        type: 'CHANGE_TOKENS',
        new: newToken
    };
}
export const changeArticles = (newToken) =>{
    return{
        type: 'CHANGE_ARTICLES',
        new: newToken
    };
}