/** @type {import('next').NextConfig} */

const tSlash = (process.env.PROD === "true" ? true : false);

const config = {

    basePath: "/GreenMetric",
    trailingSlash: tSlash,
    distDir: 'build',
}

const nextConfig = config;

module.exports = nextConfig;
