import Logo from "/Logo_Indodax.png";
import GooglePlay from "/GooglePlay.png";
import AppStore from "/AppStore.png";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative w-full border-t border-neutral-200 p-5 sm:p-10 md:p-15 lg:p-20">
      <div className="flex w-full flex-col-reverse items-center lg:flex-row lg:items-start">
        <div className="mt-20 flex w-11/12 flex-col lg:mt-0">
          <img src={Logo} alt="" className="h-10 w-fit" />
          <p className="mt-6 mb-4 text-lg font-black">
            Investasi #AsetMasaDepan dalam <br />
            Satu Genggaman!
          </p>
          <p className="flex gap-4">
            <img
              src={GooglePlay}
              alt=""
              className="h-10 cursor-pointer bg-white"
            />
            <img
              src={AppStore}
              alt=""
              className="h-10 cursor-pointer bg-white"
            />
          </p>
        </div>
        <div className="flex w-11/12 flex-col">
          <div className="flex w-full">
            {["Company", "Products", "Information"].map((title) => (
              <div
                className="flex flex-1 flex-col gap-4 text-xs sm:text-base"
                key={title}
              >
                <p className="mb-3 font-bold">{title}</p>
                {[
                  {
                    title: "Company",
                    items: ["About Us", "Contact Us", "News"],
                  },
                  {
                    title: "Products",
                    items: ["Academy", "OTC"],
                  },
                  {
                    title: "Information",
                    items: [
                      "Terms and Conditions",
                      "Privacy Policy",
                      "API",
                      "Blog",
                    ],
                  },
                ]
                  .find((item) => item.title === title)
                  ?.items.map((item) => (
                    <p
                      key={item}
                      className="group w-fit relative flex cursor-pointer flex-col overflow-clip hover:underline"
                    >
                      <span className="absolute -translate-y-0 transition-all duration-500 group-hover:-translate-y-[200%]">
                        {item}
                      </span>
                      <span className="relative translate-y-[200%] transition-all duration-500 group-hover:-translate-y-0">
                        {item}
                      </span>
                    </p>
                  ))}
              </div>
            ))}
          </div>
          <div className="mt-20 flex justify-center gap-2">
            {[
              FaFacebook,
              FaInstagram,
              FaYoutube,
              FaTwitter,
              FaLinkedin,
              FaTelegramPlane,
              FaDiscord,
            ].map((Icon, index) => (
              <p
                key={index}
                className="pointer flex aspect-square w-12 cursor-pointer items-center justify-center rounded-full bg-[#1685b5] text-base text-white sm:text-2xl"
              >
                <Icon key={index} />
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none translate-y-20 lg:-translate-y-20">
        <p className="mb-4 text-xl font-extrabold">Jakarta</p>
        <p className="leading-7">
          Gedung Millennium Centennial Center Lt.2, <br />
          Jl. Jend. Sudirman No. Kav 25, Kuningan, <br />
          Jakarta Selatan 12920.
        </p>
        <p className="mt-8 mb-4 text-xl font-extrabold">Bali</p>
        <p className="flex flex-col gap-6 leading-7">
          <p>
            Jl. Sunset Road No. 48 a-b, <br />
            Legian, Kuta, Kabupaten Badung, <br />
            Bali 80361. <br />
          </p>
          <p>
            Tamora Square, Jl. Subak Sari 13, <br />
            Desa Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, <br />
            Bali 80361
          </p>
        </p>
        <p className="mt-10 mb-40 lg:-mb-20 text-sm text-justify">
          Crypto assets trading can be considered a high-risk activity, where
          crypto assets prices are volatile, and can swing wildly, from day to
          day. Please do your own research (DYOR) before making the decision to
          invest in, or to sell crypto assets. INDODAX is not soliciting for
          users to buy or sell crypto assets as an investment or for profit. All
          crypto assets trading decisions should be made independently by the
          user.
        </p>
      </div>

      <p className="absolute w-full bottom-0 left-0 h-20 content-center text-center text-sm">
        Copyright © 2025 PT Indodax Nasional Indonesia. All Right Reserved.
      </p>
    </footer>
  );
};
