
import { Link } from "@remix-run/react";
import { blogConfig } from "../config";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            {blogConfig.title}
          </Link>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
