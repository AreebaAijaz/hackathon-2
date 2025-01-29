
// "use client"
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/app/redux/store"; // Update this to your actual store path
// import { remove, increment, decrement } from "@/app/redux/cart-slice";
// import Button from "@/components/button";
// import HomeNav from "@/components/navbar";
// import Image from "next/image";
// import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

// export default function ShoppingCart() {
//   const cart = useSelector((state: RootState) => state.cart); // Access cart from Redux store
//   const dispatch = useDispatch();

//   // Calculate the subtotal
//   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   if (!cart.length) {
//     return (
//       <main>
//         <div>
//           <HomeNav />
//         </div>
//         <div className="lg:h-full bg-light-grey flex items-center justify-center">
//           <p className="text-custom-h4 font-display py-6">Your cart is empty.</p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <div>
//         <HomeNav />
//       </div>
//       <div className="lg:h-[749px] bg-light-grey">
//         <div className="container lg:px-28">
//           <div className="py-8 lg:py-14">
//             <p className="font-display text-custom-h3 lg:text-custom-h1">Your Shopping Cart</p>
//           </div>
//           {/* headings */}
//           <div className="hidden lg:flex justify-between font-display text-custom-h5 pb-3">
//             <p>Product</p>
//             <p className="pl-64">Quantity</p>
//             <p>Total</p>
//           </div>
//           <hr />
//           {/* product-description */}
//           <div className="py-5 space-y-3">
//             {cart.map((item) => (
//               <div key={item.id} className="flex justify-between items-center">
//                 <div className="flex gap-x-4">
//                   <Image src={item.image} alt={item.title} height={50} width={100} />
//                   <div className="lg:py-4 lg:space-y-1">
//                     <p className="font-display text-custom-h6 lg:text-custom-h4">{item.title}</p>
//                     <p className="text-body-md">£{item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-x-4">
//                   <FaMinusCircle
//                     onClick={() => {
//                       if (item.quantity === 1) {
//                         dispatch(remove(item.id)); // Remove the item if quantity is 1
//                       } else {
//                         dispatch(decrement(item.id)); // Decrement otherwise
//                       }
//                     }}
//                     className="cursor-pointer text-gray-500 hover:text-gray-700"
//                   />
//                   <span>{item.quantity}</span>
//                   <FaPlusCircle
//                     onClick={() => dispatch(increment(item.id))}
//                     className="cursor-pointer text-gray-500 hover:text-gray-700"
//                   />
//                 </div>
//                 <div>
//                   <p className="hidden lg:block lg:text-body-lg">
//                     £{(item.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <hr />
//           <div className="text-end py-4 lg:py-10 space-y-2">
//             <p className="text-custom-h4">
//               Subtotal <span className="font-display text-custom-h3 pl-3">£{subtotal.toFixed(2)}</span>
//             </p>
//             <p className="text-body-sm">Taxes and shipping are calculated at checkout</p>
//             <div className="text-white">
//               <Button text="go to checkout" color="bg-dark-primary" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store"; // Update this to your actual store path
import { remove, increment, decrement } from "@/app/redux/cart-slice";
import Button from "@/components/button";
import HomeNav from "@/components/navbar";
import Image from "next/image";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export default function ShoppingCart() {
  const cart = useSelector((state: RootState) => state.cart); // Access cart from Redux store
  const dispatch = useDispatch();

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!cart.length) {
    return (
      <main>
        <div>
          <HomeNav />
        </div>
        <div className="lg:h-full bg-light-grey flex items-center justify-center">
          <p className="text-custom-h4 font-display py-6">Your cart is empty.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div>
        <HomeNav />
      </div>
      <div className="lg:h-[749px] bg-light-grey">
        <div className="container lg:px-28">
          <div className="py-8 lg:py-14">
            <p className="font-display text-custom-h3 lg:text-custom-h1">Your Shopping Cart</p>
          </div>
          {/* headings */}
          <div className="hidden lg:flex justify-between font-display text-custom-h5 pb-3">
            <p>Product</p>
            <p className="pl-64">Quantity</p>
            <p>Total</p>
          </div>
          <hr />
          {/* product-description */}
          <div className="py-5 space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex gap-x-4">
                  <Image src={item.image} alt={item.title} height={50} width={100} />
                  <div className="lg:py-4 lg:space-y-1">
                    <p className="font-display text-custom-h6 lg:text-custom-h4">{item.title}</p>
                    <p className="text-body-md">£{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <FaMinusCircle
                    onClick={() => {
                      if (item.quantity === 1) {
                        dispatch(remove(item.id)); // Remove the item if quantity is 1
                      } else {
                        dispatch(decrement(item.id)); // Decrement otherwise
                      }
                    }}
                    className="cursor-pointer text-gray-500 hover:text-gray-700"
                  />
                  <span>{item.quantity}</span>
                  <FaPlusCircle
                    onClick={() => dispatch(increment(item.id))}
                    className="cursor-pointer text-gray-500 hover:text-gray-700"
                  />
                </div>
                <div>
                  <p className="hidden lg:block lg:text-body-lg">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="text-end py-4 lg:py-10 space-y-2">
            <p className="text-custom-h4">
              Subtotal <span className="font-display text-custom-h3 pl-3">£{subtotal.toFixed(2)}</span>
            </p>
            <p className="text-body-sm">Taxes and shipping are calculated at checkout</p>
            <div className="text-white">
              <Button text="go to checkout" color="bg-dark-primary" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
