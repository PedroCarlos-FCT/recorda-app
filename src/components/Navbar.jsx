import { useState } from 'react';
import { Link } from 'react-router-dom';
import recordaImage from '../assets/images/RECORDA_no_bg.png';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="bg-[#DADADA] shadow-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className='h-20' onClick={closeMenu}>
            <img src={recordaImage} alt="Recorda" className='w-full h-full' />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-900 hover:text-zinc-500 px-3 py-2 rounded-md text-sm font-medium ease-in-out transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-900 hover:text-zinc-500 px-3 py-2 rounded-md text-sm font-medium ease-in-out transition duration-300"
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-zinc-500 px-3 py-2 rounded-md text-sm font-medium ease-in-out transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/order"
                className="text-gray-900 hover:text-zinc-500 px-3 py-2 rounded-md text-sm font-medium ease-in-out transition duration-300"
              >
                Order
              </Link>
              <Link
                to="/contacts"
                className="text-gray-900 hover:text-zinc-500 px-3 py-2 rounded-md text-sm font-medium ease-in-out transition duration-300"
              >
                Contacts
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="transition duration-300 ease-in-out inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-zinc-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="close"
                  initial={{ rotate: -180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden absolute w-full shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zinc-100 border-t flex flex-col gap-2 justify-center items-center" >
              <Link
                to="/"
                className="text-gray-900 hover:text-zinc-500 block px-3 py-2 rounded-md text-base font-medium ease-in-out transition duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-900 hover:text-zinc-500 block px-3 py-2 rounded-md text-base font-medium ease-in-out transition duration-300"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-zinc-500 block px-3 py-2 rounded-md text-base font-medium ease-in-out transition duration-300"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                to="/order"
                className="text-gray-900 hover:text-zinc-500 block px-3 py-2 rounded-md text-base font-medium ease-in-out transition duration-300"
                onClick={closeMenu}
              >
                Order
              </Link>
              <Link
                to="/contacts"
                className="text-gray-900 hover:text-zinc-500 block px-3 py-2 rounded-md text-base font-medium ease-in-out transition duration-300"
                onClick={closeMenu}
              >
                Contacts
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
