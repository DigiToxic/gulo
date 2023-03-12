import type { NextPage } from "next";
import Image from "next/image";

const Footer: NextPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-2/5 border-t-4 -mt-6 max-sm:w-2/6"></div>
        <Image className="w-24 -mt-12" src="/images/logo.png" alt="" />
        <div className="w-2/5 border-t-4 -mt-6 max-sm:w-2/6"></div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className=" ml-[6.5%] max-sm:ml-[8%]">@2023 Gulo</p>
        <div className="flex mr-[6.5%] max-sm:mr-[8%]">
          <Image
            className="w-10 cursor-pointer"
            src="/images/header/pixel-etherscan.png"
            alt=""
          />
          <Image
            className="w-10 cursor-pointer"
            src="/images/header/pixel-opensea.png"
            alt=""
          />
          <Image
            className="w-10 cursor-pointer"
            src="/images/header/pixel-twitter.png"
            alt=""
          />
          <Image
            className="w-10 cursor-pointer"
            src="/images/header/pixel-discord.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
