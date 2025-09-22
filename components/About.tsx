import React from "react";
import Image from "next/image";
import DesignProcessStep from "@/public/images/team_working.jpg";

export default function About() {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div
            className="lg:pr-8 lg:pt-4 bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(/images/about_back.svg)` }}
          >
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Votre passerelle vers la transformation numérique
              </h2>
              <p className="my-8 ">
                Notre gamme complète de services couvre tous les aspects de la
                transformation numérique, de la consultation stratégique à la
                mise en œuvre technique, en passant par la formation de votre
                équipe. Que vous cherchiez à moderniser vos processus métier, à
                améliorer votre présence en ligne, ou à explorer de nouvelles
                opportunités numériques, Lunion Lab est là pour vous accompagner
                à chaque étape du processus.
              </p>
              <p className="my-8 ">
                Grâce à notre approche centrée sur le client et notre engagement
                envers l&apos;excellence, nous nous assurons que chaque projet
                de transformation digitale est parfaitement adapté aux besoins
                et aux objectifs de nos clients. Avec Lunion Lab à vos côtés,
                vous pouvez être sûr de réaliser une transformation digitale
                réussie et de maintenir votre compétitivité sur le marché
                numérique en constante évolution.
              </p>
            </div>
          </div>
          <div className="w-full min-h-full max-h-[1442px] aspect-square relative">
            <Image
              src={DesignProcessStep}
              alt="Product screenshot"
              className="object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10"
              fill
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
