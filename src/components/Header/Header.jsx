import { FaBars, FaSearch, FaHeart, FaGift, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-3 px-6 flex items-center justify-between w-full">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <span className="text-orange-600 text-2xl font-bold">Etsy</span>
        <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
          <FaBars /> Categories
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative flex-1 mx-6">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full border rounded-full py-2 px-4 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
        />
        <FaSearch className="absolute right-3 top-3 text-orange-500" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <button className="text-gray-700 hover:text-gray-900">Sign in</button>
        <span className="text-xl">🌍</span>
        <FaHeart className="text-xl text-gray-700 hover:text-gray-900" />
        <FaGift className="text-xl text-gray-700 hover:text-gray-900" />
        <FaShoppingCart className="text-xl text-gray-700 hover:text-gray-900" />
        <FaUser className="text-xl text-orange-400 hover:text-orange-600" />
      </div>
    </nav>
  );
}