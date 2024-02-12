
import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span className="text-gray-600 dark:text-gray-300">$29.99</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                <span className="text-gray-600 dark:text-gray-300">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
              <div className="flex items-center mt-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

// import React, { useState } from "react";

// const Product = () => {
//     const [show, setShow] = useState(false);
//     const [show2, setShow2] = useState(false);

//     return (
//         <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
//             <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
//                 <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
//                 <img className="mt-6 w-full" alt="img of a girl posing" src="https://i.ibb.co/qxkRXSq/component-image-two.png" />
//             </div>
//             <div className="md:hidden">
//                 <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
//                 <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
//                     <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
//                     <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
//                     <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
//                     <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
//                 </div>
//             </div>
//             <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
//                 <div className="border-b border-gray-200 pb-6">
//                     <p className="text-sm leading-none text-gray-600">Balenciaga Fall Collection</p>
//                     <h1
//                         className="
// 							lg:text-2xl
// 							text-xl
// 							font-semibold
// 							lg:leading-6
// 							leading-7
// 							text-gray-800
// 							mt-2
// 						"
//                     >
//                         Balenciaga Signature Sweatshirt
//                     </h1>
//                 </div>
//                 <div className="py-4 border-b border-gray-200 flex items-center justify-between">
//                     <p className="text-base leading-4 text-gray-800">Colours</p>
//                     <div className="flex items-center justify-center">
//                         <p className="text-sm leading-none text-gray-600">Smoke Blue with red accents</p>
//                         <div
//                             className="
// 								w-6
// 								h-6
// 								bg-gradient-to-b
// 								from-gray-900
// 								to-indigo-500
// 								ml-3
// 								mr-4
// 								cursor-pointer
// 							"
//                         ></div>
//                         <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </div>
//                 </div>
//                 <div className="py-4 border-b border-gray-200 flex items-center justify-between">
//                     <p className="text-base leading-4 text-gray-800">Size</p>
//                     <div className="flex items-center justify-center">
//                         <p className="text-sm leading-none text-gray-600 mr-3">38.2</p>
//                         <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </div>
//                 </div>
//                 <button
//                     className="
// 						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
// 						text-base
// 						flex
// 						items-center
// 						justify-center
// 						leading-none
// 						text-white
// 						bg-gray-800
// 						w-full
// 						py-4
// 						hover:bg-gray-700
// 					"
//                 >
//                     <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                         <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                         <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                         <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                     Check availability in store
//                 </button>
//                 <div>
//                     <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
//                     <p className="text-base leading-4 mt-7 text-gray-600">Product Code: 8BN321AF2IF0NYA</p>
//                     <p className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</p>
//                     <p className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</p>
//                     <p className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</p>
//                     <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p>
//                 </div>
//                 <div>
//                     <div className="border-t border-b py-4 mt-7 border-gray-200">
//                         <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
//                             <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
//                             <button
//                                 className="
// 									cursor-pointer
// 									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
// 									rounded
// 								"
//                                 aria-label="show or hide"
//                             >
//                                 <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
//                             You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="border-b py-4 border-gray-200">
//                         <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
//                             <p className="text-base leading-4 text-gray-800">Contact us</p>
//                             <button
//                                 className="
// 									cursor-pointer
// 									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
// 									rounded
// 								"
//                                 aria-label="show or hide"
//                             >
//                                 <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
//                             If you have any questions on how to return your item to us, contact us.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Product;
