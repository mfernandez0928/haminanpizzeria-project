import { useState } from "react";
import { useCartStore } from "../store/store";
import FoodDetailsModal from "../components/FoodDetailsModal";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const [selectedItem, setSelectedItem] = useState(null);
  const addToCart = useCartStore((state) => state.addItem);

  const categories = [
    { id: "pizza", name: "Pizza" },
    { id: "kebab", name: "Kebab" },
    { id: "salad", name: "Salad" },
    { id: "burger", name: "Burger" },
    { id: "combo", name: "Combo" },
  ];

  const allItems = [
    // PIZZAS - WITH DIRECT IMAGE LINKS
    {
      _id: "1",
      name: "Täytteen pizza",
      description: "1 täyte",
      category: "pizza",
      price: 10,
      rating: 5,
      reviews: 120,
      image: "https://i.ibb.co/W43dkZHr/image.jpg", // DIRECT LINK
      ingredients: ["Dough", "Tomato Sauce", "Cheese", "Filling"],
      nutrition: { calories: 250, protein: 12, fat: 8, carbs: 35 },
    },
    {
      _id: "2",
      name: "Opera",
      description: "Tonnikala, pizzasuikale",
      category: "pizza",
      price: 11,
      rating: 4.8,
      reviews: 95,
      image: "https://i.ibb.co/6c3CT36M/image.jpg", // DIRECT LINK
      ingredients: [
        "Dough",
        "Tomato Sauce",
        "Tuna",
        "Mozzarella",
        "Vegetables",
      ],
      nutrition: { calories: 280, protein: 18, fat: 9, carbs: 32 },
    },
    {
      _id: "3",
      name: "Pepperoni",
      description: "Pepperoni, sipuli, paprika",
      category: "pizza",
      price: 11,
      rating: 4.9,
      reviews: 110,
      image: "https://i.ibb.co/prbn35cT/image.jpg", // DIRECT LINK
      ingredients: [
        "Dough",
        "Tomato Sauce",
        "Pepperoni",
        "Onion",
        "Bell Pepper",
        "Mozzarella",
      ],
      nutrition: { calories: 300, protein: 15, fat: 14, carbs: 35 },
    },
    {
      _id: "4",
      name: "Romano",
      description: "Salami, sipuli, valkosipuli",
      category: "pizza",
      price: 11,
      rating: 4.7,
      reviews: 88,
      image: "https://i.ibb.co/j9XRybJg/image.jpg", // DIRECT LINK
      ingredients: [
        "Dough",
        "Tomato Sauce",
        "Salami",
        "Onion",
        "Garlic",
        "Mozzarella",
      ],
      nutrition: { calories: 310, protein: 16, fat: 15, carbs: 34 },
    },
    {
      _id: "5",
      name: "Francescana",
      description: "Pizzasuikale, herkkusieni",
      category: "pizza",
      price: 11,
      rating: 4.8,
      reviews: 92,
      image: "https://i.ibb.co/7xHK9QRV/image.jpg", // ADD MORE IMAGE URLS HERE IF YOU HAVE THEM
      ingredients: ["Dough", "Tomato Sauce", "Mushrooms", "Ham", "Mozzarella"],
      nutrition: { calories: 280, protein: 14, fat: 10, carbs: 34 },
    },
    {
      _id: "6",
      name: "Vegetariana",
      description: "Sipuli, paprika, herkkusieni",
      category: "pizza",
      price: 11,
      rating: 4.6,
      reviews: 76,
      image: "", // ADD MORE IMAGE URLS HERE IF YOU HAVE THEM
      ingredients: [
        "Dough",
        "Tomato Sauce",
        "Onion",
        "Bell Pepper",
        "Mushrooms",
        "Mozzarella",
        "Olives",
      ],
      nutrition: { calories: 260, protein: 11, fat: 8, carbs: 36 },
    },
    // KEBABS
    {
      _id: "7",
      name: "Special Kebab",
      description: "Grilled meat with fresh vegetables",
      category: "kebab",
      price: 12.99,
      rating: 4.9,
      reviews: 150,
      image: "", // ADD YOUR KEBAB IMAGE HERE
      ingredients: [
        "Grilled Meat",
        "Lettuce",
        "Tomato",
        "Cucumber",
        "Onion",
        "Sauce",
        "Pita Bread",
      ],
      nutrition: { calories: 450, protein: 35, fat: 18, carbs: 38 },
    },
    {
      _id: "8",
      name: "Chicken Kebab",
      description: "Tender chicken with vegetables",
      category: "kebab",
      price: 11.99,
      rating: 4.8,
      reviews: 130,
      image: "", // ADD YOUR KEBAB IMAGE HERE
      ingredients: [
        "Grilled Chicken",
        "Lettuce",
        "Tomato",
        "Cucumber",
        "Onion",
        "Sauce",
        "Pita Bread",
      ],
      nutrition: { calories: 420, protein: 38, fat: 14, carbs: 36 },
    },
    // SALADS
    {
      _id: "9",
      name: "Greek Salad",
      description: "Fresh vegetables with feta cheese",
      category: "salad",
      price: 10.99,
      rating: 4.9,
      reviews: 125,
      image: "", // ADD YOUR SALAD IMAGE HERE
      ingredients: [
        "Lettuce",
        "Tomato",
        "Cucumber",
        "Red Onion",
        "Feta Cheese",
        "Olives",
        "Olive Oil",
      ],
      nutrition: { calories: 180, protein: 8, fat: 12, carbs: 14 },
    },
    {
      _id: "10",
      name: "Haminan Salad",
      description: "Mixed greens with house dressing",
      category: "salad",
      price: 9.99,
      rating: 4.7,
      reviews: 95,
      image: "https://i.ibb.co/Y7r53zqj/image.jpg", // ADD YOUR SALAD IMAGE HERE
      ingredients: [
        "Mixed Greens",
        "Carrot",
        "Tomato",
        "Cucumber",
        "House Dressing",
      ],
      nutrition: { calories: 150, protein: 6, fat: 8, carbs: 16 },
    },
    // BURGER
    {
      _id: "11",
      name: "Classic Burger",
      description: "Beef patty with cheese",
      category: "burger",
      price: 10.99,
      rating: 4.8,
      reviews: 140,
      image: "https://i.ibb.co/pr2TBTJM/image.jpg", // ADD YOUR BURGER IMAGE HERE
      ingredients: [
        "Bun",
        "Beef Patty",
        "Cheese",
        "Lettuce",
        "Tomato",
        "Onion",
        "Sauce",
      ],
      nutrition: { calories: 380, protein: 22, fat: 16, carbs: 38 },
    },
    // COMBOS
    {
      _id: "12",
      name: "Pizza + Fries",
      description: "Pizza with French fries",
      category: "combo",
      price: 15.99,
      rating: 4.8,
      reviews: 140,
      image: "", // ADD YOUR COMBO IMAGE HERE
      ingredients: ["Pizza", "Potatoes", "Salt", "Oil"],
      nutrition: { calories: 650, protein: 18, fat: 24, carbs: 85 },
    },
    {
      _id: "13",
      name: "Kebab Combo",
      description: "Kebab with fries and drink",
      category: "combo",
      price: 16.99,
      rating: 4.9,
      reviews: 155,
      image: "", // ADD YOUR COMBO IMAGE HERE
      ingredients: ["Kebab", "Fries", "Drink (250ml)", "Sauce"],
      nutrition: { calories: 750, protein: 40, fat: 28, carbs: 82 },
    },
  ];

  const filteredItems = allItems.filter(
    (item) => item.category === selectedCategory
  );

  const handleAddQuickCart = (item, e) => {
    e.stopPropagation();
    addToCart(item);
    toast.success(`${item.name} added to cart! 🛒`);
  };

  return (
    <>
      <div className="bg-[#1D1C1C] text-white min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Our Menu
            <br />
            <span className="text-[#C4007F]">🍕 🌮 🥗</span>
          </h1>

          {/* Food Details Modal */}
          {selectedItem && (
            <FoodDetailsModal
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#C4007F] text-white shadow-lg scale-110"
                    : "bg-[#2a2a2a] text-white hover:bg-[#C4007F] hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                onClick={() => setSelectedItem(item)}
                className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group"
              >
                {/* Image Section */}
                <div className="h-48 bg-gradient-to-b from-[#C4007F] to-[#1D1C1C] flex items-center justify-center overflow-hidden relative group">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : null}
                  <span
                    className="absolute inset-0 flex items-center justify-center text-6xl"
                    style={{ display: item.image ? "none" : "flex" }}
                  >
                    🍽️
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Ingredients Preview */}
                  <div className="mb-4 bg-[#1D1C1C] p-2 rounded text-xs text-gray-300">
                    <p className="font-semibold text-[#F3B404] mb-1">Main:</p>
                    <p>
                      {item.ingredients?.slice(0, 2).join(", ") ||
                        "No ingredients"}
                    </p>
                  </div>

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
                      type="button"
                      onClick={(e) => handleAddQuickCart(item, e)}
                      className="px-4 py-2 bg-[#41C485] text-white rounded-lg font-bold hover:bg-[#35a970] hover:scale-105 transition-all cursor-pointer"
                    >
                      Add 🛒
                    </button>
                  </div>

                  {/* Click Hint */}
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    👆 Click to view details
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
