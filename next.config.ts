import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mount path on Webflow Cloud. Must match the mount path used at deploy time.
  basePath: "/quiz",
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
