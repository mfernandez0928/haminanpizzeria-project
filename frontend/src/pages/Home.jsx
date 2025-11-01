// src/pages/Home.jsx - UPDATED with Original Design Style
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#1D1C1C] text-white min-h-screen">
      {/* Hero Section - FULL SCREEN */}
      <section className="min-h-screen flex items-center justify-center pt-24 px-4 bg-gradient-to-b from-[#1D1C1C] to-[#2a2a2a] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#C4007F] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#F3B404] rounded-full opacity-10 blur-3xl"></div>

        <div className="text-center relative z-10 max-w-4xl">
          <div className="mb-6">
            <p className="text-lg text-gray-400 tracking-widest font-semibold">
              🤤 AUTHENTIC MEDITERRANEAN CUISINE
            </p>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            Order Fresh &amp; Delicious
            <br />
            <span className="bg-gradient-to-r from-[#C4007F] to-[#F3B404] bg-clip-text text-transparent">
              Pizza &amp; Kebab
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Experience authentic Mediterranean cuisine delivered fast to your
            doorstep. Fresh ingredients, amazing taste, every single time.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              to="/menu"
              className="bg-[#C4007F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#a60064] hover:scale-110 transition transform shadow-lg hover:shadow-2xl"
            >
              Order Now 🛒
            </Link>
            <Link
              to="/menu"
              className="border-3 border-[#F3B404] text-[#F3B404] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F3B404] hover:text-[#1D1C1C] transition transform shadow-lg hover:shadow-2xl"
            >
              View Menu 📋
            </Link>
          </div>

          {/* Customer Avatars */}
          <div className="mt-16 flex justify-center items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4007F] to-[#F3B404] flex items-center justify-center text-xs font-bold border-2 border-[#1D1C1C]"
                >
                  😊
                </div>
              ))}
            </div>
            <span className="text-gray-300 ml-4">
              <span className="font-bold text-[#C4007F]">2k+</span> Happy
              Customers
            </span>
          </div>
        </div>
      </section>

      {/* Why Choose Haminan Section */}
      <section className="py-32 bg-[#2a2a2a] px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
            Why Choose <span className="text-[#C4007F]">Haminan?</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            Exceptional quality, taste, and service
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#1D1C1C] p-10 rounded-2xl border-2 border-[#C4007F] hover:border-[#F3B404] hover:transform hover:scale-105 transition group cursor-pointer">
              <div className="text-6xl mb-6 group-hover:scale-125 transition transform">
                🍕
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#C4007F] group-hover:text-[#F3B404] transition">
                Fresh Ingredients
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We use only the freshest, highest quality ingredients sourced
                locally for every dish.
              </p>
            </div>

            <div className="bg-[#1D1C1C] p-10 rounded-2xl border-2 border-[#F3B404] hover:border-[#C4007F] hover:transform hover:scale-105 transition group cursor-pointer">
              <div className="text-6xl mb-6 group-hover:scale-125 transition transform">
                ⚡
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#F3B404] group-hover:text-[#C4007F] transition">
                Fast Delivery
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Quick preparation and fast delivery right to your door, hot and
                fresh every time.
              </p>
            </div>

            <div className="bg-[#1D1C1C] p-10 rounded-2xl border-2 border-[#41C485] hover:border-[#C4007F] hover:transform hover:scale-105 transition group cursor-pointer">
              <div className="text-6xl mb-6 group-hover:scale-125 transition transform">
                😊
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#41C485] group-hover:text-[#F3B404] transition">
                Great Taste
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Authentic recipes prepared by experienced chefs for the ultimate
                flavor experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-32 bg-[#1D1C1C] px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            Our Most Popular <span className="text-[#C4007F]">Items</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-20">
            Customer favorites that keep them coming back
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Margherita Pizza */}
            <div className="group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-2xl h-64 bg-gradient-to-b from-[#C4007F] to-[#1D1C1C] flex items-center justify-center shadow-2xl group-hover:shadow-[0_0_40px_rgba(196,0,127,0.5)] transition">
                <img
                  src="https://via.placeholder.com/300x300?text=Margherita+Pizza"
                  alt="Margherita"
                  className="w-full h-full object-cover group-hover:scale-110 transition transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Margherita Pizza
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Classic fresh mozzarella, tomato sauce, and basil
              </p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-[#C4007F]">
                  €12.99
                </span>
                <span className="text-lg text-[#F3B404] font-bold">⭐ 5.0</span>
              </div>
            </div>

            {/* Special Kebab */}
            <div className="group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-2xl h-64 bg-gradient-to-b from-[#F3B404] to-[#1D1C1C] flex items-center justify-center shadow-2xl group-hover:shadow-[0_0_40px_rgba(243,180,4,0.5)] transition">
                <img
                  src="https://via.placeholder.com/300x300?text=Special+Kebab"
                  alt="Kebab"
                  className="w-full h-full object-cover group-hover:scale-110 transition transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Special Kebab
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Grilled meat with fresh vegetables and sauce
              </p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-[#C4007F]">
                  €14.99
                </span>
                <span className="text-lg text-[#F3B404] font-bold">⭐ 4.8</span>
              </div>
            </div>

            {/* Greek Salad */}
            <div className="group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-2xl h-64 bg-gradient-to-b from-[#41C485] to-[#1D1C1C] flex items-center justify-center shadow-2xl group-hover:shadow-[0_0_40px_rgba(65,196,133,0.5)] transition">
                <img
                  src="https://via.placeholder.com/300x300?text=Greek+Salad"
                  alt="Salad"
                  className="w-full h-full object-cover group-hover:scale-110 transition transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Greek Salad
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Fresh vegetables with feta cheese and olives
              </p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-[#C4007F]">
                  €11.99
                </span>
                <span className="text-lg text-[#F3B404] font-bold">⭐ 4.9</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-[#2a2a2a] px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-10 bg-[#1D1C1C] rounded-2xl border-l-4 border-[#C4007F] hover:transform hover:scale-110 transition">
              <h3 className="text-6xl md:text-7xl font-bold text-[#C4007F] mb-3">
                1000+
              </h3>
              <p className="text-gray-400 text-xl">Happy Customers</p>
            </div>
            <div className="text-center p-10 bg-[#1D1C1C] rounded-2xl border-l-4 border-[#F3B404] hover:transform hover:scale-110 transition">
              <h3 className="text-6xl md:text-7xl font-bold text-[#F3B404] mb-3">
                50+
              </h3>
              <p className="text-gray-400 text-xl">Menu Items</p>
            </div>
            <div className="text-center p-10 bg-[#1D1C1C] rounded-2xl border-l-4 border-[#41C485] hover:transform hover:scale-110 transition">
              <h3 className="text-6xl md:text-7xl font-bold text-[#41C485] mb-3">
                30 min
              </h3>
              <p className="text-gray-400 text-xl">Average Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center px-4 bg-gradient-to-b from-[#1D1C1C] to-[#2a2a2a]">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Ready to Order?
          <br />
          <span className="text-[#F3B404]">Let's Go! 🍕</span>
        </h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Browse our complete menu and get your favorite food delivered to your
          door in minutes.
        </p>
        <Link
          to="/menu"
          className="bg-[#41C485] hover:bg-[#35a970] text-white px-12 py-4 rounded-full font-bold text-xl transition transform hover:scale-110 inline-block shadow-lg hover:shadow-2xl"
        >
          Browse Our Menu →
        </Link>
      </section>
    </div>
  );
}
