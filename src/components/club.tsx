export default function Club() {
  return (
    <div className="h-[294px] md:h-[481px] flex justify-center items-center md:bg-border-grey mt-10">
      <div className="container">
        <div className="w-full max-w-screen-xl md:h-[364px] pt-10 flex flex-col lg:justify-center md:items-center gap-y-4 bg-white ">
          <p className="text-custom-h4 font-display ">
            Join the club and get the benefits
          </p>
          <p className="text-body-sm w-[350px] lg:w-[420px] lg:text-center">
            Sign up for our newsletter and exclusive offers on new ranges,
            sales, pop-up stores, and more.
          </p>
          <div className="flex pt-10 pb-20">
            <input
              className="py-2 px-1 text-body-md bg-light-grey"
              type="text"
              placeholder="Enter your Email"
            />
            <button className="bg-dark-primary px-4 py-2 text-body-md text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
