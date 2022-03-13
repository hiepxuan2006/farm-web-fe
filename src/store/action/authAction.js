import axios from "axios"
import { baseApi, baseURL } from "../../Context/ContTant"
import * as Types from '../types'

export const registerUser = async (data) => {
    return await axios.post(`${baseApi}/auth/register`, data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "type": "formData"
            },
        }
    )
}
export const loginUser = async (data) => {
    return await axios.post(`${baseApi}/auth/login`, data)
}
export const userSetAuth = (user) => async dispatch => {
    dispatch({
        type: Types.LOGIN_SUCCESS,
        payload: user
    })
}
