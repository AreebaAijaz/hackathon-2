import { TbTruckDelivery } from "react-icons/tb";
import { Search, ShoppingCart, CircleUserRound } from "lucide-react";
import { IoMenu } from "react-icons/io5";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar2() {
  return (
    <main>
    <div className="hidden lg:block">
      <div className="h-[41px] bg-dark-primary text-white flex gap-x-2 justify-center items-center">
        <TbTruckDelivery className="h-[16px] w-[16px]" />
        <p className="text-body-sm">
          Free delivery on all orders above £50 with code easier checkout
        </p>
      </div>

      <div className="container h-[80px] flex justify-between items-center">
        <p className="font-display text-clash-regular">Avion</p>
        <ul className="flex gap-x-8 text-body-md text-nav mr-28">
        <Link href="/">Plant Pots</Link>
        <Link href="/product-listing">Ceramics</Link>
        <Link href="/product-v3">Tables</Link>
        <Link href="/about">Chairs</Link>
        <Link href="/product-landing">Crockery</Link>
        <Link href="/product-listing">Tableware</Link>
        <Link href="/product-v3">Cutlery</Link>
        </ul>
        <div className="flex gap-x-4">
          <Search className="h-[16px] w-[16px]" />
          <div className="flex gap-x-4 relative">
            <div className="relative">
              <ShoppingCart className="w-[16px] h-[16px]" />
              <Link
                href="/shopping-cart"
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center"
              >
                2
              </Link>
            </div>
            </div>
          <CircleUserRound className="h-[16px] w-[16px]" />
        </div>
      </div>
    </div>
          {/* sm view */}
          <div className="lg:hidden h-[64px] flex justify-between items-center mx-4">
        <p className="text-custom-h4">Avion</p>
        <div className="flex gap-x-4">
        <Search className="h-[16px] w-[16px]"/>
        <ShoppingCart className="h-[16px] w-[16px]" />
        <CircleUserRound className="h-[16px] w-[16px]"/>
        <Sheet>
  <SheetTrigger><IoMenu /></SheetTrigger>
  <SheetContent className="bg-white text-nav">
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
        <ul className="text-body-lg space-y-4 flex flex-col pt-6">
        <Link href="/">Plant Pots</Link>
        <Link href="/product-listing">Ceramics</Link>
        <Link href="/product-v3">Tables</Link>
        <Link href="/about">Chairs</Link>
        <Link href="/product-landing">Crockery</Link>
        <Link href="/product-listing">Tableware</Link>
        <Link href="/product-v3">Cutlery</Link>
      </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
      </div>

    </main>
  );
}
