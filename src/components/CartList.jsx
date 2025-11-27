import React from 'react';
import { useCart } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';

function CartList({ products }) {
    const { AddToCart } = useCart();

    return (
        <div className="card">
            <div>
                <img src={products.img} alt={products.name} />
                <h3>{products.name}</h3>
                <span>Price: ₹{products.price}</span>
            </div>

            <NavLink to={`/product/${products.id}`}>
                <button className="add-btn" onClick={() => AddToCart(products)}>View Details</button>
            </NavLink>
        </div>
    );
}

export default CartList;
