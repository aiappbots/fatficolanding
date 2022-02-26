import { buildImageUrl } from "cloudinary-build-url";

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
	// 	{ name: "Credit Education", href: "#" },
	// 	{ name: "Pricing", href: "#" },
	// 	{ name: "Docs", href: "#" },
	// 	{ name: "Company", href: "#" },
];

export default function Header() {
	// const url = buildImageUrl("hreo_logo_1.png", {
	// 	cloud: {
	// 		cloudName: "fatfico",
	// 	},
	// });

	return (
		<header className='bg-green-700'>
			<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
				<div className='w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none'>
					<div className='flex items-center'>
						<a href='#'>
							<span className='sr-only'>FatFico</span>

							<span className='text-black  font-bold text-3xl'>Fat</span>
							<span className='text-yellow-400  font-bold text-3xl'>Fico</span>
						</a>
						<div className='hidden ml-10 space-x-8 lg:block'>
							{navigation.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className='text-base font-medium text-white hover:text-indigo-50'>
									{link.name}
								</a>
							))}
						</div>
					</div>
					<div className='ml-10 space-x-4'>
						<a
							href='https://m89hxl0zo60.typeform.com/to/dkh8ap45'
							className='mt-8 bg-yellow-300 text-2xl p-4  font-bold border border-transparent rounded-md shadow  w-60 h-20 py-4 inline-flex items-center text-base font-medium text-black hover:bg-yellow-50'>
							Fix your credit now
						</a>
					</div>
				</div>
				<div className='py-4 flex flex-wrap justify-center space-x-6 lg:hidden'>
					{navigation.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className='text-base font-medium text-white hover:text-indigo-50'>
							{link.name}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
