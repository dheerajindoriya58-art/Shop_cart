import { useCart } from "../context/CartContext";

export default function Shop() {
  const { cart, addToCart, removeOne, deleteItem } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>No items in cart.</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} width="80" />

          <p>Price: ₹ {item.price * item.qty}</p>

          <button onClick={() => removeOne(item.id)}>-</button>
          <span style={{ margin: "0 10px" }}>{item.qty}</span>
          <button onClick={() => addToCart(item)}>+</button>

          <br />
          <button onClick={() => deleteItem(item.id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}
