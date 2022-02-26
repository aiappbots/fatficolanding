/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
	images: {
		loader: "cloudinary",
		path: "https://res.cloudinary.com/fatfico/",
		domains: ["https://res.cloudinary.com"],
	},

	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/" },
			// '/about': { page: '/about' },
			// '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
			// '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
			// '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
		};
	},
};
