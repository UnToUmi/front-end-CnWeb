import axios from "axios"
import { API_BASE_URL } from "../../config/axiosConfig"
import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./ActionType"

const registerRequest = () => ({ type: REGISTER_REQUEST })
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user })
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error })

const loginRequest = () => ({ type: LOGIN_REQUEST })
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

const getUserRequest = () => ({ type: GET_USER_REQUEST })
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user })
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error })


const token = localStorage.getItem("jwt")
export const register = (userData) => async (dispatch) => {

    dispatch(registerRequest());

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/sign_up`, userData)
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        // console.log("user: ", user)
        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}

export const login = (userData) => async (dispatch) => {

    dispatch(loginRequest());

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/sign_in`, userData)
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        dispatch(loginSuccess(user.jwt))
    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}


export const getUser = (jwt) => async (dispatch) => {

    dispatch(getUserRequest());

    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,
            {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        )
        const user = response.data;
        console.log("userData: ", user)
        dispatch(getUserSuccess(user))
    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}

export const logOut = () => (dispatch) => {
    dispatch({ type: LOGOUT, payload: null })
    localStorage.clear();
}

