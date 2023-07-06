/** @type {import('next').NextConfig} */

const tSlash = (process.env.PROD === "true" ? true : false);

console.log(typeof tSlash, "tSlash");

const config = {

    basePath: "/GreenMetric",
    output: "export",
    trailingSlash: tSlash,
    
}

const nextConfig = config;

module.exports = nextConfig;
