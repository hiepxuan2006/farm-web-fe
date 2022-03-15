import axios from "axios"
import { baseApi } from "../../Context/ContTant"
import * as Types from '../types'
export const setAdmin = (user) => async dispatch => {
    dispatch({
        type: Types.ADMIN_LOGIN_SUCCESS,
        payload: user
    })
}
// lay danh sach user
export const getUser = () => async dispatch => {
    const users = await axios.get(`${baseApi}/users/`)

    dispatch({
        type: Types.GET_ALL_USER,
        payload: users.data.user
    })
}
// tao san pham mowi
export const createProduct = async (data) => {
    return await axios.post(`${baseApi}/product/create`, data)

}