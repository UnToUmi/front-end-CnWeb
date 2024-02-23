import { api } from "../../config/axiosConfig";
import { ADD_NEW_PRODUCT_FAILURE, ADD_NEW_PRODUCT_REQUEST, ADD_NEW_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";


export const findProducts = (reqData) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCTS_REQUEST })

    const {
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize
    } = reqData;

    // category: "light_novel",
    //  colors: colorValue || [],
    //   sizes: sizeValue || [],
    //    minPrice,
    //    maxPrice,
    //       minDiscount: discountValue || 0,
    //       sort: sortValue || "price_low",
    //       pageNumber: pageNumber - 1,
    //      pageSize: 3,
    //       stock: stock

    try {

        const { data } = await api.get(`/api/products?category=${category}&color=
         ${colors}&size=${sizes}&minPrice=
          ${minPrice}&maxPrice=${maxPrice}&minDiscount=
         ${minDiscount}&stock=
         ${stock}&sort=${sort}&pageNumber=
         ${pageNumber}&pageSize=${pageSize}`)


        console.log("product data: ", data)
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
    }
};

export const findProductsById = (reqData) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })

    const { productId } = reqData;

    try {
        const { data } = await api.get(`/api/products/id/${productId}`)
        console.log("data: ", data)
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })

    }
};


export const addNewProduct = (reqData) => async (dispatch) => {

    dispatch({ type: ADD_NEW_PRODUCT_REQUEST })


    console.log("reqData: ", reqData)

    try {
        const { data } = await api.post(`/api/admin/products/${reqData}`)
        console.log("data: ", data)
        dispatch({ type: ADD_NEW_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_NEW_PRODUCT_FAILURE, payload: error.message })

    }
};
