import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fs from "fs";
import path from "path";
import fm from "front-matter";
import { marked } from "marked";

export const loader = async ({ params }) => {
  const slug = params.slug;
  const filepath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { attributes, body } = fm(fileContent);
  const html = marked(body);
  return json({ attributes, html });
};

export default function Post() {
  const { attributes, html } = useLoaderData<typeof loader>();

  return (
    <main className="flex-grow bg-white dark:bg-gray-800 py-8">
      <article className="prose dark:prose-invert max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{attributes.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{attributes.date}</p>
        <div className="mt-4 flex space-x-2 mb-8">
          {attributes.tags.map(tag => (
            <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
