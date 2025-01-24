import { motion } from "framer-motion";

export const CoinTable = () => {
  return (
    <div className="w-full sm:px-10 md:px-20 lg:px-30">
      <div className="text-md mt-5 grid w-full overflow-clip rounded-lg shadow-[0_-20px_14px_-18px_#00000010,_0_20px_14px_-18px_#00000010,_20px_0_14px_-18px_#00000010,_-20px_0_14px_-18px_#00000010]">
        <motion.div
          className="flex h-14 items-center bg-neutral-100 text-sm font-medium"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <p className="flex-1 px-5">Coin's Name</p>
          <p className="flex-1 px-5">Last Price</p>
          <p className="hidden flex-1 px-5 lg:flex">24 Hours Volume</p>
          <p className="hidden flex-1 px-5 lg:flex">24 Hours Change</p>
          <p className="hidden flex-1 px-5 sm:flex">Chart</p>
        </motion.div>
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            className="flex h-14 cursor-pointer items-center hover:bg-neutral-100"
            key={i}
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <div className="flex flex-1 gap-2 px-5">
              <p className="aspect-square h-8 rounded-full bg-neutral-200"></p>
              ...
            </div>
            <div className="flex flex-1 px-5">...</div>
            <div className="hidden flex-1 px-5 lg:flex">...</div>
            <div className="hidden flex-1 px-5 lg:flex">...</div>
            <div className="mx-5 hidden h-8 flex-1 rounded bg-neutral-200 sm:flex"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
