import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/Reducer"
import { userProductReducer } from "./product/Reducer"
import { cartReducer } from "./cart/Reducer"
import { userOrderReducer } from "./order/Reducer"

const rootReducers = combineReducers({
    auth: authReducer,
    products: userProductReducer,
    cart: cartReducer,
    order: userOrderReducer
})



const store = legacy_createStore(rootReducers, applyMiddleware(thunk))
export default store;

