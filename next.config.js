/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
	images: {
    reactStrictMode: true,
		loader: "cloudinary",
		domains: ["res.cloudinary.com"],
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


reactStrictMode: true,
+  images: {
+   loader: "custom",