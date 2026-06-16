import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKaTeX from "rehype-katex";
import { format } from "date-fns";
import { cmsEndpoint } from "~/utils/cms-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faUpload,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  TwitterShareButton,
  FacebookShareButton,
  HatenaShareButton,
} from "react-share";

import { cmsClient } from "~/utils/cms-client";
import { CMSBlogData } from "~/utils/cms-data";
import { Nav } from "~/components/layouts/Nav/Nav";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;

  const blog = await cmsClient.getListDetail<{ title: string }>({
    endpoint: cmsEndpoint,
    contentId: id,
    queries: {
      fields: "title",
    },
  });

  return {
    title: `${blog.title} | urzk-web`,
  };
};

const ShareButtons = () => {
  return (
    <div>
      <TwitterShareButton url="a" className="mr-1 align-middle last:mr-0">
        <div className="rounded-lg bg-[#1d9bf0] px-2 py-1">
          <FontAwesomeIcon icon={faTwitter} className="text-white" />
        </div>
      </TwitterShareButton>
      <FacebookShareButton url="a" className="mr-1 align-middle last:mr-0">
        <div className="rounded-lg bg-[#1877f2] px-2 py-1">
          <FontAwesomeIcon icon={faFacebook} className="text-white" />
        </div>
      </FacebookShareButton>
      <HatenaShareButton url="a" className="mr-1 align-middle last:mr-0">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
            alt="このエントリーをはてなブックマークに追加"
            width="32"
            height="32"
          />
        </div>
      </HatenaShareButton>
    </div>
  );
};

const Aside = () => {
  return (
    <aside className="w-80 flex-shrink-0 p-3 max-lg:hidden">
      <div className="cell-wrapper sticky top-6">
        <div className="cell">
          <h2 className="text-xl font-semibold">検索</h2>
        </div>
        <div className="cell">
          <h2 className="text-xl font-semibold">目次</h2>
        </div>
      </div>
    </aside>
  );
};

const CellTop = ({ cmsBlog }: { cmsBlog: CMSBlogData }) => {
  const publishedAt = format(new Date(cmsBlog.publishedAt ?? 0), "yyyy/MM/dd");
  const updatedAt = format(new Date(cmsBlog.updatedAt ?? 0), "yyyy/MM/dd");

  return (
    <section className="cell prose prose-slate max-w-none max-sm:prose-sm">
      <h1 className="mb-6 max-sm:mb-4 sm:mt-3">{cmsBlog.title}</h1>
      <div className="mb-2 text-sm text-slate-500 max-sm:mb-1 max-sm:text-xs">
        {cmsBlog.category && (
          <span>
            <FontAwesomeIcon icon={faTag} />
            &ensp;
            <Link href="/" className="text-inherit">
              {cmsBlog.category.name}
            </Link>
          </span>
        )}
      </div>
      <div className="text-sm text-slate-500 max-sm:text-xs">
        <span>
          <FontAwesomeIcon icon={faUpload} />
          &ensp;
          <time dateTime={cmsBlog.publishedAt}>{publishedAt}</time>
        </span>
        &emsp;
        <span>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          &ensp;
          <time dateTime={cmsBlog.updatedAt}>{updatedAt}</time>
        </span>
      </div>
    </section>
  );
};

const Page = async ({ params }: Props) => {
  const { id } = await params;

  const cmsBlog = await cmsClient.getListDetail<CMSBlogData>({
    endpoint: cmsEndpoint,
    contentId: id,
  });

  return (
    <div>
      <Nav place="post" category={cmsBlog.category} title={cmsBlog.title} />
      <div className="flex flex-col lg:flex-row">
        <Aside />
        <main className="grow p-3">
          <div className="cell-wrapper">
            <CellTop cmsBlog={cmsBlog} />
            <section className="cell prose prose-slate max-w-none max-sm:prose-sm">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKaTeX]}
              >
                {cmsBlog.content}
              </ReactMarkdown>
            </section>
            <div className="cell">{/* <ShareButtons /> */}</div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Page;

export async function generateStaticParams() {
  const blogIds = await cmsClient.getAllContentIds({
    endpoint: cmsEndpoint,
  });

  return blogIds.map((id) => ({
    id,
  }));
}
