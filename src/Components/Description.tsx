import { FaChartLine, FaHeadset, FaShieldAlt, FaSmile } from "react-icons/fa";
import IndodaxMedia from "/Indodax_Media.webp";
import { motion } from "framer-motion";

export const Description = () => {
  return (
    <>
      <div className="px-4 sm:px-10 md:px-15 lg:px-20">
        <motion.p
          className="mt-20 h-20 w-full text-3xl font-bold text-[#1685b5] md:text-5xl"
          initial={{ x: -48, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Our Company
        </motion.p>
        <div className="flex w-full flex-col-reverse items-center justify-between gap-15 lg:flex-row">
          <p className="w-full text-justify font-light tracking-wider text-neutral-600 lg:w-1/2">
            {"Indodax is Indonesia's leading cryptocurrency exchange, dedicated to providing a secure and user-friendly platform for buying, selling, and trading a wide range of digital assets. Founded in 2014, the company has rapidly grown to become a trusted name in the blockchain space, serving millions of users with robust security measures and innovative trading features. Indodax is committed to educating the public about cryptocurrencies and promoting their adoption in Indonesia, while continuously enhancing its services to meet the evolving needs of its community. With a focus on transparency, reliability, and customer satisfaction, Indodax aims to empower individuals and businesses to engage in the digital economy confidently."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 48, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
          </p>
          <motion.img
            src={IndodaxMedia}
            className="w-full max-w-112 rounded"
            initial={{ x: 48, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          />
        </div>
      </div>
      <div className="px-4 sm:px-10 md:px-15 lg:px-20">
        <motion.p
          className="mt-20 h-20 w-full text-right text-3xl font-bold text-[#1685b5] md:text-5xl"
          initial={{ x: 48, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Why Choose Us?
        </motion.p>
        <div className="flex w-full flex-col items-center justify-between gap-15 lg:flex-row">
          <div className="grid w-full max-w-105 grid-cols-2 grid-rows-2 gap-6">
            {[
              { icon: FaSmile, title: "User-Friendly Platform" },
              { icon: FaChartLine, title: "Wide Range of Assets" },
              { icon: FaShieldAlt, title: "Robust Security" },
              { icon: FaHeadset, title: "Dedicated Support" },
            ].map(({ icon: Icon, title }, i) => (
              <motion.div
                key={i}
                initial={{ x: -48, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-md p-4 shadow-[0_-20px_14px_-18px_#00000010,_0_20px_14px_-18px_#00000010,_20px_0_14px_-18px_#00000010,_-20px_0_14px_-18px_#00000010]"
              >
                <Icon className="text-4xl text-[#1685b5]" />
                <p className="text-center text-sm font-bold sm:text-base">
                  {title}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-justify font-light tracking-wider text-neutral-600 lg:w-1/2">
            {"At Indodax, we pride ourselves on being a trusted leader in cryptocurrency trading, offering a secure and user-friendly platform that caters to both novice and experienced traders. Our commitment to innovation ensures that users have access to a diverse range of digital assets and advanced trading tools, all while benefiting from competitive fees and robust customer support. With a strong focus on security and regulatory compliance, we strive to create a safe environment for our users to explore and invest in the rapidly evolving world of cryptocurrencies. Choose Indodax for a seamless trading experience and the confidence that comes with a reputable exchange"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 48, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
          </p>
        </div>
      </div>
    </>
  );
};
