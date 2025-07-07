import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "My Blog - Contact" },
    { name: "description", content: "Contact My Blog." },
  ];
};

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This is a placeholder page for the Contact section.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          You can reach us at contact@example.com.
        </p>
      </div>
    </main>
  );
}
