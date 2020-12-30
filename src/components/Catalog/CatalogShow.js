import React from 'react';

import './Catalog.css';

import catalogData from './catalogData';

const CatalogShow = () => {
    return (
        <div>
           <h1>Products</h1>
           <div className='products'>
                {
                    catalogData.map(product => 
                        <div className='product'>
                            <div className='image'><img src={product.image}></img></div>
                            <div>
                                <span>{product.title}</span>
                                <span>{product.price}</span>
                                <button>Add to cart</button>
                            </div>

                        </div>
                    )
                }   
            </div> 
        </div>
    )
}

export default CatalogShow;
