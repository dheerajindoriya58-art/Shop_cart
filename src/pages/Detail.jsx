

import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/ContextProvider";

export default function Detail() {
    const { id } = useParams();
    const { cart, AddToCart } = useCart();

    const product = cart.find((p) => p.id === Number(id));

    const handleAdd = () => {
        AddToCart(product);
    };

    if (!product) return <h2>Product not found!</h2>;

    return (
        <div className="card-details">
            <div className="grid grid-two-cols section details">
                
                <div className="full-img">
                    <img src={product.img} alt={product.name} />
                </div>

                <div className="detail-txt">
                    <div className='comy'>
                        <h2>{product.name}</h2>
                    </div>

                    <div className="cart-details">
                        <div>
                            <span className='price'>₹{product.price}</span>
                            <p>Quantity: {cart.find((i) => i.id === product.id)?.qty || 0}</p>
                            <p className='des'>{product.description}</p>
                        </div>

                        <button className="back-btn" onClick={handleAdd}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

