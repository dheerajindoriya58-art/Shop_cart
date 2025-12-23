import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, add, removeOne, deleteItem } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-500">No items in cart</p>
      )}

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 border p-4 rounded shadow-sm"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />

            {/* Info */}
            <div className="flex-1 w-full">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => removeOne(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>

                <span className="font-medium">{item.qty}</span>

                <button
                  onClick={() => add(item)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => deleteItem(item.id)}
              className="bg-[#d41919] hover:bg-[#eb3434] text-white mt-2 p-[8px_24px] rounded md:mt-0"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
