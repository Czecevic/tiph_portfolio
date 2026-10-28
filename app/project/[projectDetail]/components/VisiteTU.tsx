"use client";
import { useState } from "react";
import { PhoneViewer } from "./sous-composant/PhoneViewer";
import type { ImageItem } from "@/interfaces";

export const VisiteTU = ({
  TU,
  TU_2,
}: {
  TU: ImageItem[];
  TU_2: ImageItem[] | undefined;
}) => {
  const [currentStep1, setCurrentStep1] = useState<number>(0);
  const [currentStep2, setCurrentStep2] = useState<number>(0);
  const getHighlightStylePath1 = (index: number) => {
    if (index === 0) return "w-[80%] h-[52%]";
    if (index === 1) return "w-[42%] h-[32%] mr-50";
    return "border-transparent border-none";
  };
  const getHighlightStylePath2 = (index: number) => {
    if (index === 0) return "w-[88%] h-[52%]";
    return "border-transparent border-none";
  };

  return (
    <div>
      <h1 className="font-bold">Tests Utilisateurs</h1>
      <p>Tests de 2 parcours utilisateurs</p>
      <h1 className="font-bold">Tests via maze</h1>
      <p>
        Outil qui permet de tester directement les interfaces en ligne 40
        répondants
      </p>
      <div className="flex sm:flex-row flex-col bg-black">
        <PhoneViewer
          images={TU}
          currentIndex={currentStep1}
          onNext={() => setCurrentStep1((prev) => (prev + 1) % TU.length)}
          getHighlightStyle={getHighlightStylePath1}
        />
        <PhoneViewer
          images={TU_2}
          currentIndex={currentStep2}
          onNext={() => setCurrentStep2((prev) => (prev + 1) % TU_2.length)}
          getHighlightStyle={getHighlightStylePath2}
        />
      </div>

      <h1 className="font-bold mt-3 uppercase">Retours utilisateurs</h1>
      <p>
        “Le site est sobre et la navigation est fluide est agréable. Je trouve
        les catégories logiques.”
      </p>
      <p className="mt-3">
        “Difficile de trouver une catégorie direct sur la page d'accueil, si
        l'on ne clique pas sur collection. [...]”
      </p>
      <p className="mt-3">En moyenne le parcours d’achat : 5,7/7 simplicité</p>
      <p>En moyenne le parcours de personnalisation : 6,5/7 simplicité</p>
      <h1 className="font-bold uppercase mt-3">Axes d’amélioration</h1>
      <p className="mt-3">
        Hiérarchiser mieux la page pour rendre le parcours d’achat plus fluide
      </p>
      <p className="mt-3">
        L’ajout de couleur pourrait rendre le site plus attractif
      </p>
    </div>
  );
};
