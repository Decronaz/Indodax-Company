import { FaBars, FaUser } from "react-icons/fa";
import Logo from "/Logo_Indodax.png";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      className="fixed z-50 flex w-full items-center justify-between px-6 py-4 mix-blend-difference invert"
      initial={{ y: -48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <a href="/">
        <img className="w-44 cursor-pointer" src={Logo} />
      </a>
      <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-10 font-medium lg:flex">
        {["About", "Market", "News", "Contacts"].map((title) => (
          <li
            className="group relative flex cursor-pointer flex-col overflow-clip hover:underline"
            key={title}
          >
            <span className="absolute -translate-y-0 transition-all duration-500 group-hover:-translate-y-[200%]">
              {title}
            </span>
            <a
              href={title}
              className="relative translate-y-[200%] transition-all duration-500 group-hover:-translate-y-0"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <p className="group relative hidden cursor-pointer items-center justify-center overflow-hidden rounded-md border-2 border-[#1685b5] bg-[#1685b5] px-4 py-2 text-white shadow transition-all duration-300 hover:scale-105 sm:flex">
          <span className="absolute aspect-square w-[0%] rounded-full bg-white transition-all duration-300 group-hover:w-[120%]"></span>
          <span className="z-10 text-white transition-all duration-300 group-hover:text-black">
            Sign In
          </span>
        </p>
        <p className="hidden aspect-square h-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#1685b5] bg-white text-[#1685b5] shadow-[inset_0_0_0_1px_white,_inset_0_0_0_2px_#1685b5] transition-all duration-300 hover:scale-105 hover:brightness-125 sm:flex">
          <FaUser size={20} />
        </p>
        <FaBars size={24} className="flex text-neutral-500 lg:hidden" />
      </div>
    </motion.header>
  );
};
