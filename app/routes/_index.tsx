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
      <div className="text-center py-16 bg-gray-100 dark:bg-gray-900 rounded-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          {blogConfig.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          {blogConfig.description}
        </p>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Recent Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {post.attributes.title}
                  </Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {post.attributes.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline dark:text-blue-400 font-semibold"
                >
                  Read More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
