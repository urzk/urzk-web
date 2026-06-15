import { ReactNode } from "react";
import Link from "next/link";

type NavListItemProps = {
  href?: string;
  children?: ReactNode;
};

const NavListItem = ({ href, children }: NavListItemProps) => {
  return (
    <li className="nav-list-item-border px-4">
      <div className="flex h-full [&>*]:my-auto">
        {href ? (
          <Link href={href} className="text-cyan-700 underline">
            {children}
          </Link>
        ) : (
          <span className="font-semibold text-gray-800">{children}</span>
        )}
      </div>
    </li>
  );
};
export default NavListItem;
