import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import fs from "fs";
import path from "path";
import fm from "front-matter";

export const loader = async () => {
  const postsPath = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsPath);

  const posts = files.map(filename => {
    const slug = filename.replace(".md", "");
    const filepath = path.join(postsPath, filename);
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { attributes, body } = fm(fileContent);
    const excerpt = body.split('\n').slice(0, 2).join(' ') + '...';
    return { slug, attributes, excerpt };
  });

  return json(posts);
};

export default function BlogIndex() {
  const posts = useLoaderData<typeof loader>();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {post.attributes.title}
                </Link>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{post.attributes.date}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline dark:text-blue-400">
                Read More &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
