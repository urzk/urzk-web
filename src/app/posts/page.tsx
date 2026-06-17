import Link from "next/link";
import type { Metadata } from "next";
import { format } from "date-fns";
import { cmsEndpoint } from "~/utils/cms-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faUpload,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

import { cmsClient } from "~/utils/cms-client";
import { CMSBlogData } from "~/utils/cms-data";
import Nav from "~/components/layouts/Nav";

export const metadata: Metadata = {
  title: "投稿一覧 | urzk-web",
};

const Aside = () => {
  return (
    <aside className="w-80 flex-shrink-0 p-3 max-lg:hidden">
      <div className="cell-wrapper sticky top-6">
        <div className="cell">
          <h2 className="text-xl font-semibold">検索</h2>
        </div>
      </div>
    </aside>
  );
};

const Post = ({ cmsBlog }: { cmsBlog: CMSBlogData }) => {
  const publishedAt = format(new Date(cmsBlog.publishedAt ?? 0), "yyyy/MM/dd");
  const updatedAt = format(new Date(cmsBlog.updatedAt ?? 0), "yyyy/MM/dd");

  return (
    <article className="cell prose prose-slate max-w-none">
      <Link href={`/posts/${cmsBlog.id}`}>
        <h2 className="mt-0 max-sm:mt-0">{cmsBlog.title}</h2>
      </Link>
      <div className="mb-2 text-sm text-slate-500 max-sm:mb-1 max-sm:text-xs">
        {cmsBlog.category && (
          <span>
            <FontAwesomeIcon icon={faTag} size="sm" />
            &ensp;
            <Link href="/" className="text-inherit">
              {cmsBlog.category.name}
            </Link>
            &ensp;&ensp;/&ensp;&ensp;
          </span>
        )}
        <span>
          <FontAwesomeIcon icon={faUpload} size="sm" />
          &ensp;
          <time dateTime={cmsBlog.publishedAt}>{publishedAt}</time>
        </span>
        &emsp;
        <span>
          <FontAwesomeIcon icon={faClockRotateLeft} size="sm" />
          &ensp;
          <time dateTime={cmsBlog.updatedAt}>{updatedAt}</time>
        </span>
      </div>
    </article>
  );
};

const Page = async () => {
  const cmsBlogList = await cmsClient.getList<CMSBlogData>({
    endpoint: cmsEndpoint,
  });

  return (
    <div>
      <Nav place="posts" />
      <div className="flex flex-col lg:flex-row">
        <Aside />
        <main className="grow p-3">
          <div className="cell-wrapper">
            {cmsBlogList.contents.map((blog) => (
              <Post key={blog.id} cmsBlog={blog} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default Page;
