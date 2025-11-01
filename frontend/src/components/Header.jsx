// src/components/Header.jsx - UPDATED with Language Support
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthStore, useCartStore, useLanguageStore } from "../store/store";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const { user, logout, isLoggedIn, isAdmin } = useAuthStore();
  const { language, setLanguage } = useLanguageStore();
  const cartItems = useCartStore((state) => state.items);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fi", name: "Suomi", flag: "🇫🇮" },
    { code: "sv", name: "Svenska", flag: "🇸🇪" },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#1D1C1C] border-b-2 border-[#C4007F] z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="text-lg font-bold text-[#C4007F]">
            Haminan Marmaris
          </span>
          <span className="text-xs font-semibold text-[#F3B404] tracking-wider">
            KEBAB PIZZERIA
          </span>
        </Link>

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
          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-[#C4007F] text-white hover:bg-[#C4007F] transition"
            >
              <span className="text-lg">
                {languages.find((l) => l.code === language)?.flag}
              </span>
              <span className="text-sm">{language.toUpperCase()}</span>
            </button>
            {showLanguages && (
              <div className="absolute top-full mt-2 right-0 bg-[#2a2a2a] rounded-lg shadow-lg py-2 w-40 border border-[#C4007F]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLanguages(false);
                    }}
                    className={`w-full text-left px-4 py-2 flex items-center gap-2 transition ${
                      language === lang.code
                        ? "bg-[#C4007F] text-white"
                        : "text-white hover:bg-[#C4007F]"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/menu" className="relative">
            <span className="text-2xl cursor-pointer hover:scale-110 transition">
              🛒
            </span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C4007F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

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

          {/* Mobile Menu */}
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
          <Link to="/" className="block text-white hover:text-[#C4007F] py-2">
            {language === "en" ? "Home" : language === "fi" ? "Koti" : "Hem"}
          </Link>
          <Link
            to="/menu"
            className="block text-white hover:text-[#C4007F] py-2"
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
  );
}
