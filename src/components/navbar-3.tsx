import { TbTruckDelivery } from "react-icons/tb";
import { Search, ShoppingCart, CircleUserRound } from "lucide-react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar3() {
  return (
    <main>
    <div className="hidden lg:block">
      <div className="h-[41px] bg-dark-primary text-white flex gap-x-2 justify-center items-center">
        <TbTruckDelivery className="h-[16px] w-[16px]" />
        <p className="text-[9px] lg:text-body-sm">
          Free delivery on all orders above £50 with code easier checkout
        </p>
      </div>

      <div className="container h-[70px] lg:h-[74px] flex justify-between items-center">
        <p className="text-custom-h3 font-display">Avion</p>
        <div className="hidden lg:flex gap-x-10 justify-between items-center">
          <div className="space-x-10 text-body-md text-nav">
            <Link href="/">About us</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
          </div>
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
      <div>
        <ul className="hidden lg:flex text-nav h-[54px] lg:h-[64px] justify-center items-center gap-x-8 bg-light-grey">
          <Link href="product-landing">Plant Pots</Link>
          <Link href="product-landing">Ceramics</Link>
          <Link href="product-landing">Tables</Link>
          <Link href="product-landing">Chairs</Link>
          <Link href="product-landing">Crockery</Link>
          <Link href="product-landing">Tableware</Link>
          <Link href="product-landing">Cutlery</Link>
        </ul>
      </div>
    </div>
              {/* sm view */}
              <div className="lg:hidden h-[64px] flex justify-between items-center mx-4">
        <p className="text-custom-h4">Avion</p>
        <div className="flex gap-x-4">
        <Search className="h-[16px] w-[16px]"/>
        <Sheet>
  <SheetTrigger><IoMenu /></SheetTrigger>
  <SheetContent className="bg-white text-nav">
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
        <ul className="text-body-lg space-y-4 flex flex-col pt-12">
        <Link href="/about">About us</Link>
        <Link href="/product-listing">Contact</Link>
        <Link href="/about">Blog</Link>
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
