import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "My Blog - About" },
    { name: "description", content: "Learn more about My Blog." },
  ];
};

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Us</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Welcome to My Blog! This is a placeholder page for the About section.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          We aim to provide high-quality content on various tech topics.
        </p>
      </div>
    </main>
  );
}
