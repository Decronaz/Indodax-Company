import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHeadphonesAlt,
  FaListAlt,
  FaPencilAlt,
} from "react-icons/fa";

export const Contacts = () => {
  return (
    <div className="mt-30 mb-30 flex w-full max-w-3xl flex-col items-center gap-10 md:flex-row">
      <motion.div
        className="flex w-11/12 flex-col rounded p-8 shadow-[0_-20px_14px_-18px_#00000010,_0_20px_14px_-18px_#00000010,_20px_0_14px_-18px_#00000010,_-20px_0_14px_-18px_#00000010] md:w-2/3 md:p-10"
        initial={{ x: -48, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <p className="mb-6 text-2xl font-bold text-[#1685b5]">Email Us</p>
        <input
          type="text"
          className="mb-4 h-10 w-full rounded border border-neutral-200 px-4 outline-none placeholder:text-stone-300"
          placeholder="Full Name"
        />
        <input
          type="email"
          className="mb-4 h-10 w-full rounded border border-neutral-200 px-4 outline-none placeholder:text-stone-300"
          placeholder="example@gmail.com"
        />
        <textarea
          name=""
          id=""
          className="flex h-36 resize-none rounded border border-neutral-200 p-4 outline-none placeholder:text-stone-300"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="mt-4 cursor-pointer rounded border border-neutral-200 bg-[#1685b5] p-3 font-medium text-white transition-all duration-100 hover:brightness-120"
        />
      </motion.div>
      <div className="flex w-10/12 flex-col gap-6 sm:w-2/3 md:w-1/3">
        {[
          { icon: FaHeadphonesAlt, title: "Contact US" },
          { icon: FaListAlt, title: "FAQ" },
          { icon: FaPencilAlt, title: "Blog" },
        ].map(({ icon: Icon, title }) => (
          <motion.div
            key={title}
            className="relative flex aspect-video cursor-pointer flex-col gap-3 overflow-clip rounded-md border-neutral-400 p-5 shadow-[0_-20px_14px_-18px_#00000010,_0_20px_14px_-18px_#00000010,_20px_0_14px_-18px_#00000010,_-20px_0_14px_-18px_#00000010] transition-transform duration-300 hover:scale-105 hover:border"
            initial={{ x: 48, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <Icon size={30} className="text-[#1685b5]" />
            <p className="text-lg font-medium">{title}</p>
            <FaArrowRight
              size={24}
              className="absolute right-8 bottom-8 text-[#1685b5]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
