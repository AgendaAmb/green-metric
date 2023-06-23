/** @type {import('next').NextConfig} */

const config = process.env.PROD === "true" ? {
basePath: "/GreenMetric",
output: "export"
} : {
    basePath: "/GreenMetric",
    output: "standalone",
    async redirects() {
        return [
            {
                source: '/',
                destination: '/GreenMetric',
                basePath: false,
                permanent: false
            }
        ]
    }
}

const nextConfig = config;

module.exports = nextConfig;
