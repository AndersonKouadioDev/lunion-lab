import React from "react";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import DotPattern from "./magicui/dot-pattern";
import { CardWithEffect } from "./ui/CardWithEffect";

const services = [
  {
    title: "Transformation Numérique",
    description:
      "Modernisez vos processus et opérations avec les dernières technologies numériques.",
    items: [
      "Développement d'applications et de logiciels",
      "Consultation en transformation numérique",
      "Migration vers le Cloud",
      "Automatisation des processus",
      "Sécurité et conformité",
    ],
  },
  {
    title: "Marketing",
    description:
      "Boostez la visibilité de vos produits ou services et générez des ventes.",
    items: [
      "Recherche de marché",
      "Publicité",
      "Relations publiques (RP)",
      "Marketing digital",
      "Gestion des réseaux sociaux",
      "Marketing relationnel et événementiel",
    ],
  },
  {
    title: "Communication",
    description:
      "Gérez votre communication interne et externe pour maintenir une image positive.",
    items: [
      "Communication d'entreprise",
      "Communication marketing",
      "Communication digitale",
      "Communication de crise",
      "Communication institutionnelle",
    ],
  },
  {
    title: "Audiovisuel",
    description:
      "Créez des supports visuels attrayants pour atteindre vos objectifs.",
    items: [
      "Production multimédia",
      "Conception graphique et animation",
      "Gestion de projet audiovisuel",
      "Diffusion en direct",
      "Post-production",
      "Consultation et stratégie",
    ],
  },
];

function ServicesItem() {
  return <BentoBox1 />;
}

const BentoBox1 = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 w-full max-w-7xl min-h-[800px] md:min-h-[800px] md:h-[800px]">
      {services.map((service, key: number) => {
        const transformedItems = service.items.map((item, index) => ({
          name: item,
          number: (index + 1).toString(),
        }));
        const items = Array.from({ length: 3 }, () => transformedItems).flat();

        return (
          <CardWithEffect key={key}>
            <div className="flex flex-col justify-center h-full">
              <AnimatedListDemo notifications={items} />
              <div className="text-left p-6">
                <h1 className="text-white text-2xl font-bold mb-2">
                  {service.title}
                </h1>
                <p className="text-white/70 text-lg">{service.description}</p>
              </div>
            </div>
          </CardWithEffect>
        );
      })}
    </div>
  );
};

export default ServicesItem;

export function AnimatedListDemo({
  notifications,
  className,
}: {
  notifications: {
    name: string;
    number: string;
  }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[300px] md:h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList delay={1500}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
      <DotPattern />
    </div>
  );
}

interface Item {
  name: string;
  number: string;
}

const Notification = ({ name, number }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 border items-center justify-center rounded-2xl">
          <span className="text-lg">{number}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};
