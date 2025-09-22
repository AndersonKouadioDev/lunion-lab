"use client";

import { useState } from "react";

interface PricingTabProps {
  yearly: boolean;
  popular?: boolean;
  planName: string;
  price: {
    monthly: number;
    yearly: number;
  };
  planDescription: string;
  features: string[];
}

export function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full `}>
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-black border border-white/30 shadow shadow-black/80">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Plus Populaire
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-white/70 font-semibold mb-1">
            {props.planName}
          </div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-white/70 font-bold text-3xl">$</span>
            <span className="text-white/50 font-bold text-4xl">
              {props.yearly ? props.price.yearly : props.price.monthly}
            </span>
            <span className="text-white/70 font-medium">/mo</span>
          </div>
          <div className="text-sm text-white/70 mb-5">
            {props.planDescription}
          </div>
          <a
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-primary px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#5D2CA2] focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150"
            href="#0"
          >
            Acheter le package
          </a>
        </div>
        <div className="text-slate-200 font-medium mb-3">Inclus:</div>
        <ul className="text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <div>
      {/* Pricing toggle */}
      <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
        <div className="relative flex w-full p-1 bg-black rounded-full">
          <span
            className="absolute inset-0 m-1 pointer-events-none"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/2 bg-primary rounded-full shadow-sm shadow-primary transform transition-transform duration-150 ease-in-out ${
                isAnnual ? "translate-x-0" : "translate-x-full"
              }`}
            ></span>
          </span>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              isAnnual ? "text-white/70" : " text-white"
            }`}
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
          >
            Annuel{" "}
            <span
              className={`${
                isAnnual
                  ? "text-indigo-200"
                  : "text-slate-400 dark:text-slate-500"
              }`}
            >
              -20%
            </span>
          </button>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              isAnnual ? "text-white/70" : " text-white"
            }`}
            onClick={() => setIsAnnual(false)}
            aria-pressed={isAnnual}
          >
            Semestriel
          </button>
        </div>
      </div>

      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
        {/* Pricing tab 1 */}
        <PricingTab
          yearly={isAnnual}
          planName="Starter"
          price={{ yearly: 286.4, monthly: 333 }}
          planDescription="Il existe de nombreuses variantes disponibles, mais la majorité ont souffert."
          features={[
            "Création d'un site web vitrine",
            "Gestion des réseaux sociaux pour une plateforme (choix du client)",
            "Optimisation de base pour les moteurs de recherche (SEO)",
            "Création d'une vidéo promotionnelle de base (30 secondes)",
          ]}
        />

        {/* Pricing tab 2 */}
        <PricingTab
          yearly={isAnnual}
          popular={true}
          planName="Business"
          price={{ yearly: 668, monthly: 835 }}
          planDescription="Il existe de nombreuses variantes disponibles, mais la majorité ont souffert."
          features={[
            "Site web personnalisé avec fonctionnalités avancées (e-commerce, formulaires interactifs, etc.)",
            "Gestion de contenu pour deux plateformes de médias sociaux",
            "Stratégie de marketing numérique complète (SEO, SEA, médias sociaux)",
            "Création de contenu audiovisuel régulier (vidéos promotionnelles, témoignages clients, tutoriels)",
          ]}
        />

        {/* Pricing tab 3 */}
        <PricingTab
          yearly={isAnnual}
          planName="Corporate"
          price={{ yearly: 1062.4, monthly: 1328 }}
          planDescription="Il existe de nombreuses variantes disponibles, mais la majorité ont souffert."
          features={[
            "Développement d'une application mobile, application web sur mesure et Progiciel de gestion intégré",
            "Campagnes publicitaires multi-canaux avec suivi analytique approfondi",
            "Stratégie de communication intégrée (relations publiques, gestion de crise)",
            "Production audiovisuelle professionnelle (spots publicitaires, documentaires, interviews haut de gamme)",
          ]}
        />
      </div>
    </div>
  );
}
