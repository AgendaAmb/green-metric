/** @type {import('next').NextConfig} */

const tSlash = (process.env.PROD === "true" ? true : false);

const config = {
    //trailingSlash: tSlash,
    basePath: "/GreenMetricTest",
}

const nextConfig = config;

module.exports = nextConfig;
