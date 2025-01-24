export const CoinTable = () => {
  return (
    <div className="w-full sm:px-10 md:px-20 lg:px-30">
      <div className="text-md mt-5 grid w-full overflow-clip rounded-lg shadow-[0_-20px_14px_-18px_#00000010,_0_20px_14px_-18px_#00000010,_20px_0_14px_-18px_#00000010,_-20px_0_14px_-18px_#00000010]">
        <div className="flex h-14 items-center bg-neutral-100 text-sm font-medium">
          <p className="flex-1 px-5">Coin's Name</p>
          <p className="flex-1 px-5">Last Price</p>
          <p className="hidden flex-1 px-5 lg:flex">24 Hours Volume</p>
          <p className="hidden flex-1 px-5 lg:flex">24 Hours Change</p>
          <p className="hidden flex-1 px-5 sm:flex">Chart</p>
        </div>
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="flex cursor-pointer h-14 items-center hover:bg-neutral-100" key={i}>
            <div className="flex flex-1 gap-2 px-5">
              <p className="aspect-square h-8 rounded-full bg-neutral-200"></p>
              ...
            </div>
            <div className="flex flex-1 px-5">...</div>
            <div className="hidden flex-1 px-5 lg:flex">...</div>
            <div className="hidden flex-1 px-5 lg:flex">...</div>
            <div className="mx-5 hidden h-8 flex-1 rounded bg-neutral-200 sm:flex"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
