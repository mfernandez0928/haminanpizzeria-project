import { useState } from "react";
import { toast } from "react-toastify";
import { useCartStore } from "../store/store";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const addToCart = useCartStore((state) => state.addItem);

  const categories = [
    { id: "pizza", name: "Pizza" },
    { id: "kebab", name: "Kebab" },
    { id: "salad", name: "Salad" },
    { id: "burger", name: "Burger" },
    { id: "combo", name: "Combo" },
  ];

  const allItems = [
    // PIZZAS
    {
      _id: "1",
      name: "Täytteen pizza",
      description: "1 täyte",
      category: "pizza",
      price: 10,
      rating: 5,
      reviews: 120,
    },
    {
      _id: "2",
      name: "Opera",
      description: "Tonnikala, pizzasuikale",
      category: "pizza",
      price: 11,
      rating: 4.8,
      reviews: 95,
    },
    {
      _id: "3",
      name: "Pepperoni",
      description: "Pepperoni, sipuli, paprika",
      category: "pizza",
      price: 11,
      rating: 4.9,
      reviews: 110,
    },
    {
      _id: "4",
      name: "Romano",
      description: "Salami, sipuli, valkosipuli",
      category: "pizza",
      price: 11,
      rating: 4.7,
      reviews: 88,
    },
    {
      _id: "5",
      name: "Francescana",
      description: "Pizzasuikale, herkkusieni",
      category: "pizza",
      price: 11,
      rating: 4.8,
      reviews: 92,
    },
    {
      _id: "6",
      name: "Vegetariana",
      description: "Sipuli, paprika, herkkusieni",
      category: "pizza",
      price: 11,
      rating: 4.6,
      reviews: 76,
    },
    {
      _id: "7",
      name: "Americano",
      description: "Pizzasuikale, ananas, aurajuusto",
      category: "pizza",
      price: 12,
      rating: 4.7,
      reviews: 85,
    },
    {
      _id: "8",
      name: "Frutti Di Mare",
      description: "Tonnikala, simpukka, katkarapu",
      category: "pizza",
      price: 12,
      rating: 4.8,
      reviews: 102,
    },
    // KEBABS
    {
      _id: "9",
      name: "Special Kebab",
      description: "Grilled meat with fresh vegetables",
      category: "kebab",
      price: 12.99,
      rating: 4.9,
      reviews: 150,
    },
    {
      _id: "10",
      name: "Chicken Kebab",
      description: "Tender chicken with vegetables",
      category: "kebab",
      price: 11.99,
      rating: 4.8,
      reviews: 130,
    },
    // SALADS
    {
      _id: "11",
      name: "Greek Salad",
      description: "Fresh vegetables with feta cheese",
      category: "salad",
      price: 10.99,
      rating: 4.9,
      reviews: 125,
    },
    {
      _id: "12",
      name: "Haminan Salad",
      description: "Mixed greens with house dressing",
      category: "salad",
      price: 9.99,
      rating: 4.7,
      reviews: 95,
    },
    // BURGERS
    {
      _id: "13",
      name: "Classic Burger",
      description: "Beef patty with cheese",
      category: "burger",
      price: 10.99,
      rating: 4.8,
      reviews: 140,
    },
    // COMBOS
    {
      _id: "14",
      name: "Pizza + Fries",
      description: "Pizza with French fries",
      category: "combo",
      price: 15.99,
      rating: 4.8,
      reviews: 140,
    },
    {
      _id: "15",
      name: "Kebab Combo",
      description: "Kebab with fries and drink",
      category: "combo",
      price: 16.99,
      rating: 4.9,
      reviews: 155,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart! 🛒`);
  };

  return (
    <div className="bg-[#1D1C1C] text-white min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Our Menu
          <br />
          <span className="text-[#C4007F]">🍕 🌮 🥗</span>
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#C4007F] text-white scale-110 shadow-lg"
                  : "bg-[#2a2a2a] text-white hover:bg-[#C4007F]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item._id}
              className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-gradient-to-b from-[#C4007F] to-[#1D1C1C] relative flex items-center justify-center">
                <div className="text-6xl">🍽️</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3 min-h-10 line-clamp-2">
                  {item.description}
                </p>

                {/* Rating */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(item.rating)
                            ? "text-[#F3B404]"
                            : "text-[rgba(243,180,4,0.3)]"
                        }
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    ({item.reviews})
                  </span>
                </div>

                {/* Price & Button */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#C4007F]">
                    €{item.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="px-4 py-2 bg-[#41C485] text-white rounded-lg font-semibold hover:bg-[#35a970] transition transform hover:scale-105"
                  >
                    Add 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center text-white py-12 text-xl">
            No items in this category 😢
          </div>
        )}
      </div>
    </div>
  );
}
