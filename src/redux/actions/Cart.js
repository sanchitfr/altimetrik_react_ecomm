
export const addProduct = (product) => dispatch => {
    dispatch({
        type : 'ADD_PRODUCT',
        payload : product
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