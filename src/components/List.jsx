import FadeIn, { FadeInStagger} from "./FadeIn.jsx";
import clsx from "clsx";
import Border from "./Border.jsx";

const List = ({ className, children }) => {
    return (
        <FadeInStagger>
            <ul role="list" className={clsx("text-xl text-neutral-600", className)}>
                {children}
            </ul>
        </FadeInStagger>
    );
};

export const ListItem = ({ title, children }) => {
    return (
        <li className="group mt-10 first:mt-0">
            <FadeIn>
                <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
                    {title && (
                        <strong className="font-semibold text-orange-600">{`${title}. `}</strong>
                    )}
                    {children}
                </Border>
            </FadeIn>
        </li>
    );
};

export default List;
