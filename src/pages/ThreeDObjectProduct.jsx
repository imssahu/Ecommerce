import { useState } from "react";
import ThreeDObject from "../components/ThreeDObject"; // STL Model Viewer Component
import Header from "../components/Header/Header";

export default function ThreeDObjectProduct() {
  const [quantity] = useState(1);

  return (
    <>
    <Header/>
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-8 lg:px-8">
        
        {/* UPPER SECTION - PRODUCT & 3D VIEWER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: 3D Viewer */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md p-4">
            <ThreeDObject modelPath="/models/deer.stl" />
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Custom 3D Printed Product
              </h1>
              <p className="text-lg text-gray-700 mt-2">
                Personalize your design with different sizes, colors, and materials.
              </p>
              <p className="text-2xl font-semibold text-green-600 mt-4">
                ₹ 705+ <span className="text-gray-500 line-through ml-2">₹ 2,014</span>
                <span className="bg-green-200 text-green-800 text-sm font-medium ml-2 px-2 py-1 rounded-md">65% off</span>
              </p>
              <p className="text-sm text-red-600 mt-2 font-medium">
                In demand. 3 people bought this in the last 24 hours.
              </p>
            </div>

            {/* Options */}
            <div className="mt-6">
              <label className="block text-base font-semibold text-gray-700">SIZE*</label>
              <select className="mt-2 w-full border border-gray-300 rounded-md p-3 shadow-sm">
                <option>Select an option</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>

              <label className="block mt-6 text-base font-semibold text-gray-700">COLOR*</label>
              <select className="mt-2 w-full border border-gray-300 rounded-md p-3 shadow-sm">
                <option>Select an option</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Black</option>
              </select>

              <label className="block mt-6 text-base font-semibold text-gray-700">Quantity</label>
              <input type="number" value={quantity} className="mt-2 w-full border border-gray-300 rounded-md p-3 shadow-sm" />
            </div>

            <button className="mt-8 w-full bg-black text-white py-3 rounded-md text-lg font-medium hover:bg-gray-900 transition">
              Add to Cart
            </button>
            <div className="mt-4 flex items-center text-gray-700 text-sm">
              <span className="font-semibold text-gray-900">⭐ Star Seller.</span> Consistently earned 5-star reviews & dispatched on time.
            </div>
          </div>
        </div>

        {/* LOWER SECTION - REVIEWS, POLICIES */}
        <div className="mt-12 border-t border-gray-300 pt-8">
          
          {/* Reviews Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">4,891 reviews ⭐⭐⭐⭐⭐</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-gray-200 rounded-md font-medium">Reviews for this item (55)</button>
              <button className="px-4 py-2 bg-gray-100 rounded-md font-medium">Reviews for this shop (4,892)</button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="mt-6 space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="border-b pb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">⭐⭐⭐⭐⭐</span>
                  <span className="text-gray-700">Lois Trusler</span>
                  <span className="text-gray-500 text-sm">17 Feb, 2025</span>
                </div>
                <p className="text-gray-800 mt-2">
                  Really cozy sweatshirt, great printing and true to size. Highly recommend!
                </p>
                <div className="mt-2 flex space-x-4 text-gray-600 text-sm">
                  <span>Item quality ⭐⭐⭐⭐⭐</span>
                  <span>Delivery ⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery & Policies */}
          <div className="mt-10 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-bold">Delivery and return policies</h3>
            <p className="mt-2">📦 Dispatches within <b>1-2 business days</b></p>
            <p className="mt-1">🔄 <span className="underline">Returns & exchanges not accepted</span></p>
            <p className="mt-1">🚚 Delivery cost: <b>₹ 3,290</b></p>
            <p className="mt-1">📍 Dispatched from: <b>United States</b></p>
          </div>

          {/* Etsy Protection */}
          <div className="mt-10 bg-white p-6 border rounded-lg">
            <h3 className="text-lg font-bold">Did you know?</h3>
            <p className="mt-2 text-gray-700">
              🛡️ <b>Etsy Purchase Protection</b> ensures a full refund if something goes wrong with your order. 
              <a href="#" className="text-blue-600 underline"> See terms</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
