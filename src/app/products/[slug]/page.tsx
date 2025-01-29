//   "use client"
// import { add } from "@/app/redux/cart-slice";
// import Button from "@/components/button";
// import RelatedProducts from "@/components/related-products";
// import Navbar2 from "@/components/navbar-2";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { useDispatch } from "react-redux";


// interface IProduct {
//   _id: string;
//   name: string;
//   slug: {
//     current: string;
//   };
//   image: string;
//   price: number;
//   quantity: number;
//   description: string;
//   dimensions: {
//     height: string;
//     width: string;
//     depth: string;
//   };
//   category: {
//     _ref: string;
//   };
// }

// export default async function ProductDetails({ params }: { params: { slug: string } }) {
//   const dispatch = useDispatch(); // Hook to access the Redux dispatch function

//   const productQuery = `
//     *[_type == "product" && slug.current == $slug][0]{
//       _id,
//       name,
//       slug,
//       "image": image.asset->url,
//       price,
//       quantity,
//       description,
//       dimensions,
//       category
//     }
//   `;
//   const product: IProduct = await client.fetch(productQuery, { slug: params.slug });

//   if (!product) {
//     return <p>Product not found.</p>;
//   }


//   // Handle adding the product to the cart
//   const handleAddToCart = () => {
//     dispatch(
//       add({
//         id: Number(product._id),
//         title: product.name,
//         price: product.price,
//         image: product.image,
//         quantity: product.quantity
//       })
//     );
//   };

//   return (
//     <main>
//       <Navbar2 />
//       <div className="bg-light-grey">
//         <div className="container md:py-10 p-0 lg:flex lg:justify-between lg:items-center">
//           <div>
//             <Image src={product.image} alt={product.name} height={1500} width={960} loading="lazy"/>
//           </div>
//           <div className="space-y-5 lg:space-y-3 container mr-24">
//             <div className="pt-5 md:pt-8 lg:p-0">
//               <p className="text-custom-h3 md:text-custom-h1 font-display">{product.name}</p>
//               <p className="text-custom-h4 md:text-custom-h3">${product.price}</p>
//             </div>
//             <hr />
//             <div className="space-y-1 md:space-y-5">
//               <p className="font-display text-body-md">Product Description</p>
//               <p className="text-body-md">{product.description}</p>
//             </div>
//             {/* Dimensions */}
//             <div className="space-y-1">
//               <p className="font-display text-body-md">Dimensions</p>
//               <div className="text-body-sm flex gap-x-12">
//                 <div className="space-y-2">
//                   <p className="font-display text-body-md">Height</p>
//                   <p className="text-body-md">{product.dimensions.height}</p>
//                 </div>
//                 <div className="h-11 w-[1px] bg-border-grey mt-2"></div>
//                 <div className="space-y-1">
//                   <p className="font-display text-body-md">Width</p>
//                   <p className="text-body-md">{product.dimensions.width}</p>
//                 </div>
//                 <div className="h-11 w-[1px] bg-border-grey mt-2"></div>
//                 <div className="space-y-1">
//                   <p className="font-display text-body-md">Depth</p>
//                   <p className="text-body-md">{product.dimensions.depth}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="space-y-1">
//               <p className="font-display text-body-md">Quantity</p>
//               <button className="px-16 py-2 bg-white text-body-sm">{product.quantity}</button>
//             </div>
//             <div className="flex gap-x-6 pb-10 lg:pt-7 text-body-md">
//               <span className="text-white">
//                 {/* Add to Cart Button */}
//                 <Button text="Add to cart" color="bg-dark-primary" onClick={handleAddToCart} />
//               </span>
//               <span className="text-dark-primary">
//                 <Button text="Save to favorites " color="bg-white" />
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* Related Products Section */}
//         <RelatedProducts params={{ slug: params.slug }} />
//         </div>
//     </main>
//   );
// }

"use client";
import { add } from "@/app/redux/cart-slice";
import Button from "@/components/button";
import RelatedProducts from "@/components/related-products";
import Navbar2 from "@/components/navbar-2";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

interface IProduct {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: string;
  price: number;
  quantity: number;
  description: string;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  category: {
    _ref: string;
  };
}

async function fetchProduct(slug: string): Promise<IProduct | null> {
  const productQuery = `
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      "image": image.asset->url,
      price,
      quantity,
      description,
      dimensions,
      category
    }
  `;
  return await client.fetch(productQuery, { slug });
}

export default function ProductDetails({ params }: { params: { slug: string } }) {
  const dispatch = useDispatch(); // Hook to access the Redux dispatch function
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    async function getProduct() {
      const fetchedProduct = await fetchProduct(params.slug);
      setProduct(fetchedProduct);
    }
    getProduct();
  }, [params.slug]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    dispatch(
      add({
        id: Number(product._id),
        title: product.name,
        price: product.price,
        image: product.image,
        quantity: product.quantity,
      })
    );
  };

  return (
    <main>
      <Navbar2 />
      <div className="bg-light-grey">
        <div className="container md:py-10 p-0 lg:flex lg:justify-between lg:items-center">
          <div>
            <Image src={product.image} alt={product.name} height={1500} width={960} loading="lazy" />
          </div>
          <div className="space-y-5 lg:space-y-3 container mr-24">
            <div className="pt-5 md:pt-8 lg:p-0">
              <p className="text-custom-h3 md:text-custom-h1 font-display">{product.name}</p>
              <p className="text-custom-h4 md:text-custom-h3">${product.price}</p>
            </div>
            <hr />
            <div className="space-y-1 md:space-y-5">
              <p className="font-display text-body-md">Product Description</p>
              <p className="text-body-md">{product.description}</p>
            </div>
            {/* Dimensions */}
            <div className="space-y-1">
              <p className="font-display text-body-md">Dimensions</p>
              <div className="text-body-sm flex gap-x-12">
                <div className="space-y-2">
                  <p className="font-display text-body-md">Height</p>
                  <p className="text-body-md">{product.dimensions.height}</p>
                </div>
                <div className="h-11 w-[1px] bg-border-grey mt-2"></div>
                <div className="space-y-1">
                  <p className="font-display text-body-md">Width</p>
                  <p className="text-body-md">{product.dimensions.width}</p>
                </div>
                <div className="h-11 w-[1px] bg-border-grey mt-2"></div>
                <div className="space-y-1">
                  <p className="font-display text-body-md">Depth</p>
                  <p className="text-body-md">{product.dimensions.depth}</p>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-display text-body-md">Quantity</p>
              <button className="px-16 py-2 bg-white text-body-sm">{product.quantity}</button>
            </div>
            <div className="flex gap-x-6 pb-10 lg:pt-7 text-body-md">
              <span className="text-white">
                {/* Add to Cart Button */}
                <Button text="Add to cart" color="bg-dark-primary" onClick={handleAddToCart} />
              </span>
              <span className="text-dark-primary">
                <Button text="Save to favorites " color="bg-white" />
              </span>
            </div>
          </div>
        </div>
        {/* Related Products Section */}
        <RelatedProducts params={{ slug: params.slug }} />
      </div>
    </main>
  );
}
