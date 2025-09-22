"use client";
import CursorImage from "@/assets/images/cursor.png";
import MessageImage from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import HackerBackground from "./background/hackerbg";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="z-[1] absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="z-[1] container relative">
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-5xl sm:text-9xl font-bold tracking-tightner text-center inline-flex">
              Réinventez <br /> Votre Futur
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 max-w-xl">
            Bienvenue chez Lunion Lab, votre partenaire de confiance pour la
            transformation numérique basée à Abidjan. Spécialisée dans
            l&apos;innovation numérique, notre start-up est dédiée à offrir des
            solutions sur mesure aux entreprises, les aidant à prospérer dans un
            monde de plus en plus numérisé.
          </p>
        </div>
        {/* <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div> */}
      </div>
      <HackerBackground className="z-[0] opacity-80" color="hsl(276 86% 57%)" />
    </div>
  );
};
