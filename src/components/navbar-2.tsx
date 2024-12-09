import { TbTruckDelivery } from "react-icons/tb";
import { Search, ShoppingCart, CircleUserRound } from "lucide-react";

export default function Navbar2() {
  return (
    <div className="">
      <div className="h-[41px] bg-dark-primary text-white flex gap-x-2 justify-center items-center">
        <TbTruckDelivery className="h-[16px] w-[16px]" />
        <p className="text-body-sm">
          Free delivery on all orders above £50 with code easier checkout
        </p>
      </div>

      <div className="container h-[80px] flex justify-between items-center">
        <p className="font-display text-clash-regular">Avion</p>
        <ul className="flex gap-x-8 text-body-md text-gray-400 mr-28">
          <li>Plant Pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
        <div className="flex gap-x-4">
          <Search className="h-[16px] w-[16px]" />
          <ShoppingCart className="h-[16px] w-[16px]" />
          <CircleUserRound className="h-[16px] w-[16px]" />
        </div>
      </div>
    </div>
  );
}
