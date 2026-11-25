import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* HELIOS is a single static marketing page; no special config needed.
     Images are served as plain files from public/assets (no optimizer),
     which keeps deploys portable to any Node host or static export. */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
