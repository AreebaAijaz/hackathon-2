import Image from "next/image";
export default function ProductEmail() {
  return (
    <main className="flex">
      <div>
        <Image src="/Image (1).png" alt="" height={521} width={720} />
      </div>
      <div className="h-[364px] mx-16 flex flex-col py-20 gap-y-4 ">
        <p className="text-custom-h2 font-display">
          Join the club and get the benefits
        </p>
        <p className="text-body-md w-[420px] ">
          Sign up for our newsletter and exclusive offers on new ranges, sales,
          pop-up stores, and more.
        </p>
        <div className="flex pt-52 text-body-md">
          <input
            className="py-2 px-4 text-body-md bg-light-grey h-[56px] w-[354px]"
            type="text"
            placeholder="your@email.com"
          />
          <button className="bg-dark-primary px-4 py-2 h-[56px] w-[118px] text-body-md text-white">
            Sign up
          </button>
        </div>
      </div>
    </main>
  );
}
