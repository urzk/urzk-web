import Link from "next/link";

const HeaderNavListItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="header-nav-list-item-border px-0.5">
      <Link href={href}>
        <div className="flex h-full px-3 rounded-md hover:bg-slate-50 transition [&>*]:my-auto">
          <span className="text-slate-800">{children}</span>
        </div>
      </Link>
    </li>
  );
};
export default HeaderNavListItem;
