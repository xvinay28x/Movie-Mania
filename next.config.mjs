/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_KEY: process.env.API_KEY
    },
    images: {
        remotePatterns: [
            {
                hostname: "image.tmdb.org",
                port: "",
                protocol: "https",
            },
        ],
    },
};

export default nextConfig;
