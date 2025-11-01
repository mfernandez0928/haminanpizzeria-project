import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#1D1C1C] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Order Fresh &amp; Delicious
            <br />
            <span className="text-[#C4007F]">Pizza & Kebab</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience authentic Mediterranean cuisine delivered fast to your
            doorstep. Fresh ingredients, amazing taste, every single time.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/menu"
              className="bg-[#C4007F] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#a60064] transition transform hover:scale-105"
            >
              Order Now
            </Link>
            <Link
              to="/menu"
              className="border-2 border-[#F3B404] text-[#F3B404] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#F3B404] hover:text-[#1D1C1C] transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-[#C4007F]">Haminan?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🍕</div>
              <h3 className="text-2xl font-bold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-400">
                We use only the freshest, highest quality ingredients in every
                dish.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-400">
                Quick preparation and delivery right to your door, hot and
                fresh.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">😊</div>
              <h3 className="text-2xl font-bold mb-2">Great Taste</h3>
              <p className="text-gray-400">
                Authentic recipes prepared by experienced chefs for ultimate
                flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Ready to Order? <span className="text-[#F3B404]">Let's Go!</span>
        </h2>
        <Link
          to="/menu"
          className="bg-[#41C485] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#35a970] transition inline-block"
        >
          Browse Our Menu
        </Link>
      </section>
    </div>
  );
}
