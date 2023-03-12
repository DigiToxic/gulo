import React, { useState, useEffect } from "react";
import Link from "next/link";

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function MobileNav({ open }: MobileNavProps) {
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    // Render the MobileNav component only after mounting on the client-side
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <div
      className={`absolute top-0 bottom-0 right-0 h-screen w-[35%] z-20 bg-[#a2be8d] transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-start items-start mt-10 p-5">
        <a className="my-4 border-b border-black w-full">
          <Link href="/posts/Team">
            <p className="text-base mb-4">Team</p>
          </Link>
        </a>
        <a className="my-4 border-b border-black w-full">
          <Link href="/posts/About">
            <p className="text-base mb-4">About</p>
          </Link>
        </a>
        <a className="my-4 border-b border-black w-full">
          <Link href="/posts/Mint">
            <p className="text-base mb-4">Mint</p>
          </Link>
        </a>

        <img
          src="/images/header/pixel-etherscan.png"
          className="w-16 my-2 cursor-pointer"
          alt=""
        />
        <img
          src="/images/header/pixel-opensea.png"
          className="w-16 my-2 cursor-pointer"
          alt=""
        />
        <img
          src="/images/header/pixel-twitter.png"
          className="w-16 my-2 cursor-pointer"
          alt=""
        />
        <img
          src="/images/header/pixel-discord.png"
          className="w-16 my-2 cursor-pointer"
          alt="discord"
        />
      </div>
    </div>
  ) : null;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden max-lg:contents">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <div
          className="group z-50 relative w-8 h-6 mr-10 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}
