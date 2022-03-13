import axios from "axios"
import * as Types from '../types'
export const setAdmin = (user) => async dispatch => {
    dispatch({
        type: Types.ADMIN_LOGIN_SUCCESS,
        payload: user
    })
}