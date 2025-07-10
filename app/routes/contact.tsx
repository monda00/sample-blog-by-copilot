import type { MetaFunction } from "@remix-run/node";
import { blogConfig } from "../config";
import SocialLink from "../components/SocialLink";

export const meta: MetaFunction = () => {
  return [
    { title: `Contact - ${blogConfig.title}` },
    { name: "description", content: `Contact ${blogConfig.title}.` },
  ];
};

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center leading-relaxed">
          Have a question, a suggestion, or just want to say hello? Feel free to reach out!
        </p>

        <div className="space-y-6 mb-10">
          <div className="flex items-center justify-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18" />
            </svg>
            <a href={`mailto:${blogConfig.author.email}`} className="text-xl text-blue-600 dark:text-blue-400 hover:underline font-medium">
              {blogConfig.author.email}
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect with us on Social Media</h2>
          <div className="flex justify-center space-x-6">
            <SocialLink platform="github" url={blogConfig.socials.github} />
            <SocialLink platform="twitter" url={blogConfig.socials.twitter} />
            <SocialLink platform="linkedin" url={blogConfig.socials.linkedin} />
          </div>
        </div>
      </div>
    </main>
  );
}
