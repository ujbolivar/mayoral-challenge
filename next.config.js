/**
* @type {import('next').NextConfig}
*/

module.exports = {
    reactStrictMode: true,
    images: {
        loader: 'default',
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
                pathname: '/img/*',
            },
        ],
    },
}