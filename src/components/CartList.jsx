import React from 'react';
import { useCart } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';

function CartList({ products }) {
    const { AddToCart } = useCart();

    return (
        <div className="card">
            <NavLink to={`/product/${products.id}`}>
                <div>
                    <img src={products.img} alt={products.name} />
                    <h3>{products.name}</h3>
                    <span>Price: ₹{products.price}</span>

                    <NavLink to="/">
                        <button className="add-btn" onClick={() => AddToCart(products)}>Add</button>
                    </NavLink>
                </div>
            </NavLink>
        </div>
    );
}

export default CartList;
