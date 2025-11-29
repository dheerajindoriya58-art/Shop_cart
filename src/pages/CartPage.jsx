import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, add, removeOne, deleteItem } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} width="80" />
          <p>${item.price}</p>

          <button onClick={() => removeOne(item.id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => add(item)}>+</button>

          <button onClick={() => deleteItem(item.id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}
