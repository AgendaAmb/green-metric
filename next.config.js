/** @type {import('next').NextConfig} */

const tSlash = (process.env.PROD === "true" ? true : false);

const config = {
    
    basePath: "./", //Comentar para produccion
    trailingSlash: tSlash,
    distDir: 'build',
}

const nextConfig = config;

module.exports = nextConfig;
