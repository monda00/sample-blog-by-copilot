
import { blogConfig } from "../config";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">{blogConfig.title}</p>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {blogConfig.author.name}. All
              rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <SocialLink platform="github" url={blogConfig.socials.github} />
            <SocialLink platform="twitter" url={blogConfig.socials.twitter} />
            <SocialLink
              platform="linkedin"
              url={blogConfig.socials.linkedin}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
