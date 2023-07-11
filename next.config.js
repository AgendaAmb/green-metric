/** @type {import('next').NextConfig} */

const tSlash = (process.env.PROD === "true" ? true : false);

const config = {
    basePath: '/GreemMetricTest',
    trailingSlash: tSlash,
}

const nextConfig = config;

    module.exports = nextConfig;
