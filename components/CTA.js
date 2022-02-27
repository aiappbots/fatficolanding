import Image from "next/image";
import { buildImageUrl } from "cloudinary-build-url";

export default function CTA() {
	const hero = buildImageUrl("hreo_logo_1", {
		cloud: {
			cloudName: "fatfico",
		},
	});

	// 1050 × 1580

	//  // src= "https://res.cloudinary.com/picturecloud7/image/upload/q_auto,f_auto/skiing_st73x7.jpg"
	//     src={
	//       "https://res.cloudinary.com/picturecloud7/image/upload/q_auto,f_auto"
	//     }
	//     alt="skiing"
	//     width="672"
	//     height="504"
	//     layout="responsive"
	//     loading="lazy" // Lazy is default

	return (
		<div className='bg-white'>
			<div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
				<div className='bg-green-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4'>
					<div className='pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
						<div className='lg:self-center'>
							<h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
								<span className='block'>You have bad credit?</span>
								<span className='block'> We fix fico credit scores</span>
							</h2>
							<p className='mt-4 text-lg leading-6 text-white'>
								Dont let bad credit hold you back from buying a home, car, or
								even the ability to get a job.
							</p>
							<a
								href='https://m89hxl0zo60.typeform.com/to/dkh8ap45'
								className='mt-8 bg-yellow-300 text-2xl p-6  font-bold border border-transparent rounded-md shadow  w-50 h-10 mx-auto  inline-flex items-center text-base font-medium text-black hover:bg-yellow-50'>
								Fix your credit now
							</a>
						</div>
					</div>
					<div className='-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
						<Image
							className='transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20'
							src='https://res.cloudinary.com/fatfico/image/upload/v1645749999/hreo_logo_1.png'
							width={1050}
							height={1580}
							alt='Hero Image FatFico'
							quality={100}
							layout='responsive'
							// objectFit='cover'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
