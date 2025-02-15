import { useState } from 'react';
import ThreeDText from '../components/ThreeDText'; // Corrected import statement for the 3DText component

export default function TextProductPage() {
  const [text, setText] = useState('3D Text');
  const [numLayers, setNumLayers] = useState(2); // Default to 2 layers
  const [layerColors, setLayerColors] = useState(['#ff0000', '#00ff00']); // Default 2 layer colors
  const [reviews, setReviews] = useState([]); // Reviews state
  const [newReview, setNewReview] = useState(''); // New review input state
  const [rating, setRating] = useState(5); // Default to 5 stars for the review

  // Handle color input changes dynamically
  const handleColorChange = (index, value) => {
    const updatedColors = [...layerColors];
    updatedColors[index] = value;
    setLayerColors(updatedColors);
  };

  // Handle submitting a new review
  const handleSubmitReview = () => {
    if (newReview.trim() !== '') {
      setReviews([{ text: newReview, rating, id: Date.now() }, ...reviews]); // Add new review to the top
      setNewReview(''); // Clear the review input
      setRating(5); // Reset rating to 5 after submitting
    }
  };

  return (
    <div className="bg-white min-h-screen"> {/* Set minimum height to 100vh */}
      <div className="pt-6">

        {/* Content grid */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Left side: 3D Text */}
          <div className="aspect-w-3 aspect-h-4 sm:overflow-hidden sm:rounded-lg bg-gray-100"> {/* Set greyish background */}
            <ThreeDText text={text} layerColors={layerColors} numLayers={numLayers} />
          </div>

          {/* Right side: Product Controls */}
          <div className="mt-4 lg:mt-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Customize Your 3D Text
            </h1>

            <p className="text-3xl tracking-tight text-gray-900 mt-4">
              {numLayers == 2 ? '$59.99' : '$79.99'} {/* Conditional price tag */}
            </p>

            {/* Text Input */}
            <div className="mt-6">
              <label className="block text-base font-bold text-gray-700">Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here"
                className="mt-2 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4 placeholder-slate-600 text-gray-800 shadow-slate-400"
              />
            </div>

            {/* Number of Layers Input */}
            <div className="mt-6">
              <label className="block text-base font-bold text-gray-700">Number of Layers</label>
              <select
                value={numLayers}
                onChange={(e) => setNumLayers(parseInt(e.target.value, 10))}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4 text-gray-800 shadow-slate-400"
              >
                <option value={2}>2 Layers</option>
                <option value={3}>3 Layers</option>
              </select>
            </div>

            {/* Layer Colors */}
            <div className="mt-6">
              <label className="block text-base font-bold text-gray-700">Layer Colors</label>
              {Array.from({ length: numLayers }).map((_, i) => (
                <div key={i} className="mt-2 flex items-center">
                  <label className="mr-4 text-sm font-medium text-gray-700">Layer {i + 1}</label>
                  <input
                    type="color"
                    value={layerColors[i] || '#000000'}
                    onChange={(e) => handleColorChange(i, e.target.value)}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
              ))}
            </div>

            {/* Submit Button */}
                  <button
                    type="button"
                    className="mt-8 w-full bg-gradient-to-t from-[#fa8b23] to-[#fbed84] hover:to-red-500 py-3 px-8 text-base font-medium text-white"
                  >
                    Add to Cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 inline-block ml-2"
                  >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 5M17 13l1.4 5M9 21h6M9 21a2 2 0 11-4 0M15 21a2 2 0 104 0"
                    />
                  </svg>
                  
                  </button>
                  </div>
                </div>
        <div className="mt-12 px-6 py-8 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>

          {/* Review input */}
          <div className="mt-4">
            <input
              type="text"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write your review here..."
              className="w-full p-3 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4 placeholder-slate-400 text-gray-800 shadow-slate-600"
            ></input>
            <div className="mt-4 flex items-center">
              <label className="mr-4 text-sm font-medium text-gray-700">Rating</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => setRating(star)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={star <= rating ? "rgb(250,204,21)" : "none"}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="h-6 w-6 cursor-pointer"
                    viewBox="0 0 22 22"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 17.25l3.547 2.486-1.035-4.444L18.375 9h-4.534L12 4.5 9.16 9H4.625l3.863 6.292-1.036 4.444L12 17.25z"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <button
              onClick={handleSubmitReview}
              className="mt-4 py-3 px-8 text-base font-medium text-white rounded-md transition duration-500 ease-in-out bg-gradient-to-t from-[#fa8b23] to-[#fbed84] hover:to-red-500"
            >
              Submit Review
            </button>
          </div>

          {/* Displaying Reviews */}
          <div className="mt-6 space-y-6">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="rgb(250,204,21)"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="h-5 w-5"
                          viewBox="0 0 22 22"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 17.25l3.547 2.486-1.035-4.444L18.375 9h-4.534L12 4.5 9.16 9H4.625l3.863 6.292-1.036 4.444L12 17.25z"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">- Customer</p>
                  </div>
                  <p className="mt-2 text-lg text-gray-700">{review.text}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No reviews yet. Be the first to leave a review!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}