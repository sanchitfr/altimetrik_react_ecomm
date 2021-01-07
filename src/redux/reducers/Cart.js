import { cartAddItem, removeItemFromCart } from '../actions/Cart';
const initialState = {
    cartItems : [],
    loading : true
}

const Cart = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case 'ADD_PRODUCT':
            return{
                ...state,
                cartItems : cartAddItem(payload, state.cartItems)
            }
        case 'EMPTY_CART':
            return{
                ...state,
                cartItems : [],
                loading : false
            }
        case 'REMOVE_PRODUCT':
            return{
                ...state,
                cartItems : removeItemFromCart(state.cartItems, payload),
                loading: false
            }
        default:
            return state;
    }
};

export default Cart;