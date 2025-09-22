"use client";
import { useState } from "react";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "Quels services proposez-vous ?",
    answer:
      "Nous offrons une gamme complète de services de transformation numérique, y compris le développement d'applications et de logiciels, la migration vers le Cloud, l'automatisation des processus, la sécurité et la conformité. Nous proposons également des services de marketing digital, de communication d'entreprise, et de production audiovisuelle.",
  },
  {
    question:
      "Comment puis-je choisir le package qui convient le mieux à mon entreprise ?",
    answer:
      "Nos packages sont conçus pour répondre à différents besoins et budgets. Le package 'Starter' est idéal pour les petites entreprises ou les projets de démarrage, tandis que les packages 'Business' et 'Corporate' sont plus adaptés aux entreprises de taille moyenne à grande avec des besoins plus complexes. N'hésitez pas à nous contacter pour une consultation afin de déterminer quel package répond le mieux à vos besoins spécifiques.",
  },
  {
    question: "Quels sont les délais de mise en œuvre pour vos services ?",
    answer:
      "Les délais de mise en œuvre varient en fonction de la complexité du projet et du service choisi. En général, nous fournissons des estimations de temps lors de la phase de consultation. Nous nous efforçons toujours de respecter les délais convenus et de vous tenir informé de l'avancement de votre projet.",
  },
  {
    question: "Offrez-vous des services de support après la mise en œuvre ?",
    answer:
      "Oui, nous proposons des services de support après la mise en œuvre pour garantir que tout fonctionne correctement et pour résoudre tout problème éventuel. Notre objectif est de vous assurer une expérience sans souci et de vous aider à maximiser les avantages de nos solutions.",
  },
  {
    question: "Comment puis-je entrer en contact avec vous ?",
    answer:
      "Vous pouvez nous contacter via notre formulaire de contact sur le site web, par email à [votre email], ou par téléphone au [votre numéro de téléphone]. Nous serons ravis de répondre à toutes vos questions et de discuter de vos besoins en détail.",
  },
  {
    question: "Quels types d'entreprises pouvez-vous aider ?",
    answer:
      "Nous travaillons avec des entreprises de toutes tailles et de divers secteurs, y compris le secteur public, industriel, la santé, l'éducation, la banque et l'assurance. Nous adaptons nos solutions en fonction des spécificités de chaque secteur pour répondre au mieux aux défis uniques de nos clients.",
  },
  {
    question: "Proposez-vous des formations pour les équipes ?",
    answer:
      "Oui, nous proposons des formations pour aider vos équipes à s'adapter aux nouvelles technologies et processus. Ces formations peuvent être personnalisées en fonction de vos besoins et de vos objectifs spécifiques.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons divers moyens de paiement, y compris les virements bancaires, les cartes de crédit et les paiements en ligne. Pour plus de détails sur les options disponibles, veuillez nous contacter.",
  },
];

const AccordinationItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-black to-primary ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Questions Fréquemment Posées
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordinationItem
              question={question}
              answer={answer}
              key={question}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
