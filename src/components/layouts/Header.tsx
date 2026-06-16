import Link from "next/link";

const Header = () => {
  return (
    <header className="pb-3">
      <div className="white-land h-16">
        <div className="mx-auto flex h-full max-w-[1048px] px-6 py-2">
          <ul className="flex">
            <li className="header-nav-list-item-border px-0.5">
              <Link href="/">
                <div className="flex h-full px-3 rounded-md hover:bg-slate-50 transition [&>*]:my-auto">
                  <span className="text-slate-800">HOME</span>
                </div>
              </Link>
            </li>
            <li className="header-nav-list-item-border px-0.5">
              <Link href="/posts">
                <div className="flex h-full px-3 rounded-md hover:bg-slate-50 transition [&>*]:my-auto">
                  <span className="text-slate-800">POSTS</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
