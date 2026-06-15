import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import NavListItem from "./Nav/NavListItem";

type NavProps = {
  category?: { id: string; name: string };
  title?: string;
};

export const Nav = ({ category, title }: NavProps) => {
  return (
    <nav className="p-3">
      <div className="white-land h-12 rounded-full">
        <div className="flex h-full p-3">
          <ul className="flex text-sm">
            <NavListItem href="/" key="home" isFirst={true}>
              <FontAwesomeIcon icon={faHouse} />
            </NavListItem>
            <NavListItem href={title ? "/posts/" : ""} key="posts">
              記事一覧
            </NavListItem>
            {title && <NavListItem key="title">{title}</NavListItem>}
          </ul>
        </div>
      </div>
    </nav>
  );
};
