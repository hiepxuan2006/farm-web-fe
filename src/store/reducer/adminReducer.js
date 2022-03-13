import * as Types from '../types'
const initialState = {
    adminInfor: '',
    isAdmin: false
}
const adminReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {

        case Types.ADMIN_LOGIN_SUCCESS:
            return { ...state, adminInfor: payload, isAdmin: true }
        default:
            return state
    }
}
export default adminReducer
