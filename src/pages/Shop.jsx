import React from 'react';
import { useCart } from '../context/ContextProvider';

function Shop() {
  const { cart, removeItem, updateItem, totalPrice } = useCart();

  return (
    <div className="shop_container">
      <h3 >Your Cart</h3>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <div className="cart_grid">
            {cart.map((p) => (
              <div className="cart_card" key={p.id}>
                <div className="cart_row">
                <img src={p.img} alt={p.name} />

                  <div className="col col-1">{p.name}</div>
                  <div className="col col-2">₹{p.price}</div>
                  <div className="col col-3">{p.price} × {p.qty}</div>

                  <div className="col col-4">
                    <input
                      type="number"
                      min="1"
                      value={p.qty}
                      onChange={(e) => updateItem(p.id, Number(e.target.value))}
                    />
                  </div>

                  <div className="col col-5">
                    <button onClick={() => removeItem(p.id)} className='remove'>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="total">Total Price: ₹{totalPrice}</h2>
        </>
      )}
    </div>
  );
}

export default Shop;
