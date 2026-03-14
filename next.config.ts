import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const ContentSecurityPolicy = `
      default-src 'self';
      base-uri 'self';
      object-src 'none';
      frame-ancestors 'none';
      img-src 'self' data: https:;
      font-src 'self' data:;
      style-src 'self' 'unsafe-inline';
      script-src 'self';
      connect-src 'self';
      form-action 'self';
      upgrade-insecure-requests;
    `
      .replace(/\s{2,}/g, " ")
      .trim();

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          { key: "Content-Security-Policy", value: ContentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
