import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setAuthToken from "../setAuthToken";
import { setAdmin } from "../store/action/adminAction";
import { userSetAuth } from "../store/action/authAction";
import { baseApi, TOKEN_NAME } from "./ContTant";

;

export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {

    const dispatch = useDispatch()
    const loadUser = async () => {
        if (localStorage[TOKEN_NAME]) { setAuthToken(localStorage[TOKEN_NAME]) }

        try {
            const response = await axios.get(`${baseApi}/auth/`)
            if (response.data.success) {
                dispatch(userSetAuth(response.data.user))
                if (response.data.user.isAdmin)
                    dispatch(setAdmin(response.data.user))
            }
        } catch (error) {
            localStorage.removeItem(TOKEN_NAME)
            setAuthToken(null)
            // dispatch(logoutUser())
        }
    }
    const [cart, setCart] = useState([]);

    const addCart = (product) => {

        console.log(cart);
    }

    useEffect(() => {
        loadUser()
    }, [])
    const value = { addCart }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthContextProvider