/** @type {import('next').NextConfig} */

const tSlash = (process.env.PROD === "true" ? true : false);

const config = {
    
    basePath: "/m/GreenMetricTest", //Comentar para produccion
    trailingSlash: tSlash,
    distDir: 'build',
}

const nextConfig = config;

module.exports = nextConfig;
