import axios from "axios"
import * as Types from '../types'
import { baseApi } from "../../Context/ContTant"

export const getALLCategory = () => async dispatch => {
    try {
        const categories = await axios.get(`${baseApi}/category/`)

        dispatch({ type: Types.GET_CATEGORY, payload: categories.data.results })

    } catch (error) {

    }
}
export const getAllCompany = () => async dispatch => {
    try {
        const company = await axios.get(`${baseApi}/category/company`)

        dispatch({ type: Types.GET_COMPANY, payload: company.data.results })

    } catch (error) {

    }
}
export const getCompanyFindId = (data) => async dispatch => {
    try {
        const company = await axios.get(`${baseApi}/category/company/find/?id=${data}`)

        dispatch({ type: Types.GET_COMPANY_FIND_ID, payload: company.data.results })

    } catch (error) {

    }
}
// lay danh sach ca bai post
export const getAllPost = (data) => async dispatch => {
    try {
        const company = await axios.get(`${baseApi}/posts/`)

        dispatch({ type: Types.GET_POST, payload: company.data.results })

    } catch (error) {

    }
}
export const getPostFindId = (data) => async dispatch => {
    try {
        const company = await axios.get(`${baseApi}/posts/post/find/?id=${data}`)

        dispatch({ type: Types.GET_POST_FIND_ID, payload: company.data.results })

    } catch (error) {

    }
}


// lấy danh sách san phẩm
export const getAllProduct = (data) => async dispatch => {
    try {
        const product = await axios.get(`${baseApi}/product/`)

        dispatch({ type: Types.GET_PRODUCT, payload: product.data.results })

    } catch (error) {

    }
}
export const getProductCategory = (data) => async dispatch => {
    try {
        const product = await axios.get(`${baseApi}/product/category?category=${data}`)

        dispatch({ type: Types.GET_PRODUCT_CATEGORY, payload: product.data.results })

    } catch (error) {

    }
}
export const getProductId = (data) => async dispatch => {
    try {
        const product = await axios.get(`${baseApi}/product/find?id=${data}`)

        dispatch({ type: Types.GET_PRODUCT_ID, payload: product.data.result })

    } catch (error) {

    }
}


// ad cart
export const addcart = (data) => async dispatch => {
    try {
        dispatch({ type: Types.ADD_CART, payload: data })
    } catch (error) {

    }
}
export const addQuantity = (data) => async dispatch => {
    try {
        dispatch({ type: Types.ADD_QUANTITY, payload: data })
    } catch (error) {

    }
}