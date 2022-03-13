import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import categoryReducer from './categoryReducer'
const rootReducer = combineReducers({
    categoryReducer: categoryReducer,
    authReducer: authReducer,
    adminReducer: adminReducer
})
export default rootReducer;