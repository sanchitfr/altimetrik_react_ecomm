import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './Checkout.css';
import { removeProduct } from '../../redux/actions/Cart';



const Checkout = ({cartItems, removeProduct, isAuthenticated}) => {

    const [cartTotal, setCartTotal] = useState(0);

    const handleClick = e => {
        if(isAuthenticated){
            alert("Order sucessfully placed!");
        }
        else{
            alert("Need to be logged in to place order");
            return <Redirect to='/login'/>
        }
    }

    useEffect(() => {
        let total = 0;
        cartItems.forEach(cartItem => {
            total = total + cartItem.price*cartItem.quantity;
            console.log(cartItem.title, cartTotal, total);
            setCartTotal(total);
        })
    }, [cartItems])

    return (
        <div>
            <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove Item</th>
            </tr>
            {
                cartItems.map(product => 
                    <tr>
                        <td>{product.title}</td>
                        <td>${product.price}</td>
                        <td>{product.quantity}</td>
                        <td><button onClick={e => removeProduct(product.id)}>Remove</button></td>
                    </tr>    
                )
            }
            <td></td>
            <td></td>
            <td></td>
            <td>Total: ${Math.round(cartTotal)}</td>
            </table>
            <div>
                <button onClick={e => handleClick(e)}>Place Order</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems : state.Cart.cartItems,
    isAuthenticated : state.Users.isAuthenticated
})

export default connect(mapStateToProps, { removeProduct })(Checkout);
