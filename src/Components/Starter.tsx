import { FaPaperPlane } from "react-icons/fa";
import QRcode from "/QRCode.png";

export const Starter = () => {
  return (
    <div className="relative flex h-[598px] w-full flex-col items-center justify-center gap-10">
      <p className="w-10/12 text-left sm:text-center text-3xl font-black sm:text-4xl md:text-5xl lg:text-7xl">
        The Biggest
        <span className="text-[#1685b5]"> Crypto Marketplace</span> In Indonesia
      </p>
      <div className="flex items-center gap-5 text-lg md:gap-10 flex-col md:flex-row">
        <p className="group relative flex cursor-pointer items-center gap-2 overflow-clip rounded-md bg-[#1685b5] px-6 py-3 font-medium text-white shadow-[0_-20px_14px_-18px_#00000010,_0_20px_14px_-18px_#00000010,_20px_0_14px_-18px_#00000010,_-20px_0_14px_-18px_#00000010] transition-all duration-300 hover:scale-110 hover:brightness-125">
          <span className="absolute -left-5 h-20 w-1 -translate-x-full rotate-30 bg-white transition-all duration-300 ease-linear group-hover:left-[calc(100%+1.25rem)] group-hover:translate-x-0" />
          <span className="absolute -left-5 h-20 w-1 -translate-x-full rotate-30 bg-white transition-all delay-50 duration-300 ease-linear group-hover:left-[calc(100%+1.25rem)] group-hover:translate-x-0" />
          Get Started <FaPaperPlane size={16} />
        </p>
        <div className="flex scale-75 cursor-pointer items-center gap-2 rounded border border-transparent bg-neutral-200 px-6 py-3 shadow-[0_-20px_14px_-18px_#00000010,_0_20px_14px_-18px_#00000010,_20px_0_14px_-18px_#00000010,_-20px_0_14px_-18px_#00000010] transition-all duration-300 hover:border-neutral-600 hover:bg-white">
          <img src={QRcode} className="h-10" />
          <div>
            <p className="text-xs">Scan To Download</p>
            <p className="font-bold">iOS & Android</p>
          </div>
        </div>
      </div>
    </div>
  );
};
