import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartStore } from "../store/store";

export default function Home() {
  const cartItems = useCartStore((state) => state.items);
  const [showPhone, setShowPhone] = useState(false);

  const handleCallClick = () => {
    // Copy phone to clipboard
    const phone = "+358 5 3535110";
    navigator.clipboard.writeText(phone);
    setShowPhone(true);
    setTimeout(() => setShowPhone(false), 2000);
  };

  return (
    <div className="bg-[#1D1C1C] text-white overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute w-20 h-20 bg-[rgba(196,0,127,0.3)] rounded-full top-[15%] left-[5%] animate-pulse opacity-60"></div>
        <div
          className="absolute w-16 h-16 bg-[rgba(65,196,133,0.3)] rounded-full top-[60%] left-[8%] animate-bounce opacity-60"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-24 h-24 bg-[rgba(243,180,4,0.3)] rounded-full top-[25%] right-[5%] animate-pulse opacity-60"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-16 h-16 bg-[rgba(65,196,133,0.3)] rounded-full top-[70%] right-[10%] animate-bounce opacity-60"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50 pointer-events-auto">
        {/* Call Button - FIXED */}
        <button
          onClick={handleCallClick}
          className="w-14 h-14 rounded-full bg-[#41C485] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-2xl relative group"
          title="Call us"
        >
          📞
          {showPhone && (
            <div className="absolute right-full mr-3 bg-[#C4007F] text-white px-3 py-2 rounded text-xs font-bold whitespace-nowrap">
              Copied! ✓
            </div>
          )}
          <div className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-2 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            +358 5 3535110
          </div>
        </button>

        {/* Cart Button */}
        <Link
          to="/menu"
          className="relative w-14 h-14 rounded-full bg-[#41C485] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-2xl"
        >
          🛒
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#C4007F] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 min-h-screen flex items-center relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fadeInUp">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Order Fresh &amp; Delicious
                <br />
                <span className="bg-gradient-to-r from-[#C4007F] to-[#F3B404] bg-clip-text text-transparent">
                  Pizza &amp; Kebab
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                Experience authentic Mediterranean cuisine delivered fast to
                your doorstep. Fresh ingredients, amazing taste, every single
                time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/menu"
                  className="px-8 py-4 bg-[#C4007F] text-white rounded-xl font-bold text-lg hover:bg-[#9e0066] hover:-translate-y-1 transition-all shadow-lg hover:shadow-2xl"
                >
                  Order Now 🛒
                </Link>
                <Link
                  to="/menu"
                  className="px-8 py-4 border-2 border-[#F3B404] text-[#F3B404] rounded-xl font-bold text-lg hover:bg-[#F3B404] hover:text-[#1D1C1C] hover:-translate-y-1 transition-all shadow-lg"
                >
                  View Menu 📋
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#C4007F] border-3 border-[#1D1C1C] flex items-center justify-center text-white font-bold">
                    😊
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#F3B404] border-3 border-[#1D1C1C] flex items-center justify-center text-white font-bold">
                    😊
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#41C485] border-3 border-[#1D1C1C] flex items-center justify-center text-white font-bold">
                    😊
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#C4007F] border-3 border-[#1D1C1C] flex items-center justify-center text-white font-bold">
                    😊
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold">
                    <span className="text-[#C4007F]">2k+</span> Happy Customers
                  </div>
                </div>
              </div>
            </div>

            {/* Right Emoji */}
            <div className="relative hidden lg:block animate-fadeInRight">
              <div className="absolute w-60 h-60 rounded-full bg-gradient-radial from-[rgba(196,0,127,0.2)] to-transparent animate-pulse"></div>
              <img
                src="https://i.postimg.cc/3N6Fff2p/523096897-122125793054853965-6184228437903459841-n.jpg"
                alt="Pizza"
                className="w-96 h-96 object-cover relative z-10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-8 bg-[rgba(255,255,255,0.02)]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-4">
            Why Choose <span className="text-[#C4007F]">Haminan?</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            Exceptional quality, taste, and service
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🍕",
                title: "Fresh Ingredients",
                desc: "We use only the freshest, highest quality ingredients sourced locally for every dish.",
              },
              {
                emoji: "⚡",
                title: "Fast Delivery",
                desc: "Quick preparation and fast delivery right to your door, hot and fresh every time.",
              },
              {
                emoji: "😊",
                title: "Great Taste",
                desc: "Authentic recipes prepared by experienced chefs for the ultimate flavor experience.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1D1C1C] p-8 rounded-2xl border-2 border-[#C4007F] hover:border-[#F3B404] hover:scale-105 transition-all group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">
                  {item.emoji}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#C4007F] group-hover:text-[#F3B404] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 text-center bg-gradient-to-b from-[#1D1C1C] to-[#2a2a2a]">
        <h2 className="text-5xl font-bold mb-4">
          Ready to Order?
          <br />
          <span className="text-[#F3B404]">Let's Go! 🍕</span>
        </h2>
        <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Browse our complete menu and get your favorite food delivered to your
          door in minutes.
        </p>
        <Link
          to="/menu"
          className="px-12 py-4 bg-[#41C485] hover:bg-[#35a970] text-white rounded-full font-bold text-lg transition-all transform hover:scale-110 hover:shadow-2xl inline-block"
        >
          Browse Our Menu →
        </Link>
      </section>

      {/* ONE Footer Only */}
      <footer className="bg-[#1D1C1C] py-16 px-8 border-t-2 border-[#C4007F] relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#C4007F] mb-4">
                Haminan Marmaris
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Authentic Mediterranean cuisine with fresh ingredients. Fast
                delivery to your doorstep.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F3B404] mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📍 Riekontie 23 25, 49410 Hamina</p>
                <p>📞 +358 5 3535110</p>
                <p>🕐 11:00 - 22:00</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F3B404] mb-4">Menu</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/menu"
                    className="text-gray-400 hover:text-[#F3B404] transition"
                  >
                    Pizza
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    className="text-gray-400 hover:text-[#F3B404] transition"
                  >
                    Kebab
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    className="text-gray-400 hover:text-[#F3B404] transition"
                  >
                    Salads
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F3B404] mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#41C485] transition text-lg"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#41C485] transition text-lg"
                >
                  📷
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#41C485] transition text-lg"
                >
                  𝕏
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-10 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Haminan Marmaris. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease forwards;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, rgba(196, 0, 127, 0.2) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
}
