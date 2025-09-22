"use client";
import HelixImage from "@/assets/images/helix2.png";
import EmojiImage from "@/assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RushBackground from "./background/RushBackground";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <div className="relative min-h-screen text-white py-[72px] sm:py-24" ref={containerRef}>
      <div className="z-[2] container max-w-xl relative overflow-hidden">
        <motion.div style={{ translateY }}>
          <Image
            src={HelixImage}
            alt="helix"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={EmojiImage}
            alt="emoji"
            className="absolute -top-[120px] right-[calc(100%+30px)]"
          />
        </motion.div>

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Prêt à transformer votre entreprise ?
        </h2>
        <p className="text-xl text-white/70  mt-5">
          Rejoignez les centaines d&apos;entreprises qui prospèrent déjà dans le
          monde numérique grâce à nos services experts. Que vous ayez besoin
          d&apos;un nouveau site web, de marketing digital ou de développement
          de logiciels sur mesure, nous sommes là pour vous aider à réussir.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="karthikmudunuri999@gmail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Commencez
          </button>
        </form>
      </div>
      <RushBackground />
      <div className="absolute z-[1] inset-0 w-full h-full bg-gradient-to-t opacity-80 from-[black_50%] to-transparent" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-0.5 w-full absolute bottom-0 z-[1]"
        viewBox="0 0 1367.743 181.155"
      >
        <path
          className="fill-current text-gray-100 dark:text-gray-900"
          id="wave"
          data-name="wave"
          d="M-100,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
          transform="translate(1.743 66.155)"
        ></path>
      </svg>
    </div>
  );
};
