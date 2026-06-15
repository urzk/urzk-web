import { createClient } from "microcms-js-sdk";

export const cmsClient = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? "", // {serviceDomain}.microcms.io
  apiKey: process.env.API_KEY ?? "",
});
