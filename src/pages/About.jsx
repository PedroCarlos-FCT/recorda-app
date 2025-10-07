const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Recorda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about capturing life&apos;s beautiful moments and creating art that tells your unique story.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Artist Photo Placeholder */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-500">Artist Photo</span>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Recorda was born from a deep passion for both photography and traditional art forms.
                What started as a hobby has evolved into a professional journey of capturing life&apos;s
                most precious moments and creating hand-drawn pieces that resonate with emotion and beauty.
              </p>
              <p>
                With over 10 years of experience in visual arts, we specialize in portrait photography,
                landscape captures, and custom hand-drawn paintings. Each project is approached with
                creativity, attention to detail, and a commitment to exceeding expectations.
              </p>
              <p>
                Our mission is simple: to help you preserve your memories and express your creativity
                through art that speaks to the soul. Whether it&apos;s a family portrait, a wedding moment,
                or a custom painting, we pour our heart into every piece.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every photograph and painting undergoes rigorous review
                to ensure it meets our high standards and your expectations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion-Driven</h3>
              <p className="text-gray-600">
                Art is our passion, and it shows in every piece we create. We approach each project
                with enthusiasm and dedication to bring your vision to life.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Focused</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We work closely with you throughout the entire
                process to ensure the final result exceeds your expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Experience</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">200+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-indigo-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s create something beautiful together. Contact us today to discuss your project
              and bring your creative vision to life.
            </p>
            <a
              href="/contacts"
              className="bg-white hover:bg-gray-50 text-indigo-600 px-8 py-3 rounded-lg font-semibold transition duration-300 inline-block"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
