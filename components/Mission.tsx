import React from "react";
import { CobeGlobe } from "./Cobeglobe";
import { CheckCheck } from "lucide-react";
import { FollowerPointerCard, TitleComponent } from "./ui/following-pointer";

export default function Mission() {
  return (
    <div className="bg-black py-16">
      <div className="container">
        <FollowerPointerCard title={<TitleComponent title={"Lunion-Lab"} />}>
          <div className="lg:p-16 rounded-[4rem] space-y-6 flex flex-col-reverse md:flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="relative md:5/12 lg:w-1/2">
              <CobeGlobe />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Nos Engagements Clés
              </h2>
              <p className="my-8 ">
                En tant que leaders dans le domaine de la transformation
                numérique, nous comprenons les défis uniques auxquels sont
                confrontées les entreprises. Notre équipe d&apos;experts
                passionnés est là pour vous aider à relever ces défis en vous
                fournissant des solutions innovantes et adaptées à vos besoins.
              </p>
              <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                <div className="pt-4 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex items-center justify-center gap-4 rounded-full bg-indigo-900/20">
                    <CheckCheck />
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-indigo-300">
                      Réaliser leurs ambitions
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      Transformer les aspirations en réussites concrètes.
                    </p>
                  </div>
                </div>
                <div className="pt-4 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex items-center justify-center gap-4 rounded-full bg-indigo-900/20">
                    <CheckCheck />
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-teal-300">
                      Innover les secteurs d&apos;activités
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      Propulser chaque entreprise au sommet de son marché.
                    </p>
                  </div>
                </div>
                <div className="pt-4 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex items-center justify-center gap-4 rounded-full bg-indigo-900/20">
                    <CheckCheck />
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-pink-300">
                      Façonner l&apos;avenir
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      Développer des technologies pour un impact durable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      </div>
    </div>
  );
}
