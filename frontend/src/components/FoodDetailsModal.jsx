// src/components/FoodDetailsModal.jsx - WITH Ingredient Customization
import { useCartStore } from "../store/store";
import { useState } from "react";
import { toast } from "react-toastify";

export default function FoodDetailsModal({ item, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState(
    item.ingredients ? [...item.ingredients] : []
  );
  const [extraIngredients, setExtraIngredients] = useState([]);
  const [showExtraOptions, setShowExtraOptions] = useState(false);
  const addToCart = useCartStore((state) => state.addItem);

  // Available extra ingredients to add
  const availableExtras = [
    "Extra Cheese",
    "Bacon",
    "Mushrooms",
    "Olives",
    "Pepperoni",
    "Ham",
    "Pineapple",
    "Jalapeños",
    "Garlic",
    "Onions",
  ];

  const toggleIngredient = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const toggleExtraIngredient = (ingredient) => {
    setExtraIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleAddToCart = () => {
    const customizedItem = {
      ...item,
      quantity,
      selectedIngredients,
      extraIngredients,
      customNote:
        extraIngredients.length > 0
          ? `Extra: ${extraIngredients.join(", ")}`
          : null,
    };
    addToCart(customizedItem);

    const message =
      extraIngredients.length > 0
        ? `${item.name} with extras added to cart! 🛒`
        : `${item.name} x${quantity} added to cart! 🛒`;

    toast.success(message);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-[#2a2a2a] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#C4007F] to-[#9e0066] p-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">{item.name}</h1>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition text-3xl w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Image Section */}
            <div className="h-64 bg-gradient-to-b from-[#C4007F] to-[#1D1C1C] rounded-xl flex items-center justify-center text-8xl">
              🍽️
            </div>

            {/* Price & Rating */}
            <div className="flex justify-between items-center bg-[#1D1C1C] p-4 rounded-lg">
              <div>
                <p className="text-gray-400 text-sm">Price</p>
                <p className="text-4xl font-bold text-[#C4007F]">
                  €{item.price}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">Rating</p>
                <div className="flex gap-1 justify-end mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(item.rating)
                          ? "text-[#F3B404] text-2xl"
                          : "text-[rgba(243,180,4,0.3)] text-2xl"
                      }
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-1">
                  ({item.reviews} reviews)
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-[#1D1C1C] p-4 rounded-lg">
              <h3 className="text-lg font-bold text-[#C4007F] mb-2">
                Description
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Ingredients - CUSTOMIZE */}
            <div className="bg-[#1D1C1C] p-4 rounded-lg">
              <h3 className="text-lg font-bold text-[#C4007F] mb-3">
                🥘 Ingredients
              </h3>
              <p className="text-gray-400 text-xs mb-3">
                Click to remove ingredients you don't want
              </p>
              <div className="grid grid-cols-2 gap-3">
                {item.ingredients && item.ingredients.length > 0 ? (
                  item.ingredients.map((ing, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleIngredient(ing)}
                      className={`flex items-center gap-2 p-3 rounded transition transform hover:scale-105 ${
                        selectedIngredients.includes(ing)
                          ? "bg-[#41C485] bg-opacity-20 border border-[#41C485]"
                          : "bg-[#2a2a2a] border border-red-500 opacity-50"
                      }`}
                    >
                      <span className="text-lg">
                        {selectedIngredients.includes(ing) ? "✓" : "✕"}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          selectedIngredients.includes(ing)
                            ? "text-white"
                            : "text-red-400 line-through"
                        }`}
                      >
                        {ing}
                      </span>
                    </button>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm col-span-2">
                    No ingredients listed
                  </p>
                )}
              </div>
            </div>

            {/* Extra Ingredients - ADD */}
            <div className="bg-[#1D1C1C] p-4 rounded-lg border-2 border-[#F3B404]">
              <button
                onClick={() => setShowExtraOptions(!showExtraOptions)}
                className="w-full flex justify-between items-center text-lg font-bold text-[#F3B404] mb-3 hover:text-white transition"
              >
                <span>➕ Add Extra Ingredients</span>
                <span
                  className={`transition-transform ${
                    showExtraOptions ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {showExtraOptions && (
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#F3B404]">
                  {availableExtras.map((extra, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleExtraIngredient(extra)}
                      className={`flex items-center gap-2 p-3 rounded transition transform hover:scale-105 ${
                        extraIngredients.includes(extra)
                          ? "bg-[#F3B404] bg-opacity-30 border border-[#F3B404]"
                          : "bg-[#2a2a2a] border border-gray-600 hover:border-[#F3B404]"
                      }`}
                    >
                      <span className="text-lg">
                        {extraIngredients.includes(extra) ? "✓" : "+"}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          extraIngredients.includes(extra)
                            ? "text-white"
                            : "text-gray-300"
                        }`}
                      >
                        {extra}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {extraIngredients.length > 0 && (
                <div className="mt-3 p-3 bg-[#F3B404] bg-opacity-10 rounded border border-[#F3B404]">
                  <p className="text-[#F3B404] font-bold text-sm">
                    Selected extras:
                  </p>
                  <p className="text-white text-sm">
                    {extraIngredients.join(", ")}
                  </p>
                </div>
              )}
            </div>

            {/* Nutrition Info */}
            {item.nutrition && (
              <div className="bg-[#1D1C1C] p-4 rounded-lg">
                <h3 className="text-lg font-bold text-[#C4007F] mb-3">
                  Nutrition (per serving)
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {item.nutrition.calories && (
                    <div className="bg-[#2a2a2a] p-3 rounded">
                      <p className="text-gray-400 text-xs">Calories</p>
                      <p className="text-white font-bold">
                        {item.nutrition.calories}
                      </p>
                    </div>
                  )}
                  {item.nutrition.protein && (
                    <div className="bg-[#2a2a2a] p-3 rounded">
                      <p className="text-gray-400 text-xs">Protein</p>
                      <p className="text-white font-bold">
                        {item.nutrition.protein}g
                      </p>
                    </div>
                  )}
                  {item.nutrition.fat && (
                    <div className="bg-[#2a2a2a] p-3 rounded">
                      <p className="text-gray-400 text-xs">Fat</p>
                      <p className="text-white font-bold">
                        {item.nutrition.fat}g
                      </p>
                    </div>
                  )}
                  {item.nutrition.carbs && (
                    <div className="bg-[#2a2a2a] p-3 rounded">
                      <p className="text-gray-400 text-xs">Carbs</p>
                      <p className="text-white font-bold">
                        {item.nutrition.carbs}g
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quantity Selector & Add to Cart */}
            <div className="bg-[#1D1C1C] p-4 rounded-lg space-y-4">
              <div>
                <label className="text-gray-400 text-sm">Quantity</label>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-[#C4007F] text-white rounded hover:bg-[#9e0066] transition font-bold"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold text-white w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-[#C4007F] text-white rounded hover:bg-[#9e0066] transition font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="flex justify-between items-center bg-[#2a2a2a] p-3 rounded">
                <span className="text-gray-300">Total:</span>
                <span className="text-3xl font-bold text-[#F3B404]">
                  €{(item.price * quantity).toFixed(2)}
                </span>
              </div>

              {/* Customization Summary */}
              {(selectedIngredients.length < item.ingredients.length ||
                extraIngredients.length > 0) && (
                <div className="bg-[#41C485] bg-opacity-10 border border-[#41C485] p-3 rounded">
                  <p className="text-[#41C485] text-sm font-semibold">
                    ✓ Customized
                  </p>
                  {selectedIngredients.length < item.ingredients.length && (
                    <p className="text-gray-300 text-xs mt-1">
                      {item.ingredients.length - selectedIngredients.length}{" "}
                      ingredient(s) removed
                    </p>
                  )}
                  {extraIngredients.length > 0 && (
                    <p className="text-gray-300 text-xs mt-1">
                      {extraIngredients.length} extra ingredient(s) added
                    </p>
                  )}
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-[#41C485] to-[#2fa86e] text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                🛒 Add {quantity > 1 ? `${quantity} items` : "to Cart"}
              </button>

              <button
                onClick={onClose}
                className="w-full bg-[#2a2a2a] hover:bg-[#333333] text-white py-3 rounded-lg font-semibold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
