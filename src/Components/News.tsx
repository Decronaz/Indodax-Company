import { FaArrowRight } from "react-icons/fa";

export const News = () => {
  return (
    <div className="mt-30 flex w-full max-w-250 overflow-clip rounded-lg shadow-[0_-20px_14px_-18px_#00000010,_0_20px_14px_-18px_#00000010,_20px_0_14px_-18px_#00000010,_-20px_0_14px_-18px_#00000010]">
      <div className="flex w-full flex-col gap-10 p-10">
        <div className="flex justify-between">
          <p className="text-lg font-bold text-[#1685b5] sm:text-2xl">
            Latest News
          </p>
          <p className="flex cursor-pointer items-center gap-2 text-xs font-medium text-[#1685b5] transition-all duration-100 hover:brightness-120 sm:text-lg">
            View More <FaArrowRight />
          </p>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              className="flex aspect-square flex-1 cursor-pointer flex-col gap-3 overflow-clip rounded-md border border-neutral-200 bg-neutral-100 shadow-[0_-20px_14px_-18px_#00000010,_0_20px_14px_-18px_#00000010,_20px_0_14px_-18px_#00000010,_-20px_0_14px_-18px_#00000010] transition-transform duration-300 hover:scale-105"
              key={i}
            >
              <p className="h-3/4 w-full bg-neutral-200"></p>
              <p className="px-5 text-sm">...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
