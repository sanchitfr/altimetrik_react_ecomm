import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './Catalog.css';

import { addProduct } from '../../redux/actions/Cart';

const CatalogShow = ({products, addProduct}) => {

    return (
        <div>
           <h1>Products</h1>
           <div className='products'>
                {
                    products.map(product => 
                        <div className='card'>
                           <img src={product.image} alt="Avatar" />
                            <div class="container">
                                <h4>{product.title.substr(0, 15)}...</h4> 
                                <p>${product.price}</p> 
                                <button onClick={e => addProduct(product)}>Add to cart</button>
                            </div> 
                        </div>
                    )
                }   
            </div> 
        </div>
    )
}

const mapStateToProps = state => ({
    products : state.Products.products
})

export default connect(mapStateToProps, { addProduct })(CatalogShow);
