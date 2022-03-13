import * as Types from '../types'
const initialState = {
    isLogin: false,
    userInfo: {},

}
const authReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case Types.LOGIN_SUCCESS:
            return { ...state, userInfo: payload, isLogin: true }

        default:
            return state
    }
}
export default authReducer
