import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Capture Life&apos;s Beautiful
              <span className="text-indigo-600 block">Moments</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional photography and hand-drawn paintings that tell your unique story.
              From portraits to landscapes, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
              >
                View Portfolio
              </Link>
              <Link
                to="/order"
                className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of artistic services to meet all your creative needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photography Service */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Photography</h3>
              <p className="text-gray-600">
                Professional photo shoots for portraits, events, landscapes, and commercial projects.
                We capture the perfect moment with artistic vision.
              </p>
            </div>

            {/* Painting Service */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hand-Drawn Paintings</h3>
              <p className="text-gray-600">
                Custom paintings created with traditional techniques and modern artistic styles.
                Each piece is uniquely crafted to your specifications.
              </p>
            </div>

            {/* Custom Orders */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Orders</h3>
              <p className="text-gray-600">
                Personalized services tailored to your specific needs. From concept to completion,
                we work with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Take a glimpse at some of our recent projects and creative pieces.
          </p>

          {/* Placeholder for featured images - you can replace with actual images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Photography Sample 1</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Painting Sample 1</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Photography Sample 2</span>
            </div>
          </div>

          <Link
            to="/portfolio"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-block"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let&apos;s discuss your project and bring your vision to life.
          </p>
          <Link
            to="/contacts"
            className="bg-white hover:bg-gray-50 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
