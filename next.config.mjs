/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'prontopizza.ua',
				port: '',
				pathname: '/ternopil/wp-content/uploads/**',
			},
		],
	},
};

export default nextConfig;
