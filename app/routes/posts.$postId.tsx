import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = ({ params }) => {
  return [
    { title: `My Blog - Post ${params.postId}` },
    { name: "description", content: `Content for blog post ${params.postId}` },
  ];
};

export default function PostDetail() {
  const { postId } = useParams();

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog Post {postId} Title</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Published on July 6, 2025</p>
        <div className="prose dark:prose-invert max-w-none">
          <p>This is the content for blog post {postId}. It's a placeholder to demonstrate the layout of a single blog post.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2>Section Title</h2>
          <p>Here's another paragraph of content. This section could contain more detailed information, code snippets, or images.</p>
          <p><code>console.log("Hello, world!");</code></p>
          <h3>Sub-section</h3>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <p>Thank you for reading!</p>
        </div>
      </article>
    </main>
  );
}
