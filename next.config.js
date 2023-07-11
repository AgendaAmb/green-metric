/** @type {import('next').NextConfig} */

const tSlash = (process.env.PROD === "true" ? true : false);

const config = {
    //trailingSlash: tSlash,
    basePath: "/GreenMetricTest",
    async rewrites() {
        return [
          {
            source: '/',
            destination: '/GreenMetricTest/informacion',
          },
        ]
}

const nextConfig = config;

module.exports = nextConfig;
