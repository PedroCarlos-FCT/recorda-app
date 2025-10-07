import { Link } from "react-router-dom";
import Recorda from "./Recorda";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col justify-center items-center md:items-start md:grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div >
            <div className="flex flex-col items-center w-fit gap-2">
              <Recorda titleSize="4xl" descriptionSize="xl" />
              <div className="flex flex-row space-x-2">
                <FaInstagram size={16} />
                <FaTiktok size={16} />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 text-white text-sm w-full justify-center items-center ">
              <p className="flex flex-row gap-2 items-center"><FaEnvelope size={20} /> recorda@gmail.com</p>
              <p className="flex flex-row gap-2 items-center"><FaWhatsapp size={20} /> +351 937 889 740</p>
          </div>

          {/* Quick Links */}
            <div className="flex flex-col space-y-2 w-full items-center md:items-end md:justify-end">
              <Link
                to="/"
                className="text-white hover:text-zinc-300 transition duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="text-white hover:text-zinc-300 transition duration-300 text-sm"
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-zinc-300 transition duration-300 text-sm"
              >
                About Us
              </Link>
              <Link
                to="/order"
                className="text-white hover:text-zinc-300 transition duration-300 text-sm"
              >
                Order
              </Link>
              <Link
                to="/contacts"
                className="text-white hover:text-zinc-300 transition duration-300 text-sm"
              >
                Contacts
              </Link>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Recorda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
