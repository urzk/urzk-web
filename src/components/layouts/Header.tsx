import Link from "next/link";

const Header = () => {
  return (
    <header className="pb-3">
      <div className="white-land h-16">
        <div className="mx-auto flex h-full max-w-[1048px] px-6 py-2">
          <ul className="flex">
            <li className="header-nav-list-item-border px-2">
              <Link href="/">
                <div className="flex h-full from-white via-slate-100 to-white px-2 hover:bg-gradient-to-b [&>*]:my-auto">
                  <span className="text-gray-800">HOME</span>
                </div>
              </Link>
            </li>
            <li className="header-nav-list-item-border px-4">
              <Link href="/posts">
                <div className="flex h-full [&>*]:my-auto">
                  <span className="text-gray-800">POSTS</span>
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
