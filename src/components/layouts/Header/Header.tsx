import HeaderNavListItem from "./HeaderNavListItem";

const Header = () => {
  return (
    <header className="pb-3">
      <div className="white-land h-16">
        <div className="mx-auto flex h-full max-w-[1048px] px-6 py-2">
          <ul className="flex">
            <HeaderNavListItem href="/">HOME</HeaderNavListItem>
            <HeaderNavListItem href="/posts/profile">PROFILE</HeaderNavListItem>
            <HeaderNavListItem href="/posts/works">WORKS</HeaderNavListItem>
            <HeaderNavListItem href="/posts">POSTS</HeaderNavListItem>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
