
const initialState = {
    products : [],
    loading : true
}

const Products = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case 'ADD_PRODUCTS':
            return{
                ...state,
                products : payload,
                loading : false
            }
        default:
            return state;
    }
};

export default Products;