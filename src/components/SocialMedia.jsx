import {Link} from 'react-router-dom'
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import {BiLogoTelegram} from "react-icons/bi";
import {FaSquareXTwitter} from "react-icons/fa6";
import {RiInstagramFill} from "react-icons/ri";

export const SocialMediaProfiles = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@Imckremstashkent",
    icon: BsYoutube,
  },
  { title: "Telegram", href: "https://t.me/imckremsuz", icon: BiLogoTelegram },
  {
    title: "Facebook",
    href: "https://www.facebook.com/imckremsuz/",
    icon: BsFacebook,
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/company/84320156",
    icon: BsLinkedin,
  },
  {
    title: "Twitter",
    href: "https://x.com/imckremsuz",
    icon: FaSquareXTwitter,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/imckrems.tashkent/",
    icon: RiInstagramFill,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-gray-900",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            to={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-gray-200" : "hover:text-gray-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
