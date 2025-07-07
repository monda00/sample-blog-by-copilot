
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}
