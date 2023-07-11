/** @type {import('next').NextConfig} */

const tSlash = (process.env.PROD === "true" ? true : false);

const config = {
    basePath: '/page',
    trailingSlash: tSlash,
}

const nextConfig = config;

    module.exports = nextConfig;
