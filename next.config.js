/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
	images: {
		path: "",
		domains: ["cloudinary"],
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},

	// exportPathMap: async function (
	// 	defaultPathMap,
	// 	{ dev, dir, outDir, distDir, buildId }
	// ) {
	// 	return {
	// 		"/": { page: "/" },
	// 		"/about": { page: "/about" },
	// 		"/privacy": { page: "/privacy" },
	// 		"/contact": { page: "/contact" },
	// 		"/fcra": { page: "/fcra" },
	// 		"/leadquiz": { page: "/leadquiz" },
	// 		"/terms": { page: "/terms" },
	// 		"/refund": { page: "/refund" },

	// '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
	// '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
	// '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
	// 	};
	// },
};
