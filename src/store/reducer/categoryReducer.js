import * as Types from '../types'
const initialState = {
    category: '',
    company: '',
    companyId: '',
    post: '',
    postId: '',
    product: '',
    productrd: '',
    productPage: '',
    totalPage: '',
    productCategory: '',
    productId: '',
    cart: []

}

const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case Types.GET_CATEGORY:

            return {
                ...state,
                category: payload
            }
        case Types.GET_COMPANY:

            return {
                ...state,
                company: payload
            }
        case Types.GET_COMPANY_FIND_ID:

            return {
                ...state,
                companyId: payload
            }
        case Types.GET_POST:

            return {
                ...state,
                post: payload
            }
        case Types.GET_POST_FIND_ID:

            return {
                ...state,
                postId: payload
            }
        case Types.GET_PRODUCT:

            return {
                ...state,
                product: payload
            }
        case Types.GET_PRODUCT_PAGE:

            return {
                ...state,
                productPage: payload.results,
                totalPage: payload.totalPage
            }
        case Types.GET_PRODUCT_RANDOM:

            return {
                ...state,
                productrd: payload
            }
        case Types.GET_PRODUCT_CATEGORY:

            return {
                ...state,
                productCategory: payload
            }
        case Types.GET_PRODUCT_ID:

            return {
                ...state,
                productId: payload
            }
        // ///////////////////
        case Types.ADD_CART:
            const inCart = state.cart.find((item) =>

                item._id === payload._id


            );
            console.log('payload', inCart);
            return {
                ...state,
                cart: inCart
                    ?
                    state.cart.map((item) =>
                        item._id === action.payload._id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...payload }],
            };

        case Types.ADD_QUANTITY:

            console.log(payload);
            return {

                ...state,
                cart: state.cart.map((item) =>
                    item._id === payload
                        ? { ...item, qty: item.qty + 1 }
                        : { ...item })
            }
        case Types.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== payload),
            };
        default:
            return state
    }
}
export default categoryReducer