
export const addProducts = products => dispatch => {
    dispatch({
        type : 'ADD_PRODUCTS',
        payload : products
    })
}