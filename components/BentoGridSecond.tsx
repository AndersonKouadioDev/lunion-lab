import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import secteur_public from "@/public/images/secteur_public.jpg";
import banque from "@/public/images/banque.jpg";
import sante from "@/public/images/sante.jpg";
import industriel from "@/public/images/industriel.jpg";

import Image from "next/image";
import { Building, ClipboardCopy } from "lucide-react";
import { BsBank, BsClipboardHeart } from "react-icons/bs";

export default function Secteurs() {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Les Secteurs d&apos;activités
        </h2>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}

const Skeleton = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex relative flex-1 w-full h-full min-h-[10rem] rounded-xl  border border-transparent dark:border-white/[0.2]">
    {children}
  </div>
);

const items = [
  {
    title: "Secteur Public",
    description:
      "Moderniser ses processus, améliorer la prestation des services et renforcer la sécurité des données.",
    header: (
      <Skeleton>
        <Image
          src={secteur_public}
          fill
          alt="image"
          className="object-cover"
          placeholder="blur"
        />
      </Skeleton>
    ),
    className: "md:col-span-2",
    icon: <ClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Secteur Industriel",
    description:
      "Optimiser la production, réduire les coûts opérationnels et améliorer la qualité des produits grâce à l'automatisation et à l'analyse de données avancées.",
    header: (
      <Skeleton>
        <Image
          src={industriel}
          fill
          alt="image"
          className=" object-cover"
          placeholder="blur"
        />
      </Skeleton>
    ),
    className: "md:col-span-1",
    icon: <Building className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Banque et Assurance",
    description:
      "Optimiser les opérations, améliorer l'expérience client et renforcer la sécurité des transactions financières.",
    header: (
      <Skeleton>
        <Image
          src={banque}
          fill
          alt="image"
          className=" object-cover"
          placeholder="blur"
        />
      </Skeleton>
    ),
    icon: <BsBank className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Santé et Education",
    description:
      "Faciliter l'accès aux soins, améliorer la gestion des dossiers médicaux et optimiser les opérations hospitalières. Proposer des outils innovants pour l'apprentissage en ligne, automatiser les processus administratifs et personnaliser l'expérience éducative des élèves.",
    header: (
      <Skeleton>
        <Image
          src={sante}
          fill
          alt="image"
          className=" object-cover"
          placeholder="blur"
        />
      </Skeleton>
    ),
    icon: <BsClipboardHeart className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
];
