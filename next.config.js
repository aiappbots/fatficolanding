/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
	images: {
		loader: "cloudinary",
		path: "",
		domains: ["cloudinary"],
	},

	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/" },
			"/about": { page: "/about" },
			"/privacy": { page: "/privacy" },
			"/contact": { page: "/contact" },
			"/fcra": { page: "/fcra" },
			"/leadquiz": { page: "/leadquiz" },
			"/terms": { page: "/terms" },
			"/refund": { page: "/refund" },

			// '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
			// '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
			// '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
		};
	},
};
