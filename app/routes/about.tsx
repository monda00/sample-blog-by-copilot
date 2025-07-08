import { type MetaFunction } from "@remix-run/node";
import { blogConfig } from "../config";
import SocialLink from "../components/SocialLink";

export const meta: MetaFunction = () => {
  return [
    { title: `About - ${blogConfig.title}` },
    { name: "description", content: "About the author of the blog." },
  ];
};

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="text-center">
          <img
            src="/logo-dark.png"
            alt="Author"
            className="w-40 h-40 rounded-full mx-auto mb-4 bg-gray-200"
          />
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {blogConfig.author.name}
          </h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
            {blogConfig.title}
          </p>
        </div>
        <div className="mt-12 text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>{blogConfig.author.description}</p>
          <p>
            Feel free to connect with me on social media. I&apos;m always open to
            discussing new ideas and opportunities.
          </p>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <SocialLink platform="github" url={blogConfig.socials.github} />
          <SocialLink platform="twitter" url={blogConfig.socials.twitter} />
          <SocialLink platform="linkedin" url={blogConfig.socials.linkedin} />
        </div>
      </div>
    </main>
  );
}
