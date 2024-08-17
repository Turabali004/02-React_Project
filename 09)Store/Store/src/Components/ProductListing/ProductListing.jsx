// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from '../../Features/productSlice';
// import { TailSpin } from 'react-loader-spinner';

// const ProductListing = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.products);
//   const status = useSelector((state) => state.products.status);
//   const error = useSelector((state) => state.products.error);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       dispatch(fetchProducts({ query: searchQuery, page: 1 }));
//     }
//   };

//   useEffect(() => {
//     dispatch(fetchProducts({ query: 'Phone', page: 1 })); // Default fetch on load
//   }, [dispatch]);

//   if (status === 'loading') {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <TailSpin color="#00BFFF" height={80} width={80} />
//       </div>
//     );
//   }

//   if (status === 'failed') {
//     return (
//       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto mt-4" role="alert">
//         <strong className="font-bold">Error: </strong>
//         <span className="block sm:inline">{error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Product Listing</h1>
//       <div className="mb-8 flex justify-center items-center">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search products"
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out"
//         />
//         <button
//           onClick={handleSearch}
//           className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
//         >
//           Search
//         </button>
//       </div>
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {products?.map((product) => (
//           <div
//             key={product.asin}
//             className="bg-white shadow-lg rounded-lg overflow-hidden p-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
//           >
//             <img
//               src={product.product_photo}
//               alt={product.product_title}
//               className="w-full h-48 mb-4 rounded-md object-contain transition duration-300 ease-in-out transform hover:scale-110"
//             />
//             <h2 className="text-lg font-semibold mb-2">{product.product_title}</h2>
//             <p className="text-lg font-bold">Price: {product.product_price}</p>
//             {product.product_original_price && (
//               <p className="text-sm line-through text-gray-500">
//                 Original Price: {product.product_original_price}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductListing;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Features/productSlice";
import { TailSpin } from "react-loader-spinner";

// const ProductListing = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.products);
//   console.log('This is my products' + products);

//   const status = useSelector((state) => state.products.status);
//   const error = useSelector((state) => state.products.error);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       dispatch(fetchProducts({ query: searchQuery, page: 1 }));
//     }
//   };

//   useEffect(() => {
//     dispatch(fetchProducts({ query: 'Phone', page: 1 }));
//   }, [dispatch]);

//   if (status === 'loading') {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         Loading....
//       </div>
//     );
//   }

//   if (status === 'failed') {
//     return (
//       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto mt-4" role="alert">
//         <strong className="font-bold">Error: </strong>
//         <span className="block sm:inline">{error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Product Listing</h1>
//       <div className="mb-8 flex justify-center items-center">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search products"
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out"
//         />
//         <button
//           onClick={handleSearch}
//           className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
//         >
//           Search
//         </button>
//       </div>
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {products?.map((product) => (
//           <div
//             key={product.asin}
//             className="bg-white shadow-lg rounded-lg overflow-hidden p-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
//           >
//             <img
//               src={product.product_photo}
//               alt={product.product_title}
//               className="w-full h-48 mb-4 rounded-md object-contain transition duration-300 ease-in-out transform hover:scale-110"
//             />
//             <h2 className="text-lg font-semibold mb-2">{product.product_title}</h2>
//             <p className="text-lg font-bold">Price: {product.product_price}</p>
//             {product.product_original_price && (
//               <p className="text-sm line-through text-gray-500">
//                 Original Price: {product.product_original_price}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts({ q: "Phone", page: 1 }));
  }, [dispatch]);

  if (products.status === "Loading") {
    reuturn`Loading...`;
  }
  if (products.status === "failed") {
    return `Failed to fetch data: ${products.error}`;
  }
  return (
  <>
    This is my product listing page
    {products.products.map((product) => {
      console.log(product.item)
      return(
        <>
          <div key={product.item.id} 
          className="flex w-screen bg-blue-400 "
          >
            <img src={product.item.image} height={100}/>
          </div>
        </>
      )
    })}
  </>
);
};

export default ProductListing;
