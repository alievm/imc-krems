import {Link} from 'react-router-dom'
import clsx from "clsx";

const Button = ({ invert, href, className, children, ...props }) => {
  className = clsx(
      className,
      "inline-flex rounded-md px-4 py-3 text-sm font-semibold transition",
      invert
          ? "bg-white text-gray-900 hover:bg-gray-200"
          : "bg-gray-900 text-white hover:bg-gray-800"
  );

  let inner = <span>{children}</span>;
  if (href) {
    return (
        <Link href={href} className={className} {...props}>
          {inner}
        </Link>
    );
  }
  return (
      <button className={className} {...props}>
        {inner}
      </button>
  );
};

export default Button;

