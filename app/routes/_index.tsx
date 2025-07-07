import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "My Blog - Home" },
    { name: "description", content: "Welcome to My Blog!" },
  ];
};

const posts = [
  {
    id: 1,
    title: "Getting Started with Remix",
    date: "July 1, 2024",
    excerpt: "Learn the basics of Remix and how to build your first application.",
    link: "/posts/getting-started-with-remix",
  },
  {
    id: 2,
    title: "Tailwind CSS v4: What's New?",
    date: "June 25, 2024",
    excerpt: "A deep dive into the new features and improvements in Tailwind CSS v4.",
    link: "/posts/tailwind-css-v4-whats-new",
  },
  {
    id: 3,
    title: "Building Responsive UIs with Modern CSS",
    date: "June 18, 2024",
    excerpt: "Tips and tricks for creating responsive user interfaces that look great on all devices.",
    link: "/posts/building-responsive-uis",
  },
];

export default function Index() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                <a href={post.link} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <a href={post.link} className="text-blue-600 hover:underline dark:text-blue-400">
                Read More &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
