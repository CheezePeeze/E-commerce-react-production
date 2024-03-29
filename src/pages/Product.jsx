import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import Navbar from '../components/Navbar';
import Carousel from 'react-multi-carousel';
import { useParams } from 'react-router-dom';
import { getProductByIdDummyApi, getProductByIdFakeStoreApi } from '../common/api';
import { Rating } from '@mui/material';
import LazyLoad from 'react-lazy-load';
import { FooterWithLogo } from '../components/Footer/Footer';

const productTest = {
	name: 'Basic Tee 6-Pack',
	price: '$192',
	href: '#',
	breadcrumbs: [
		{ id: 1, name: 'Men', href: '#' },
		{ id: 2, name: 'Clothing', href: '#' },
	],
	images: [
		{
			src: 'https://tailwindui.com/img/ecommerce-images/productTest-page-02-secondary-productTest-shot.jpg',
			alt: 'Two each of gray, white, and black shirts laying flat.',
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/productTest-page-02-tertiary-productTest-shot-01.jpg',
			alt: 'Model wearing plain black basic tee.',
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/productTest-page-02-tertiary-productTest-shot-02.jpg',
			alt: 'Model wearing plain gray basic tee.',
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/productTest-page-02-featured-productTest-shot.jpg',
			alt: 'Model wearing plain white basic tee.',
		},
	],
	colors: [
		{ name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
		{ name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
		{ name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
	],
	sizes: [
		{ name: 'XXS', inStock: false },
		{ name: 'XS', inStock: true },
		{ name: 'S', inStock: true },
		{ name: 'M', inStock: true },
		{ name: 'L', inStock: false },
		{ name: 'XL', inStock: true },
		{ name: '2XL', inStock: true },
		{ name: '3XL', inStock: true },
	],
	description:
		'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
	highlights: [
		'Hand cut and sewn locally',
		'Dyed with our proprietary colors',
		'Pre-washed & pre-shrunk',
		'Ultra-soft 100% cotton',
	],
	details:
		'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: '#', average: 2.2, totalCount: 117 };

const colors = [
	{ name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
	{ name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
	{ name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
]

const sizes = [
	{ name: 'XXS', inStock: false },
	{ name: 'XS', inStock: true },
	{ name: 'S', inStock: true },
	{ name: 'M', inStock: true },
	{ name: 'L', inStock: false },
	{ name: 'XL', inStock: true },
	{ name: '2XL', inStock: true },
	{ name: '3XL', inStock: true },
]

const highlights = [
	'Hand cut and sewn locally',
	'Dyed with our proprietary colors',
	'Pre-washed & pre-shrunk',
	'Ultra-soft 100% cotton',
]

const details =
	'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	const [selectedColor, setSelectedColor] = useState(colors[0]);
	const [selectedSize, setSelectedSize] = useState(sizes[2]);

	const [product, setProduct] = useState({})
	const { company: companyId, id } = useParams()


	useEffect(() => {
		if (Number(companyId) === 1) {
			// getProductByIdFakeStoreApi(companyId).then(res => console.log(res.data))
			getProductByIdFakeStoreApi(id).then(res => {
				setProduct({
					...res.data,
					id: res.data.id,
					rating: res.data.rating.rate,
					stock: res.data.rating.count,
					thumbnail: res.data.image,
					images: [res.data.image],
					shop: 1
				})
			})
		}
		else {
			getProductByIdDummyApi(id).then(res => {
				setProduct({
					...res.data,
					shop: 2
				})
			})
		}
	}, [companyId])

	// console.log(product);
	return (
		<div className="bg-white container mx-auto ">
			<Navbar />
			<div>
				{/* productTest info */}
				<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-8">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>

					{/* Options */}
					<div className="mt-4 lg:row-span-3 lg:mt-0">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-5">
							{product.title}
						</h1>
						<p className="text-3xl tracking-tight text-gray-900">
							{product.price}€
						</p>

						{/* Reviews */}
						<div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<div className="flex items-center">
									{/* {[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating
													? 'text-gray-900'
													: 'text-gray-200',
												'h-5 w-5 flex-shrink-0'
											)}
											aria-hidden="true"
										/>
									))} */}
									{product.rating && <Rating name="half-rating-read" defaultValue={product.rating} precision={0.1} readOnly />}

								</div>
								{/* <a
									href={reviews.href}
									className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
								> */}
								{reviews.totalCount} reviews
								{/* </a> */}
							</div>
						</div>

						<form className="mt-10">
							{/* Colors */}
							<div>
								<h3 className="text-sm font-medium text-gray-900">Color</h3>

								<RadioGroup
									value={selectedColor}
									onChange={setSelectedColor}
									className="mt-4"
								>
									<RadioGroup.Label className="sr-only">
										Choose a color
									</RadioGroup.Label>
									<div className="flex items-center space-x-3">
										{colors.map((color) => (
											<RadioGroup.Option
												key={color.name}
												value={color}
												className={({ active, checked }) =>
													classNames(
														color.selectedClass,
														active && checked ? 'ring ring-offset-1' : '',
														!active && checked ? 'ring-2' : '',
														'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
													)
												}
											>
												<RadioGroup.Label as="span" className="sr-only">
													{color.name}
												</RadioGroup.Label>
												<span
													aria-hidden="true"
													className={classNames(
														color.class,
														'h-8 w-8 rounded-full border border-black border-opacity-10'
													)}
												/>
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div>

							{/* Sizes */}
							<div className="mt-10">
								<div className="flex items-center justify-between">
									<h3 className="text-sm font-medium text-gray-900">Size</h3>
									{/* <a
										href="#"
										className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
									>
										Size guide
									</a> */}
								</div>

								<RadioGroup
									value={selectedSize}
									onChange={setSelectedSize}
									className="mt-4"
								>
									<RadioGroup.Label className="sr-only">
										Choose a size
									</RadioGroup.Label>
									<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
										{sizes.map((size) => (
											<RadioGroup.Option
												key={size.name}
												value={size}
												disabled={!size.inStock}
												className={({ active }) =>
													classNames(
														size.inStock
															? 'cursor-pointer bg-white text-gray-900 shadow-sm'
															: 'cursor-not-allowed bg-gray-50 text-gray-200',
														active ? 'ring-2 ring-indigo-500' : '',
														'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
													)
												}
											>
												{({ active, checked }) => (
													<>
														<RadioGroup.Label as="span">
															{size.name}
														</RadioGroup.Label>
														{size.inStock ? (
															<span
																className={classNames(
																	active ? 'border' : 'border-2',
																	checked
																		? 'border-indigo-500'
																		: 'border-transparent',
																	'pointer-events-none absolute -inset-px rounded-md'
																)}
																aria-hidden="true"
															/>
														) : (
															<span
																aria-hidden="true"
																className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
															>
																<svg
																	className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
																	viewBox="0 0 100 100"
																	preserveAspectRatio="none"
																	stroke="currentColor"
																>
																	<line
																		x1={0}
																		y1={100}
																		x2={100}
																		y2={0}
																		vectorEffect="non-scaling-stroke"
																	/>
																</svg>
															</span>
														)}
													</>
												)}
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div>

							<button
								type="submit"
								className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Add to bag
							</button>
						</form>
					</div>

					<div className="py-5 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-0">
						{/* Description and details */}
						{product.images && (
							<Carousel
								additionalTransfrom={0}
								arrows
								autoPlaySpeed={3000}
								centerMode={false}
								className=" mb-5 "
								containerClass="container"
								dotListClass=""
								draggable
								focusOnSelect={false}
								infinite
								keyBoardControl
								minimumTouchDrag={80}
								pauseOnHover
								renderArrowsWhenDisabled={false}
								renderButtonGroupOutside={false}
								renderDotsOutside={false}
								responsive={{
									desktop: {
										breakpoint: {
											max: 3000,
											min: 1024
										},
										items: 1
									},
									mobile: {
										breakpoint: {
											max: 464,
											min: 0
										},
										items: 1
									},
									tablet: {
										breakpoint: {
											max: 1024,
											min: 464
										},
										items: 1
									}
								}}
								rewind={false}
								rewindWithAnimation={false}
								rtl={false}
								shouldResetAutoplay
								showDots
								sliderClass=""
								slidesToSlide={1}
								swipeable
							>
								{product.images.map((item, idx) =>
									<img src={item} key={idx} className=' h-64 text-center block ml-auto mr-auto p-2' />
								)}
							</Carousel>
						)}

						<div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">{product.description}</p>
							</div>
						</div>

						<div className="mt-10">
							<h3 className="text-sm font-medium text-gray-900">Highlights</h3>

							<div className="mt-4">
								<ul role="list" className="list-disc space-y-2 pl-4 text-sm">
									{highlights.map((highlight) => (
										<li key={highlight} className="text-gray-400">
											<span className="text-gray-600">{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="mt-10">
							<h2 className="text-sm font-medium text-gray-900">Details</h2>

							<div className="mt-4 space-y-6">
								<p className="text-sm text-gray-600">{details}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterWithLogo />
		</div>
	);
}
