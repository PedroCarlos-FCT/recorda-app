import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample portfolio data - you can replace with actual images and data
  const portfolioItems = [
    {
      id: 1,
      title: 'Sunset Portrait',
      category: 'photography',
      type: 'Portrait',
      description: 'Beautiful portrait session at golden hour',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Mountain Landscape',
      category: 'photography',
      type: 'Landscape',
      description: 'Majestic mountain vista captured at dawn',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Abstract Painting',
      category: 'painting',
      type: 'Abstract',
      description: 'Modern abstract piece with vibrant colors',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Wedding Ceremony',
      category: 'photography',
      type: 'Event',
      description: 'Intimate wedding moment captured perfectly',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'Nature Still Life',
      category: 'painting',
      type: 'Still Life',
      description: 'Detailed botanical painting with oil on canvas',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Family Portrait',
      category: 'photography',
      type: 'Portrait',
      description: 'Heartwarming family moment in natural light',
      image: '/api/placeholder/400/300'
    },
    {
      id: 7,
      title: 'Urban Sketch',
      category: 'painting',
      type: 'Urban',
      description: 'Cityscape sketch capturing the essence of urban life',
      image: '/api/placeholder/400/300'
    },
    {
      id: 8,
      title: 'Product Photography',
      category: 'photography',
      type: 'Commercial',
      description: 'Clean and professional product shots',
      image: '/api/placeholder/400/300'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'photography', label: 'Photography' },
    { id: 'painting', label: 'Paintings' }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of photography and hand-drawn paintings.
            Each piece tells a unique story and showcases our artistic vision.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-sm border p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-md font-medium transition duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 relative overflow-hidden">
                <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">{item.title}</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-center text-white p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* Item Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.category === 'photography'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {item.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Our Work?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;d love to discuss your project and create something beautiful together.
              Contact us to start your creative journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacts"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/order"
                className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                Place Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
