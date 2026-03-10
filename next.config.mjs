/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        globalNotFound:true
    },
    images:{
        domains: ['cdn.dummyjson.com']
    }
};

export default nextConfig;
