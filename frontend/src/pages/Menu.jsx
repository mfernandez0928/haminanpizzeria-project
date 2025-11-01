import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { menuAPI } from "../services/api";
import { useMenuStore, useCartStore } from "../store/store";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const [loading, setLoading] = useState(false);
  const { items: menuItems, setItems } = useMenuStore();
  const addToCart = useCartStore((state) => state.addItem);

  const categories = [
    "pizza",
    "kebab",
    "salad",
    "burger",
    "combo",
    "drink",
    "dessert",
  ];

  useEffect(() => {
    fetchMenu();
  }, [selectedCategory]);

  const fetchMenu = async () => {
    setLoading(true);
    try {
      const response = await menuAPI.getAll(selectedCategory);
      setItems(response.data.data);
    } catch (error) {
      toast.error("Failed to load menu");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-[#1D1C1C] pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Our <span className="text-[#C4007F]">Menu</span>
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors capitalize ${
                selectedCategory === cat
                  ? "bg-[#C4007F] text-white"
                  : "bg-[#2a2a2a] text-white hover:bg-[#C4007F]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {loading ? (
          <div className="text-center text-white text-xl py-12">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div
                key={item._id}
                className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                <div className="h-48 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-[#C4007F]">
                      €{item.price}
                    </span>
                    <span className="text-[#F3B404] text-sm">
                      ⭐ {item.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-[#41C485] text-white py-2 rounded-lg font-semibold hover:bg-[#35a970] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && menuItems.length === 0 && (
          <div className="text-center text-white py-12">
            No items available in this category
          </div>
        )}
      </div>
    </div>
  );
}
