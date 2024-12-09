import Image from "next/image";
import Button from "./button";

const Products = [
  {
    id: 1,
    title: "The dandy chair",
    price: "£250",
    Image: "/Photo.png",
  },
  {
    id: 2,
    title: "Rustic Vase Set",
    price: "£155",
    Image: "/Photo (3).png",
  },
  {
    id: 1,
    title: "The Silky Vase",
    price: "£125",
    Image: "/Photo (1).png",
  },
  {
    id: 1,
    title: "The Lucky Lamp",
    price: "£399",
    Image: "/Photo (2).png",
  },
];

export default function Ceramics() {
  return (
    <div className="container my-8">
      <p className="font-display text-[20px]">New Ceramics</p>
      <div className="grid grid-cols-2 lg:flex justify-between items-center gap-x-3 gap-y-4 lg:gap-x-8 my-4">
        {Products.map((Item) => {
          return (
            <div key={Item.id} className="space-y-1 lg:space-y-3">
              <Image src={Item.Image} alt="" height={375} width={305} />
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
