import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const About: NextPage = () => {
  return (
    <div>
      <div className="bg-[#E9EDE6] h-full">
        <Header />

        <div className="bg-[url(https://static.wixstatic.com/media/a67ef4_bead6a0cac024db6a9177a6d4aa2152d~mv2.png)] bg-fixed bg-cover bg-no-repeat max-lg:h-[1200px] max-[785px]:h-[1300px] max-[660px]:h-[1400px] max-[540px]:h-[1500px] max-[470px]:h-[1600px]  max-[400px]:h-[1650px]">
          <div className="flex justify-evenly mb-40 max-lg:flex-col">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              className="relative flex flex-col justify-center mt-6 max-lg:flex-row"
            >
              <p className="flex flex-col justify-end text-center w-[600px] bg-[#191d05] bg-opacity-70 rounded-3xl pt-24 pb-4 px-4 mt-10 max-[1351px]:text-[14px] max-[1100px]:w-[500px] max-lg:w-5/6">
                Gulo Valley is an NFT project focused on building utility
                through art, community, lore and experience. Hidden deep within
                the heart of Gulo Valley consists of 2,222 vicious but cute
                pixelated wolverines Gulo join as they venture on a journey
                setting out to protect their homeland, hunt prey and search for
                resources.
                <br /> <br /> Following the journey expressed through pixel art
                we hope to form a tight knit community built through networking,
                opportunities and most importantly friendships. Holders will
                have access to a token-gated sub community with access to alpha,
                tools and more. We hope to use methods such as art and staking
                to continue the story and also use it to provide benefits such
                as regular giveaways.
              </p>

              <img
                className="absolute w-full h-[100px] left-0 top-6 max-lg:w-[85%] max-lg:left-[7.5%]"
                src="/images/Border/x2.png"
                alt=""
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              className="w-[50%] mt-16 border-[3px] border-[#34593A] max-[1351px]:w-[40%] max-lg:w-full max-lg:border-0"
            >
              <div className="overflow-x-hidden">
                <Marquee gradient={false} speed={200}>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-b-3xl"
                      src="/images/gulo/15.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-b-3xl"
                      src="/images/gulo/20.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-b-3xl"
                      src="/images/gulo/21.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-b-3xl"
                      src="/images/gulo/47.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-b-3xl"
                      src="/images/gulo/49.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-b-3xl"
                      src="/images/gulo/56.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-b-3xl"
                      src="/images/gulo/82.png"
                      alt=""
                    />
                  </div>
                </Marquee>
              </div>

              <div className="overflow-x-hidden rounded-3xl">
                <Marquee
                  gradient={false}
                  speed={200}
                  direction="right"
                  className="mt-[41.5px] max-[1100px]:mt-[51.5px]"
                >
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-3xl"
                      src="/images/gulo/94.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-3xl"
                      src="/images/gulo/126.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-3xl"
                      src="/images/gulo/132.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-3xl"
                      src="/images/gulo/144.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-3xl"
                      src="/images/gulo/152.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-3xl"
                      src="/images/gulo/400.png"
                      alt=""
                    />
                  </div>
                </Marquee>
              </div>

              <div className="overflow-x-hidden max-lg:hidden">
                <Marquee
                  gradient={false}
                  speed={200}
                  className="mt-[41.5px] max-[1100px]:mt-[51.5px]"
                >
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-t-3xl"
                      src="/images/gulo/1816.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-t-3xl"
                      src="/images/gulo/GULOGENESISDING.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-t-3xl"
                      src="/images/gulo/IMG_3048.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-t-3xl"
                      src="/images/gulo/JIANG_CHI.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-t-3xl"
                      src="/images/gulo/JIANGCHI1.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-t-3xl"
                      src="/images/gulo/SPACESUIT.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-[60px] w-48 max-[1351px]:w-40 max-[1100px]:w-44 max-lg:w-40 max-[470px]:w-36">
                    <img
                      className="rounded-t-3xl"
                      src="/images/gulo/VALK.png"
                      alt=""
                    />
                  </div>
                </Marquee>
              </div>
            </motion.div>
          </div>
          <div className="-mt-5">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
