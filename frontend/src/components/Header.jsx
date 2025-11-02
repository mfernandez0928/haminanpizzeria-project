import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthStore, useCartStore, useLanguageStore } from "../store/store";
import CartModal from "./CartModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { user, logout, isLoggedIn, isAdmin } = useAuthStore();
  const { language, setLanguage } = useLanguageStore();
  const cartItems = useCartStore((state) => state.items);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fi", name: "Suomi", flag: "🇫🇮" },
    { code: "sv", name: "Svenska", flag: "🇸🇪" },
  ];

  return (
    <>
      {/* Cart Modal */}
      {showCart && <CartModal onClose={() => setShowCart(false)} />}

      <header className="fixed top-0 w-full bg-[#1D1C1C] border-b-2 border-[#C4007F] z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <button
            type="button"
            onClick={handleHomeClick}
            className="flex flex-col hover:opacity-80 transition"
          >
            <span className="text-lg font-bold text-[#C4007F]">
              <span className="text-3xl">🍕</span>
              Haminan Marmaris
            </span>
            <span className="text-xs font-semibold text-[#F3B404] tracking-wider">
              KEBAB PIZZERIA
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              to="/"
              className="text-white hover:text-[#C4007F] transition-colors"
            >
              {language === "en" ? "Home" : language === "fi" ? "Koti" : "Hem"}
            </Link>
            <Link
              to="/menu"
              className="text-white hover:text-[#C4007F] transition-colors"
            >
              {language === "en"
                ? "Menu"
                : language === "fi"
                ? "Valikko"
                : "Meny"}
            </Link>
            {isLoggedIn() && (
              <Link
                to="/orders"
                className="text-white hover:text-[#C4007F] transition-colors"
              >
                {language === "en"
                  ? "Orders"
                  : language === "fi"
                  ? "Tilaukset"
                  : "Beställningar"}
              </Link>
            )}
            {isAdmin() && (
              <Link
                to="/admin"
                className="text-white hover:text-[#C4007F] transition-colors"
              >
                Admin
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="hidden sm:block relative group">
              <button
                type="button"
                className="px-3 py-2 bg-[#2a2a2a] rounded-lg hover:bg-[#C4007F] transition flex items-center gap-2 text-sm"
              >
                🌐 {language.toUpperCase()}
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-[#2a2a2a] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLanguages(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-[#C4007F] transition ${
                      language === lang.code ? "bg-[#C4007F]" : ""
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Language Selector */}
            <div className="sm:hidden relative">
              <button
                type="button"
                onClick={() => setShowLanguages(!showLanguages)}
                className="px-2 py-1 bg-[#2a2a2a] rounded text-xs hover:bg-[#C4007F] transition"
              >
                🌐
              </button>
              {showLanguages && (
                <div className="absolute right-0 mt-2 w-28 bg-[#2a2a2a] rounded-lg shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguages(false);
                      }}
                      className={`block w-full text-left px-3 py-2 text-xs hover:bg-[#C4007F] transition ${
                        language === lang.code ? "bg-[#C4007F]" : ""
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button onClick={() => setShowCart(!showCart)} className="relative">
              <span className="text-2xl cursor-pointer hover:scale-110 transition">
                🛒
              </span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C4007F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Auth */}
            {isLoggedIn() ? (
              <div className="relative group">
                <button className="text-white hover:text-[#C4007F] transition">
                  👤 {user?.fullName?.split(" ")[0]}
                </button>
                <div className="hidden group-hover:block absolute right-0 bg-[#2a2a2a] rounded-lg shadow-lg py-2 w-32">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-white hover:bg-[#C4007F] transition"
                  >
                    {language === "en"
                      ? "Logout"
                      : language === "fi"
                      ? "Kirjaudu ulos"
                      : "Logga ut"}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-[#C4007F] transition"
                >
                  {language === "en"
                    ? "Sign In"
                    : language === "fi"
                    ? "Kirjaudu sisään"
                    : "Logga in"}
                </Link>
                <Link
                  to="/register"
                  className="bg-[#41C485] text-white px-4 py-2 rounded-full hover:bg-[#35a970] transition"
                >
                  {language === "en"
                    ? "Sign Up"
                    : language === "fi"
                    ? "Rekisteröidy"
                    : "Registrera"}
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden bg-[#2a2a2a] py-4 px-4 space-y-2">
            <Link
              to="/"
              className="block text-white hover:text-[#C4007F] py-2"
              onClick={() => setIsOpen(false)}
            >
              {language === "en" ? "Home" : language === "fi" ? "Koti" : "Hem"}
            </Link>
            <Link
              to="/menu"
              className="block text-white hover:text-[#C4007F] py-2"
              onClick={() => setIsOpen(false)}
            >
              {language === "en"
                ? "Menu"
                : language === "fi"
                ? "Valikko"
                : "Meny"}
            </Link>
            {isLoggedIn() && (
              <Link
                to="/orders"
                className="block text-white hover:text-[#C4007F] py-2"
                onClick={() => setIsOpen(false)}
              >
                {language === "en"
                  ? "Orders"
                  : language === "fi"
                  ? "Tilaukset"
                  : "Beställningar"}
              </Link>
            )}
          </nav>
        )}
      </header>
    </>
  );
}
