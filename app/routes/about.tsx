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
  const logoSrc = "/logo-dark.png";

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <img
            src={logoSrc}
            alt="Author"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500 dark:border-blue-400"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
            {blogConfig.author.name}
          </h1>
          <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
            {blogConfig.title}
          </p>
        </div>
        <div className="mt-12 text-lg text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
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
