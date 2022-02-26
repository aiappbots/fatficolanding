import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

export default function Notify() {
	const [notify, setNotify] = useState(false);
	const hideNotfify = (e) => {
		setNotify(true);
	};

	if (notify) {
		return "";
	} else {
		return (
			<>
				<div className='bg-blue-400'>
					<div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
						<div className='flex items-center justify-between flex-wrap'>
							<div className='w-0 flex-1 flex items-center'>
								<span className='flex p-2 rounded-lg bg-yellow-400'>
									<SpeakerphoneIcon
										className='h-6 w-6 text-white'
										aria-hidden='true'
									/>
								</span>
								<p className='ml-3 font-medium text-white truncate'>
									<span className='md:hidden'>
										Get Free Credit Repair Tools
									</span>
									<span className='hidden md:inline'>
										If you want to do the credit repair yourself this free kit
										will help
									</span>
								</p>
							</div>
							<div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
								<a
									href='#'
									className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-indigo-150'>
									Free Credit Repair Ebook
								</a>
							</div>
							<div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
								<button
									onClick={hideNotfify}
									type='button'
									className='-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'>
									<span className='sr-only'>Dismiss</span>
									<XIcon className='h-6 w-6 text-white' aria-hidden='true' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
