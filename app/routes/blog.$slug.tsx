import { json, type MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import fs from "fs";
import path from "path";
import fm from "front-matter";
import { marked } from "marked";
import { blogConfig } from "../config";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const filepath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { attributes, body } = fm(fileContent) as {
    attributes: { title: string; date: string; tags: string[] };
    body: string;
  };
  const html = marked(body);

  const wordsPerMinute = 200; // Average reading speed
  const wordCount = body.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return json({ attributes, html, readingTime });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.attributes.title} - ${blogConfig.title}` },
    { name: "description", content: data?.attributes.title },
  ];
};

export default function Post() {
  const { attributes, html, readingTime } = useLoaderData<typeof loader>();

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold mb-6 transition-colors"
        >
          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          {attributes.title}
        </h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-6 space-x-4">
          <span>
            Published on {new Date(attributes.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <span>&bull;</span>
          <span>{readingTime} min read</span>
        </div>

        {attributes.tags && attributes.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {attributes.tags.map(tag => (
              <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}
