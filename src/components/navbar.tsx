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
} from "@/components/ui/sheet";

export default function HomeNav() {
  return (
    <section>
      <main className="hidden lg:block h-[69px] lg:h-[132px] flex-col justify-center items-center px-8">
        {/* header */}
        <div className="flex justify-between items-center py-4">
          <div>
            <Search className="w-[16px] h-[16px]" />
          </div>
          <div className="text-custom-h3 font-display ">Avion</div>
          {/* <div className="flex gap-x-4">
          <ShoppingCart className="w-[16px] h-[16px]" />
          <CircleUserRound className="w-[16px] h-[16px]" />
        </div> */}
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
            <CircleUserRound className="w-[16px] h-[16px]" />
          </div>
        </div>
        {/* bar */}
        <hr className="hidden lg:flex" />
        {/* navbars */}
        <ul className="hidden lg:flex text-body-md gap-x-12 text-nav text-center justify-center  items-center h-[22px] pt-8 text-16 ">
          <Link href="/">Plant Pots</Link>
          <Link href="/product-listing">Ceramics</Link>
          <Link href="/product-v3">Tables</Link>
          <Link href="about">Chairs</Link>
          <Link href="/product-landing">Crockery</Link>
          <Link href="/product-listing">Tableware</Link>
          <Link href="/product-v3">Cutlery</Link>
        </ul>
      </main>

      {/* sm view */}
      <div className="lg:hidden h-[64px] flex justify-between items-center mx-4">
        <p className="text-custom-h4">Avion</p>
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
          <Sheet>
            <SheetTrigger>
              <IoMenu />
            </SheetTrigger>
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
    </section>
  );
}
