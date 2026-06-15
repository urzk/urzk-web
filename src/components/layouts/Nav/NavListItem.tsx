import { ReactNode } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type NavListItemProps = {
  children?: ReactNode;
  href?: string;
  isFirst?: boolean;
};

const NavListItem = ({ href, children, isFirst }: NavListItemProps) => {
  return (
    <li className="px-4 relative">
      {!isFirst && (
        <div className="absolute text-slate-300 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      )}
      <div className="flex h-full">
        {href ? (
          <Link href={href} className="my-auto text-cyan-700 underline">
            {children}
          </Link>
        ) : (
          <span className="my-auto font-semibold text-slate-800">
            {children}
          </span>
        )}
      </div>
    </li>
  );
};
export default NavListItem;
