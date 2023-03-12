import React, { useState } from "react";
import type { NextPage } from "next";
import Header from "./components/Header";
import { motion } from "framer-motion";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-[#E9EDE6] h-screen">
        <Header />

        <div className="bg-[url(https://static.wixstatic.com/media/a67ef4_ddd40c4460fc4baebf33a23ca4d869ca~mv2.png)] bg-cover bg-center bg-no-repeat">
          <div className="container">
            <div className="middle"></div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <Image className="logo" src="/images/logo.png" alt="logo" />
        </motion.div>
      </div>
    </div>
  );
};
export default Home;
