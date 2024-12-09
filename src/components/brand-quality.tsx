// import { CreditCard , CircleCheck , Sprout} from 'lucide-react';
// import { TbTruckDelivery } from "react-icons/tb";

// export default function BrandQuality(){
//     return(
//         <div className='container my-16 lg:my-32'>
//             <div className=''>
//                 <p className='lg:text-center text-H3'>What makes our brand differnet</p>
//             </div>
//             <div className='my-12 space-y-10 md:grid grid-cols-2 md:justify-between md:items-center lg:flex justify-between items-center gap-x-6'>
//                 <div className='space-y-2 h-[116px] lg:h-[244px] w-[305px] bg-white  lg:bg-light-grey '>
//                     <TbTruckDelivery  className='h-[24px] w-[24px]'/>
//                     <p className='text-H4'>Next day as standard</p>
//                     <p className='text-body-md'>Order before 3pm and get your order the next day as standard </p>
//                 </div>
//                 <div className='space-y-2 h-[116px] lg:h-[244px] w-[305px] bg-white lg:bg-light-grey'>
//                     <CircleCheck />
//                     <p className='text-H4'>Made with artisans</p>
//                     <p className='text-body-md'>Handmade crafted goods made with real passiona nd craftmanship </p>
//                 </div>
//                 <div className='space-y-2 h-[116px] lg:h-[244px] w-[305px] bg-white lg:bg-light-grey'>
//                     <CreditCard />
//                     <p className='text-H4'>Unbeatable Prices</p>
//                     <p className='text-body-md'>For our materials and quality you won't find better prices anywhere. </p>
//                 </div>
//                 <div className='space-y-2 h-[116px] lg:h-[244px] w-[305px] bg-white lg:bg-light-grey'>
//                     <Sprout />
//                     <p className='text-H4'>Next day as standard</p>
//                     <p className='text-body-md'>we use 100% recycled packing to ensure our footprinnt is managable</p>
//                 </div>

//             </div>
//         </div>
//     )
// }
import { CreditCard, CircleCheck, Sprout } from "lucide-react";
import { TbTruckDelivery } from "react-icons/tb";

export default function BrandQuality() {
  return (
    <div className="container my-16 lg:my-20">
      <div>
        <p className="md:text-center text-custom-h4 font-display ">
          What makes our brand different
        </p>
      </div>
      <div className="my-8 space-y-10 lg:space-y-0 md:grid grid-cols-2 md:justify-center md:items-center lg:flex justify-between items-center gap-x-6">
        <div className="space-y-2 h-[116px] lg:h-[244px] lg:w-[305px] bg-white lg:px-6 lg:py-12 lg:bg-light-grey md:mx-auto">
          <TbTruckDelivery className="h-[24px] w-[24px]" />
          <p className="font-display text-custom-h5">Next day as standard</p>
          <p className="text-body-md">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        <div className="space-y-2 h-[116px] lg:h-[244px] lg:w-[305px] bg-white lg:px-6 lg:py-12 lg:bg-light-grey md:mx-auto">
          <CircleCheck className="h-[24px] w-[24px]" />
          <p className="font-display text-custom-h5">Made with artisans</p>
          <p className="text-body-md">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        <div className="space-y-2 h-[116px] lg:h-[244px] lg:w-[305px] bg-white lg:px-6 lg:py-12 lg:bg-light-grey md:mx-auto">
          <CreditCard className="h-[24px] w-[24px]" />
          <p className="font-display text-custom-h5">Unbeatable Prices</p>
          <p className="text-body-md">
            For our materials and quality you won`&apos`t find better prices
            anywhere.
          </p>
        </div>

        <div className="space-y-2 h-[116px] lg:h-[244px] lg:w-[305px] bg-white lg:px-6 lg:py-12 lg:bg-light-grey md:mx-auto">
          <Sprout className="h-[24px] w-[24px]" />
          <p className="font-display text-custom-h5">Next day as standard</p>
          <p className="text-body-md">
            We use 100% recycled packing to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
}
