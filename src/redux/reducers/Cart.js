import { cartAddItem } from '../actions/Cart';
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
        case 'REMOVE_PRODUCT':
            return{
                ...state,
                cartItems : state.cartItems.filter(item =>item.id !== payload),
                loading: false
            }
        default:
            return state;
    }
};

export default Cart;