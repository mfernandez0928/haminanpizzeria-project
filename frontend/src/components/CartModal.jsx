import { useCartStore } from "../store/store";

export default function CartModal({ onClose }) {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  // Calculate total
  const total = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const delivery = 2.5;
  const finalTotal = total + delivery;

  return (
    <>
      {/* Backdrop - Click to close */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-[#2a2a2a] shadow-2xl z-50 overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-[#1D1C1C] p-6 border-b border-[#C4007F] flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-[#C4007F] transition text-3xl w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 p-6 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">
                Your cart is empty 😢
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="bg-[#1D1C1C] p-4 rounded-lg border border-[#C4007F]"
                >
                  {/* Item Header */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-bold text-lg">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 hover:text-red-700 text-xl"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Item Description */}
                  <p className="text-gray-400 text-sm mb-3">
                    {item.description}
                  </p>

                  {/* Quantity & Price */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 bg-[#2a2a2a] p-1 rounded">
                      <button
                        onClick={() =>
                          updateQuantity(item._id, (item.quantity || 1) - 1)
                        }
                        className="w-6 h-6 bg-[#C4007F] text-white rounded hover:bg-[#9e0066]"
                      >
                        -
                      </button>
                      <span className="text-white font-bold w-6 text-center">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item._id, (item.quantity || 1) + 1)
                        }
                        className="w-6 h-6 bg-[#C4007F] text-white rounded hover:bg-[#9e0066]"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-[#C4007F] font-bold text-lg">
                      €{(item.price * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Totals */}
        {items.length > 0 && (
          <div className="sticky bottom-0 bg-[#1D1C1C] p-6 border-t border-[#C4007F] space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between text-white">
              <span>Subtotal:</span>
              <span className="text-[#C4007F] font-bold">
                €{total.toFixed(2)}
              </span>
            </div>

            {/* Delivery */}
            <div className="flex justify-between text-white">
              <span>Delivery:</span>
              <span className="text-[#F3B404] font-bold">
                €{delivery.toFixed(2)}
              </span>
            </div>

            {/* Total */}
            <div className="border-t border-[#C4007F] pt-3 flex justify-between text-white text-lg">
              <span className="font-bold">Total:</span>
              <span className="font-bold text-[#C4007F]">
                €{finalTotal.toFixed(2)}
              </span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onClose}
              className="w-full bg-[#41C485] text-white py-3 rounded-lg font-bold hover:bg-[#35a970] transition"
            >
              Checkout 💳
            </button>

            {/* Clear Cart Button */}
            <button
              onClick={() => {
                clearCart();
                onClose();
              }}
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Clear Cart 🗑️
            </button>
          </div>
        )}
      </div>
    </>
  );
}
