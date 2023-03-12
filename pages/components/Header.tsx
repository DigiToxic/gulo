import Link from "next/link";
import type { NextPage } from "next";
import Navbar from "./BurgerNav";

const Header: NextPage = () => {
  return (
    <div>
      <header className="flex flex-row justify-between items-center bg-gradient-to-b from-black">
        <div>
          <Link href="/">
            <img className="w-44" src="/images/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="flex flex-row justify-between w-1/3 -mr-14 max-lg:hidden">
          <Link href="/posts/Team">
            <p className="text-base underline">Team</p>
          </Link>
          <Link href="/posts/About">
            <p className="text-base underline">About</p>
          </Link>
          <Link href="/posts/Mint">
            <p className="text-base underline">Mint</p>
          </Link>
        </div>

        <div className="flex flex-row justify-between w-48 mr-12 max-lg:hidden">
          <img
            className="w-14 h-14 cursor-pointer"
            src="/images/header/pixel-etherscan.png"
            alt="etherscan"
          />
          <img
            className="w-14 h-14 cursor-pointer"
            src="/images/header/pixel-opensea.png"
            alt="opensea"
          />
          <img
            className="w-14 h-14 cursor-pointer"
            src="/images/header/pixel-twitter.png"
            alt="twitter"
          />
          <img
            className="w-14 h-14 cursor-pointer"
            src="/images/header/pixel-discord.png"
            alt="discord"
          />
        </div>
        <Navbar />
      </header>
    </div>
  );
};
export default Header;