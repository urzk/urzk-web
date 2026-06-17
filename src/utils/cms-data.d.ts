import { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type CMSCategoryData = MicroCMSListContent & {
  name: string;
};

export type CMSBlogData = MicroCMSListContent & {
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category?: CMSCategoryData;
};
