import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import NavListItem from "./NavListItem";

type NavProps = {
  place: "home" | "posts" | "post";
  category?: { id: string; name: string };
  title?: string;
};

const Nav = ({ place, category, title }: NavProps) => {
  return (
    <nav className="p-3">
      <div className="white-land h-12 rounded-full">
        <div className="flex h-full p-3">
          <ul className="flex text-sm">
            <NavListItem
              href={place === "home" ? "" : "/"}
              key="home"
              isFirst={true}
            >
              <FontAwesomeIcon icon={faHouse} />
            </NavListItem>
            {place !== "home" && (
              <NavListItem href={title ? "/posts/" : ""} key="posts">
                記事一覧
              </NavListItem>
            )}
            {place === "post" && <NavListItem key="title">{title}</NavListItem>}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
