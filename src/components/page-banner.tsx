// import { FaCircleCheck } from "react-icons/fa6";

// export default function AboutBanner() {
//     return (
//       <div className="h-[370px] lg:h-[444px] bg-about-footer bg-cover bg-center">
//        <div className="flex flex-col justify-center items-center">
//         <div className="space-y-6 text-white">
//             <p className="text-H2">Join the club and get the benefits</p>
//             <p className="text-body-md w-[450px] text-center">Sign up for our newsletter and receive exclusive offers new ranges, sales, popup stores and more.</p>
//             <ul className="text-body-sm flex gap-x-4 text-center">
//                 <li className="flex gap-x-3"><FaCircleCheck /> Exclusive offers</li>
//                 <li className="flex gap-x-3"><FaCircleCheck />Free events</li>
//                 <li className="flex gap-x-3"><FaCircleCheck />Large discounts</li>
//             </ul>
//         </div>
//         <div className="flex h-full w-[472px] mt-8">
//           <input className="py-3 px-4 text-body-md bg-light-grey h-[56px] w-[224px] lg:w-[354px]" type="text" placeholder="your@email.com" />
//           <button className="bg-dark-primary px-4 py-3 text-body-md h-[56px] w-[118px] text-white">Sign up</button>
//         </div>
//       </div>
//       </div>
//     );
//   }

import { FaCircleCheck } from "react-icons/fa6";

export default function PageBanner() {
  return (
    <div className="h-[370px] lg:h-[444px] bg-about-footer bg-cover bg-center flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="space-y-6 text-white text-center">
          <p className="text-custom-h3 font-display">
            Join the club and get the benefits
          </p>
          <p className="text-body-sm w-[470px] text-center pl-4">
            Sign up for our newsletter and receive exclusive offers, new ranges,
            sales, popup stores, and more.
          </p>
          <ul className="text-body-md flex gap-x-10 text-center pl-6">
            <li className="flex gap-x-3">
              <FaCircleCheck /> Exclusive offers
            </li>
            <li className="flex gap-x-3">
              <FaCircleCheck /> Free events
            </li>
            <li className="flex gap-x-3">
              <FaCircleCheck /> Large discounts
            </li>
          </ul>
        </div>
        <div className="flex h-full w-[472px] mt-8 text-body-md">
          <input
            className="py-3 px-4 text-body-md bg-light-grey h-[56px] w-[224px] lg:w-[354px]"
            type="text"
            placeholder="your@email.com"
          />
          <button className="bg-dark-primary px-4 py-3 text-body-md h-[56px] w-[118px] text-white">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
