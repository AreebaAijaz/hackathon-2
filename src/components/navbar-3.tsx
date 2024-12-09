import { TbTruckDelivery } from "react-icons/tb";
import { Search, ShoppingCart, CircleUserRound } from "lucide-react";
import Link from "next/link";

export default function Navbar3() {
  return (
    <div className="">
      <div className="h-[41px] bg-dark-primary text-white flex gap-x-2 justify-center items-center">
        <TbTruckDelivery className="h-[16px] w-[16px]" />
        <p className="text-[9px] lg:text-body-sm">
          Free delivery on all orders above £50 with code easier checkout
        </p>
      </div>

      <div className="container h-[70px] lg:h-[74px] flex justify-between items-center">
        <p className="text-custom-h3 font-display">Avion</p>
        <div className="hidden lg:flex gap-x-10 justify-between items-center">
          <div className="space-x-10 text-body-md">
            <Link href="/">About us</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
          </div>
          <div className="flex gap-x-4">
            <Search className="h-[16px] w-[16px]" />
            <ShoppingCart className="h-[16px] w-[16px]" />
            <CircleUserRound className="h-[16px] w-[16px]" />
          </div>
        </div>
      </div>
      <div>
        <ul className="hidden lg:flex h-[54px] lg:h-[64px] justify-center items-center gap-x-8 bg-light-grey">
          <li>Plant Pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
      </div>
    </div>
  );
}
