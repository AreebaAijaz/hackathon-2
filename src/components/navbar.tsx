import { Search, ShoppingCart, CircleUserRound } from "lucide-react";

export default function HomeNav() {
  return (
    <main className="h-[69px] lg:h-[132px] flex-col justify-center items-center px-8">
      {/* header */}
      <div className="flex justify-between items-center py-4">
        <div>
          <Search className="w-[16px] h-[16px]" />
        </div>
        <div className="text-custom-h3 font-display ">Avion</div>
        <div className="flex gap-x-4">
          <ShoppingCart className="w-[16px] h-[16px]" />
          <CircleUserRound className="w-[16px] h-[16px]" />
        </div>
      </div>
      {/* bar */}
      <hr className="hidden lg:flex" />
      {/* navbars */}
      <ul className="hidden lg:flex text-body-md gap-x-8 text-center justify-center items-center h-[22px] pt-8 text-16 text-gray-400">
        <li>Plant Pots</li>
        <li>Ceramics</li>
        <li>Tables</li>
        <li>Chairs</li>
        <li>Crockery</li>
        <li>Tableware</li>
        <li>Cutlery</li>
      </ul>
    </main>
  );
}
