export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] border-t border-[#C4007F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-[#C4007F] mb-4">
              Haminan Marmaris
            </h3>
            <p className="text-gray-400">
              Authentic Mediterranean cuisine with fresh ingredients. Fast
              delivery to your doorstep.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-[#C4007F] mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              📍 Riekontie 23 25, 49410 Hamina
            </p>
            <p className="text-gray-400 mb-2">📞 +358 5 3535110</p>
            <p className="text-gray-400">🕐 11:00 - 22:00</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold text-[#C4007F] mb-4">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-[#F3B404] transition">
                f
              </a>
              <a href="#" className="hover:text-[#F3B404] transition">
                📷
              </a>
              <a href="#" className="hover:text-[#F3B404] transition">
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#C4007F] pt-8 text-center text-gray-400">
          <p>&copy; 2025 Haminan Marmaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
