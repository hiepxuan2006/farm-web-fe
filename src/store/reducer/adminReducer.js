import * as Types from '../types'
const initialState = {
    adminInfor: '',
    isAdmin: false,
    users: ''
}
const adminReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {

        case Types.ADMIN_LOGIN_SUCCESS:
            return { ...state, adminInfor: payload, isAdmin: true }
        case Types.GET_ALL_USER:
            return { ...state, users: payload }
        case Types.GET_ALL_USER:
            return { ...state, users: payload }
        default:
            return state
    }
}
export default adminReducer
