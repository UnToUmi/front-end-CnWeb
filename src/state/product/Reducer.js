import { ADD_ITEM_TO_CART_FAILURE } from "../cart/ActionType"
import { ADD_NEW_PRODUCT_FAILURE, ADD_NEW_PRODUCT_REQUEST, ADD_NEW_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType"

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null
}

export const userProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case ADD_NEW_PRODUCT_REQUEST:
            return { ...state, loading: true, error: null }

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, products: action.payload }

        case FIND_PRODUCT_BY_ID_SUCCESS:
        case ADD_NEW_PRODUCT_SUCCESS:
            console.log("Reducer state:", state); // Log state để kiểm tra
            console.log("Payload:", action.payload); // Log payload để kiểm tra
            return { ...state, loading: false, error: null, product: action.payload }

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case ADD_NEW_PRODUCT_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}