import { combineReducers } from "redux";
import titleReducer from "./title.js";
import bodyReducer from "./body.js";
import categoryReducer from "./category.js";
import tokenReducer from "./tokens.js";
import articleReducer from "./articles.js";

const allReducers = combineReducers({
    titleReducer,
    bodyReducer,
    categoryReducer,
    tokenReducer,
    articleReducer
});

export default allReducers;