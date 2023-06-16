/** @type {import('next').NextConfig} */
const nextConfig = {
    swxMinify: true,
    async rewrites() {
        return [
            {
                source: "/",
                destination: "/html/index.html",
            },
        ];
    },
};

module.exports = nextConfig;
