import type { NextPage } from "next";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Team: NextPage = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [showFirst2, setShowFirst2] = useState(false);
  const [isCollapsed2, setIsCollapsed2] = useState(false);

  const [showFirst3, setShowFirst3] = useState(false);
  const [isCollapsed3, setIsCollapsed3] = useState(false);

  const [showFirst4, setShowFirst4] = useState(false);
  const [isCollapsed4, setIsCollapsed4] = useState(false);

  const handleClick = () => {
    setShowFirst(!showFirst);
    setIsCollapsed(false);
    if (!showFirst) {
      setTimeout(() => setIsCollapsed(true), 500);
    }
  };

  const handleClick2 = () => {
    setShowFirst2(!showFirst2);
    setIsCollapsed2(false);
    if (!showFirst2) {
      setTimeout(() => setIsCollapsed2(true), 500);
    }
  };

  const handleClick3 = () => {
    setShowFirst3(!showFirst3);
    setIsCollapsed3(false);
    if (!showFirst3) {
      setTimeout(() => setIsCollapsed3(true), 500);
    }
  };

  const handleClick4 = () => {
    setShowFirst4(!showFirst4);
    setIsCollapsed4(false);
    if (!showFirst4) {
      setTimeout(() => setIsCollapsed4(true), 500);
    }
  };

  return (
    <div>
      <div className="bg-[#E9EDE6] h-full">
        <Header />

        <div className="bg-[url(https://static.wixstatic.com/media/a67ef4_bead6a0cac024db6a9177a6d4aa2152d~mv2.png)] bg-fixed bg-cover bg-no-repeat">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              viewport={{ once: true }}
              className="bg-black bg-opacity-40 mb-20 px-4 pb-4 rounded-3xl max-[1000px]:w-4/5 flex-col justify-center items-center"
            >
              <div className="flex justify-center">
                <img className="w-96" src="/images/logo.png" alt="" />
              </div>
              <div className="flex justify-center">
                <p className="text-center w-[900px] max-[1000px]:w-[90%]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BTC, making it over 2000 years old.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-y-32 content-center pb-52 w-full max-lg:grid-cols-1">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              className="flex justify-center min-h-[350px] h-full"
            >
              <div className="z-30 drop-shadow-lg">
                <p className="relative text-center bg-black bg-opacity-20 rounded-full z-20 w-80 right-40 left-20 top-2 flex justify-center">
                  Meer
                  <a
                    href="https://twitter.com/qeelows"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="w-7 -mr-4 ml-4 cursor-pointer"
                      src="/images/twitter-green.png"
                      alt=""
                    />
                  </a>
                </p>
                <img
                  className="absolute w-80 border-[10px] border-[#768802] z-20 ml-20 mt-5 rounded-xl shadow-xl"
                  src="/images/gulo.jpg"
                  alt=""
                />
                <img
                  className="h-[385px] absolute top-11 -mt-2 cursor-pointer z-20 ml-20"
                  onClick={handleClick}
                  src="/images/Border/1.png"
                  alt=""
                />
                <div
                  className={`box ${
                    showFirst ? "expanded" : isCollapsed ? "collapsed" : ""
                  }`}
                >
                  <div className="relative h-[650px]">
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-[#768802] via-[#5D7100] to-[#34593A] z-0 px-60 py-[290px] -mt-4 -ml-[0px]">
                      <div className="flex justify-between w-96 -mt-24 -ml-[216px]"></div>
                      <div className="-ml-52 mt-[200px] w-[420px] text-center">
                        <img
                          className="ml-[95px] mb-3 w-56"
                          src="/images/founder.png"
                          alt=""
                        />

                        <p className="text-sm">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              className="flex justify-center min-h-[350px] h-full"
            >
              <div className="z-30 drop-shadow-lg">
                <p className="relative text-center bg-black bg-opacity-20 rounded-full z-20 w-80 right-40 left-20 top-2 flex justify-center">
                  Nostroid Studio
                  <a
                    href="https://twitter.com/NostroidStudios"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="w-7 -mr-4 ml-4 cursor-pointer"
                      src="/images/twitter-green.png"
                      alt=""
                    />
                  </a>
                </p>
                <img
                  className="absolute w-80 border-[10px] border-[#768802] z-20 ml-20 mt-5 rounded-xl shadow-xl"
                  src="/images/gulo.jpg"
                  alt=""
                />
                <img
                  className="h-[385px] absolute top-11 -mt-4 cursor-pointer z-20 ml-20"
                  onClick={handleClick2}
                  src="/images/Border/2.png"
                  alt=""
                />
                <div
                  className={`box ${
                    showFirst2 ? "expanded" : isCollapsed2 ? "collapsed" : ""
                  }`}
                >
                  <div className="relative h-[650px]">
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-[#768802] via-[#5D7100] to-[#34593A] z-0 px-60 py-[290px] -mt-4 -ml-[0px]">
                      <div className="flex justify-between w-96 -mt-24 -ml-[216px]"></div>
                      <div className="-ml-52 mt-[200px] w-[420px] text-center">
                        <img
                          className="ml-[95px] mb-3 w-56"
                          src="/images/nostroid.png"
                          alt=""
                        />

                        <p className="text-sm">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              className="flex justify-center min-h-[350px] h-full"
            >
              <div className="z-30 drop-shadow-lg">
                <p className="relative text-center bg-black bg-opacity-20 rounded-full z-20 w-80 right-40 left-20 top-2 flex justify-center">
                  Digi | Toxic
                  <a
                    href="https://twitter.com/Digi_Toxic"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="w-7 -mr-4 ml-4 cursor-pointer"
                      src="/images/twitter_blue.png"
                      alt=""
                    />
                  </a>
                </p>
                <img
                  className="absolute w-80 border-[10px] border-[#69B3F0] z-20 ml-20 mt-5 rounded-xl shadow-xl"
                  src="/images/gulo.jpg"
                  alt=""
                />
                <img
                  className="h-[385px] absolute top-11 -mt-4 cursor-pointer z-20 ml-20"
                  onClick={handleClick3}
                  src="/images/Border/3.png"
                  alt=""
                />
                <div
                  className={`box ${
                    showFirst3 ? "expanded" : isCollapsed3 ? "collapsed" : ""
                  }`}
                >
                  <div className="relative h-[650px]">
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-[#69B3F0] via-[#458fd4] to-[#484A77] z-0 px-60 py-[290px] -mt-4 -ml-[0px]">
                      <div className="flex justify-between w-96 -mt-24 -ml-[216px]"></div>
                      <div className="-ml-52 mt-[200px] w-[420px] text-center">
                        <img
                          className="ml-[95px] mb-3 w-56"
                          src="/images/developer2.png"
                          alt=""
                        />

                        <p className="text-sm">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              className="flex justify-center min-h-[350px] h-full"
            >
              <div className="z-30 drop-shadow-lg">
                <p className="relative text-center bg-black bg-opacity-20 rounded-full z-20 w-80 right-40 left-20 top-2 flex justify-center">
                  Krakenblack
                  <a
                    href="https://twitter.com/krakenkrakenk"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="w-7 -mr-4 ml-4 cursor-pointer"
                      src="/images/twitter_pink.png"
                      alt=""
                    />
                  </a>
                </p>
                <img
                  className="absolute w-80 border-[10px] border-[#B65776] z-20 ml-20 mt-5 rounded-xl shadow-xl"
                  src="/images/gulo.jpg"
                  alt=""
                />
                <img
                  className="h-[385px] absolute top-11 -mt-5 cursor-pointer z-20 ml-20"
                  onClick={handleClick4}
                  src="/images/Border/4.png"
                  alt=""
                />
                <div
                  className={`box ${
                    showFirst4 ? "expanded" : isCollapsed4 ? "collapsed" : ""
                  }`}
                >
                  <div className="relative h-[650px]">
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-[#e47097] via-[#A24B6F] to-[#5a2e40] z-0 px-60 py-[290px] -mt-4 -ml-[0px]">
                      <div className="flex justify-between w-96 -mt-24 -ml-[216px]"></div>
                      <div className="-ml-52 mt-[200px] w-[420px] text-center">
                        <img
                          className="ml-[95px] mb-3 w-56"
                          src="/images/artist3.png"
                          alt=""
                        />

                        <p className="text-sm">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="pb-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
