import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import fs from "fs";
import path from "path";
import fm from "front-matter";
import { blogConfig } from "../config";

export const loader = async () => {
  const postsPath = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsPath);

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const filepath = path.join(postsPath, filename);
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { attributes, body } = fm(fileContent) as {
      attributes: { title: string; date: string };
      body: string;
    };
    const excerpt = body.split("\n").slice(0, 2).join(" ") + "...";
    return { slug, attributes, excerpt };
  });

  return json(posts);
};

export const meta: MetaFunction = () => {
  return [
    { title: `${blogConfig.title} - Home` },
    { name: "description", content: blogConfig.description },
  ];
};

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 rounded-lg shadow-xl overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            {blogConfig.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up animation-delay-200">
            {blogConfig.description}
          </p>
          <Link
            to="/blog"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400"
          >
            Read Our Blog
          </Link>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="mt-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {post.attributes.title}
                  </Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Published on {new Date(post.attributes.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
