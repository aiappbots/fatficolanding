/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default function CTA() {
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
								href='tel:2129205239'
								className='mt-8 bg-yellow-300   font-bold border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-black hover:bg-yellow-50'>
								1-212-920-5239
							</a>
						</div>
						<div className='mt-2 px-6 text-1xl text-white'>Or sign up now</div>
					</div>
					<div className='-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
						<img
							className='transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20'
							src='https://res.cloudinary.com/dnba3xeae/image/upload/v1645749999/hreo_logo_1.png'
							alt='Hereo Image FatFico'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
