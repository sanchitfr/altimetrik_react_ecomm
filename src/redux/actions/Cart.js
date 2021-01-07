
export const addProduct = (product) => dispatch => {
    dispatch({
        type : 'ADD_PRODUCT',
        payload : product
    })
};

export const emptyCart = () => dispatch => {
    dispatch({
        type : 'EMPTY_CART'
    })
};

export const removeProduct = (productID) => dispatch => {
    dispatch({
        type: 'REMOVE_PRODUCT',
        payload: productID
    })
};

export const cartAddItem = (itemToAdd, cartItems) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if(existingItem){
        return (
            cartItems.map(cartItem => 
                cartItem.id === itemToAdd.id ?
                {...cartItem, quantity : cartItem.quantity + 1}
                :
                cartItem
            )
        )
    }
    return(
        [...cartItems, itemToAdd]
    )
}

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToBeRemoved);

    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToBeRemoved)
    }
    else{
        return cartItems.map(cartItem => 
            cartItem.id === itemToBeRemoved ?
            {...cartItem, quantity : cartItem.quantity - 1}
            :
            cartItem
        )
    }
    
}