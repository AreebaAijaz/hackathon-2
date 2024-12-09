// import Image from "next/image"
// import Button from "./button"

// const Products =[
//     {
//         id:1,
//         title: "The popular Suede Sofa",
//         price: "£980",
//         Image: "/Large.png"
//     },
//     {
//         id:2,
//         title: "The Dandy chair",
//         price: "£250",
//         Image: "/Photo.png"
//     },
//     {
//         id:1,
//         title: "The Dandy Chair",
//         price: "£125",
//         Image: "/Photo (5).png"
//     },
// ]

// export default function PopularProducts(){
//     return(
//         <div className="container my-8">
//             <p className="text-H2">Our Popular Products</p>
//             <div className="flex justify-between items-center gap-x-8 my-10">
//             {Products.map((Item , index)=>{
//                 return(
//                     <div className="space-y-3">
//                         <Image src={Item.Image} alt="" height={375} width={index === 0? 630 : 305}/>
//                         <p className="text-H4">{Item.title}</p>
//                         <p className="text-body-lg">{Item.price}</p>
//                     </div>
//                 )
//             })}
//             </div>
//             <div className="text-center">
//                 <Button text="View Collection" color="bg-light-grey"/>
//             </div>
//         </div>
//     )
// }
import Image from "next/image";
import Button from "./button";

const Products = [
  {
    id: 1,
    title: "The popular Suede Sofa",
    price: "£980",
    Image: "/Large.png",
  },
  {
    id: 2,
    title: "The Dandy chair",
    price: "£250",
    Image: "/Photo.png",
  },
  {
    id: 3,
    title: "The Dandy Chair",
    price: "£125",
    Image: "/Photo (5).png",
  },
];

export default function PopularProducts() {
  return (
    <div className="container my-10 lg:my-8">
      <p className="font-display text-[20px]">Our Popular Products</p>
      <div className="flex justify-between items-center gap-x-8 my-5 lg:my-10 ">
        {Products.map((Item, index) => {
          return (
            <div
              key={Item.id}
              className={`space-y-3 ${index === 0 ? "hidden md:block" : ""}`}
            >
              <Image
                src={Item.Image}
                alt=""
                height={375}
                width={index === 0 ? 630 : 305}
              />
              <p className="font-display text-custom-h4">{Item.title}</p>
              <p className="text-body-lg">{Item.price}</p>
            </div>
          );
        })}
      </div>
      <div className="text-center text-body-md">
        <Button text="View Collection" color="bg-light-grey" />
      </div>
    </div>
  );
}
