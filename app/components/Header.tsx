
import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          My Blog
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
