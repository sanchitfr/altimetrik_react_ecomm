import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import './Catalog.css';
import catalogData from '../Catalog/catalogData';
import {SearchBox} from '../search-box/search-box.components';

import { addProduct } from '../../redux/actions/Cart';
import { addProducts } from '../../redux/actions/Products';

const CatalogShow = ({products, addProduct, addProducts}) => {

    const[searchField, setSearchField] = useState({
        searchState : '',
        productsState : products
    });

    const { searchState } = searchField;

    const handleChange = e => {
        setSearchField({searchState : e.target.value});
    }

    const handleSortByPrice = () => {
        const filteredProducts = catalogData.sort((a,b) => a.price - b.price);
        setSearchField({ productsState : filteredProducts, searchState : '' });
        addProducts(filteredProducts);
    }

    const handleSortByName = () => {
        const filteredProducts = catalogData.sort((a,b) => a.title > b.title ? 1:-1);
        setSearchField({ productsState : filteredProducts, searchState : '' });
        addProducts(filteredProducts);
    }

    useEffect(() => {
        const filteredProducts = catalogData.filter(product => 
            product.title.toLowerCase().includes(searchState.toLowerCase())
        );
        addProducts(filteredProducts);
    }, [searchField]);

    useEffect(() => {
        addProducts(catalogData);
    }, []);

    return (
        <div>
           <h1>Products</h1>
           <div>
                <SearchBox handleChange={handleChange} placeholder='search catalog'/>
                <button onClick={handleSortByPrice}>Sort by price</button>
                <button onClick={handleSortByName}>Sort by name</button>
           </div>
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

export default connect(mapStateToProps, { addProduct, addProducts })(CatalogShow);
