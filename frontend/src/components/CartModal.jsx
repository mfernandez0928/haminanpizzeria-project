import { useCartStore } from "../store/store";

export default function CartModal({ onClose }) {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  // Calculate totals
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const delivery = 2.5;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + delivery + tax;

  return (
    // NO BACKDROP - Clean POS Style
    <div className="fixed right-0 top-0 h-full w-full md:w-[420px] bg-[#2a2a2a] shadow-2xl z-50 overflow-y-auto flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-[#C4007F] to-[#9e0066] p-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
          <p className="text-sm text-gray-200 mt-1">
            {items.length} item{items.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition text-3xl w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      {/* Items Section */}
      <div className="flex-1 p-4 overflow-y-auto">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🛒</p>
            <p className="text-gray-400 text-lg">Your cart is empty</p>
            <p className="text-gray-500 text-sm mt-2">
              Add items to get started
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item, idx) => (
              <div
                key={item._id}
                className="bg-[#1D1C1C] p-4 rounded-lg border-l-4 border-[#C4007F] hover:border-[#F3B404] transition"
              >
                {/* Item Header */}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item._id)}
                    className="text-red-500 hover:text-red-700 ml-2 text-lg"
                  >
                    ✕
                  </button>
                </div>

                {/* Item Footer with Quantity & Price */}
                <div className="flex justify-between items-center mt-3">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-[#2a2a2a] p-1 rounded border border-[#C4007F]">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          Math.max(1, (item.quantity || 1) - 1)
                        )
                      }
                      className="w-6 h-6 bg-[#C4007F] text-white rounded hover:bg-[#9e0066] transition text-sm font-bold"
                    >
                      −
                    </button>
                    <span className="text-white font-bold w-6 text-center text-sm">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, (item.quantity || 1) + 1)
                      }
                      className="w-6 h-6 bg-[#C4007F] text-white rounded hover:bg-[#9e0066] transition text-sm font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Item Price */}
                  <span className="text-[#F3B404] font-bold text-sm">
                    €{(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer - Order Summary (POS Style) */}
      {items.length > 0 && (
        <div className="sticky bottom-0 bg-[#1D1C1C] border-t-2 border-[#C4007F] p-4 space-y-3">
          {/* Order Details */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal:</span>
              <span className="font-semibold">€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Tax (10%):</span>
              <span className="font-semibold text-[#F3B404]">
                €{tax.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Delivery:</span>
              <span className="font-semibold text-[#F3B404]">
                €{delivery.toFixed(2)}
              </span>
            </div>

            {/* Total */}
            <div className="border-t border-[#C4007F] pt-2 flex justify-between text-white text-lg font-bold">
              <span>TOTAL:</span>
              <span className="text-[#C4007F]">€{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-[#41C485] to-[#2fa86e] text-white py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              💳 Proceed to Checkout
            </button>

            <button
              onClick={() => {
                clearCart();
                onClose();
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
            >
              Clear All
            </button>

            <button
              onClick={onClose}
              className="w-full bg-[#2a2a2a] hover:bg-[#333333] text-white py-2 rounded-lg font-semibold transition border border-gray-600"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
