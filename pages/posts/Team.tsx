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
                  The team is compose of 5 member. The founder, 2 artists as
                  well as a developer and a co-founder. Their goal is to create
                  a ecosystem around their high quality pixel art Gulo
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-y-36 content-center pb-52 w-full max-lg:grid-cols-1">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              className="flex justify-center min-h-[350px] h-full"
            >
              <div className="drop-shadow-lg bg-gradient-to-b from-[#768802] via-[#5D7100] to-[#34593A] px-10 pb-[450px] rounded-3xl">
                <p className="relative text-center bg-black bg-opacity-20 rounded-full z-30 w-80 right-40 left-0 top-2 flex justify-center mt-2 max-[455px]:w-72">
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
                  className="absolute w-80 border-[10px] border-[#768802] z-20  mt-5 rounded-xl shadow-xl gulo"
                  src="/images/gulo/904.png"
                  alt=""
                />
                <img
                  className="h-[385px] absolute top-11 -mt-1 cursor-pointer z-20  max-[1210px]:-mt-2 borderLiane"
                  onClick={handleClick}
                  src="/images/Border/1.png"
                  alt=""
                />

                <img
                  className="absolute top-[390px] left-[85px] mt-1 mb-3 w-56 z-20 max-[455px]:top-[370px] max-[455px]:left-[72px]"
                  src="/images/founder.png"
                  alt=""
                />
                {/*  <div
                  className={`box ${
                    showFirst ? "expanded" : isCollapsed ? "collapsed" : ""
                  }`}
                >
                  <div className="relative h-[650px] max-[600px]:h-[675px] max-[455px]:h-[720px] rounded-3xl">
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-[#768802] via-[#5D7100] to-[#34593A] z-0 rounded-3xl">
                      <div className="flex justify-center w-full mt-44 ml-[100px] max-[1210px]:ml-[110px]">
                        <div className="-ml-52 mt-[200px] w-[420px] text-center description max-[600px]:-ml-56">
                          <img
                            className="ml-[95px] mt-1 mb-3 w-56 max-[1210px]:ml-[95px] max-[600px]:ml-[73px] max-[455px]:ml-[40px]"
                            src="/images/founder.png"
                            alt=""
                          />

                          <p className="text-sm mt-12">
                            Founder of the Gulo nft project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              className="flex justify-center min-h-[350px] h-full"
            >
              <div className="drop-shadow-lg bg-gradient-to-b from-[#768802] via-[#5D7100] to-[#34593A] px-10 pb-[450px] rounded-3xl">
                <p className="relative text-center bg-black bg-opacity-20 rounded-full z-20 w-80 right-40 left-0 top-2 flex justify-center mt-2 max-[455px]:w-72">
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
                  className="absolute w-80 border-[10px] border-[#768802] z-20 mt-5 rounded-xl shadow-xl gulo"
                  src="/images/gulo/7.png"
                  alt=""
                />
                <img
                  className="h-[385px] absolute top-11 -mt-2 z-20 max-[455px]:-mt-[15px] max-[455px]:h-[345px] borderLiane"
                  onClick={handleClick2}
                  src="/images/Border/2.png"
                  alt=""
                />

                <img
                  className="absolute top-[390px] left-[85px] mt-1 mb-3 w-56 z-20 max-[455px]:top-[370px] max-[455px]:left-[72px]"
                  src="/images/nostroid.png"
                  alt=""
                />
                {/* <div
                  className={`box ${
                    showFirst2 ? "expanded" : isCollapsed2 ? "collapsed" : ""
                  }`}
                >
                  <div className="relative h-[650px] max-[600px]:h-[675px] max-[455px]:h-[720px] rounded-3xl">
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-[#768802] via-[#5D7100] to-[#34593A] rounded-3xl z-0">
                      <div className="flex justify-center w-full mt-44 ml-[100px] max-[1210px]:ml-[110px]">
                        <div className="-ml-52 mt-[200px] w-[420px] text-center description max-[600px]:-ml-56">
                          <img
                            className="ml-[95px] mt-1 mb-3 w-56 max-[1210px]:ml-[95px] max-[600px]:ml-[73px] max-[455px]:ml-[37px]"
                            src="/images/nostroid.png"
                            alt=""
                          />

                          <p className="text-sm mt-12">
                            A group of web 3 artists focused on providing
                            efficient work for the satisfaction of collectors
                            and degenerates alike.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              className="flex justify-center min-h-[350px] h-full"
            >
              <div className="bg-gradient-to-b from-[#69B3F0] via-[#458fd4] to-[#484A77] px-10 pb-[382.5px] rounded-3xl">
                <p className="relative text-center bg-black bg-opacity-20 rounded-full z-20 w-80 right-40 left-0 top-2 flex justify-center mt-2 max-[455px]:w-72">
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
                  className="absolute w-80 border-[10px] border-[#69B3F0] z-20 mt-5 rounded-xl shadow-xl gulo"
                  src="/images/gulo/1367.png"
                  alt=""
                />
                <img
                  className="h-[385px] absolute top-11 -mt-4 cursor-pointer z-20 borderLiane"
                  onClick={handleClick3}
                  src="/images/Border/3.png"
                  alt=""
                />

                <img
                  className="relative top-[370px] left-[40px] mt-1 mb-3 w-56 z-20 max-[455px]:top-[345px] max-[455px]:left-[32px]"
                  src="/images/developer2.png"
                  alt=""
                />
                {/*  <div
                  className={`box ${
                    showFirst3 ? "expanded" : isCollapsed3 ? "collapsed" : ""
                  }`}
                >
                  <div className="relative h-[650px] max-[600px]:h-[675px] max-[455px]:h-[720px] rounded-3xl">
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-[#69B3F0] via-[#458fd4] to-[#484A77] rounded-3xl z-0">
                      <div className="flex justify-center w-full mt-44 ml-[100px] max-[1210px]:ml-[110px]">
                        <div className="-ml-52 mt-[200px] w-[420px] text-center description max-[600px]:-ml-56">
                          <img
                            className="ml-[95px] mt-1 mb-3 w-56 max-[1210px]:ml-[95px] max-[600px]:ml-[73px] max-[455px]:ml-[37px]"
                            src="/images/developer2.png"
                            alt=""
                          />

                          <p className="text-sm mt-12">
                            Full time web3 developer aiming to build smart
                            contract and websites for nft projects. Also sharing
                            other spots like mods and premint hunter.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>*/}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              className="flex justify-center min-h-[350px] h-full"
            >
              <div className="bg-gradient-to-b from-[#e47097] via-[#A24B6F] to-[#5a2e40] px-10 pb-[382.5px] rounded-3xl">
                <p className="relative text-center bg-black bg-opacity-20 rounded-full z-20 w-80 right-40 left-0 top-2 flex justify-center mt-2 max-[455px]:w-72">
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
                  className="absolute w-80 border-[10px] border-[#B65776] z-20 mt-5 rounded-xl shadow-xl gulo"
                  src="/images/gulo/83.png"
                  alt=""
                />
                <img
                  className="h-[385px] absolute top-11 -mt-5 cursor-pointer z-20 borderLiane"
                  onClick={handleClick4}
                  src="/images/Border/4.png"
                  alt=""
                />

                <img
                  className="relative top-[370px] left-[50px] mt-1 mb-3 w-56 z-20 max-[455px]:top-[350px] max-[455px]:left-[32px]"
                  src="/images/artist3.png"
                  alt=""
                />
                {/*  <div
                  className={`box ${
                    showFirst4 ? "expanded" : isCollapsed4 ? "collapsed" : ""
                  }`}
                >
                  <div className="relative h-[650px] max-[600px]:h-[675px] max-[455px]:h-[720px] rounded-3xl">
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-[#e47097] via-[#A24B6F] to-[#5a2e40] rounded-3xl z-0">
                      <div className="flex justify-center w-full mt-44 ml-[100px] max-[1210px]:ml-[110px]">
                        <div className="-ml-52 mt-[200px] w-[420px] text-center description max-[600px]:-ml-56">
                          <img
                            className="ml-[95px] mt-1 mb-3 w-56 max-[1210px]:ml-[95px] max-[600px]:ml-[73px] max-[455px]:ml-[37px]"
                            src="/images/artist3.png"
                            alt=""
                          />

                          <p className="text-sm mt-12">
                            Co-founder, investor and consultant of the project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>*/}
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
