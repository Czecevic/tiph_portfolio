"use client";

import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

import { NavBarSimulation } from "./NavBarSimulation";
import { TopNavBarSimulation } from "./TopNavBarSimulation";
import { FooterWireFrame } from "./FooterWireFrame";

import nysos from "@/public/data/img/Nysos/logo_ecrit.png";
import { CollectionCarousel } from "./sous-composant/CollectionCarousel";
import { NewsletterSection } from "./sous-composant/NewsletterSection";
import {
  FIRST_ILLUSTRATIONS,
  MIDDLE_ILLUSTRATIONS,
  CATEGORIES,
  SERIGRAPHIE_ILLUSTRATIONS,
} from "@/public/data/data";

const Separator = () => (
  <span className="block w-[90%] h-px bg-black mx-auto my-4"></span>
);

export const MVArticle = () => {
  return (
    <main className="relative border-2 w-full border-[#7E1114] rounded text-black h-137 flex flex-col justify-between overflow-hidden">
      <TopNavBarSimulation nysos={nysos} />

      <section className="overflow-y-auto flex-1 pb-24">
        <div className="space-y-4 p-3">
          {FIRST_ILLUSTRATIONS.map((illu) => (
            <div key={illu.id}>
              <Image
                src={illu.link}
                alt={illu.name}
                width={400}
                height={400}
                className="object-cover w-full rounded"
              />
              <p className="underline text-xs mt-1 font-bold">{illu.add}</p>
            </div>
          ))}
        </div>

        <Separator />
        <CollectionCarousel
          title={
            <>
              <h1 className="font-bold text-xs leading-tight">Dernières</h1>
              <h1 className="font-bold text-xs leading-tight text-orange-400">
                Collections
              </h1>
            </>
          }
          items={MIDDLE_ILLUSTRATIONS}
        />

        {/* Catégories */}
        <div className="m-5">
          <h1>Catégories</h1>
          {CATEGORIES.map((cat) => (
            <div key={cat}>
              <span className="block w-full h-px bg-black mx-auto m-2"></span>
              <div className="flex flex-row justify-between mx-5">
                <p className="text-xs">{cat}</p>
                <p className="text-xs">&#8594;</p>
              </div>
            </div>
          ))}
        </div>

        {/* À propos */}
        <div className="m-3 font-bold">
          <div className="flex items-center gap-1">
            <h1>A propos de</h1>
            <Image src={nysos} width={50} height={100} alt="logo" />
          </div>
          <p className="text-xs">
            <span className="text-[#303A8F]">Nysos</span> est une marque de
            personnalisation mais également de création de vêtements qui se veut
            éthique et créative avec une véritable vision artistique.{" "}
          </p>
        </div>

        <span className="block w-[90%] h-px bg-black mx-auto m-2"></span>

        {/* Éditions limitées */}
        <CollectionCarousel
          title={
            <>
              <h1 className="font-bold text-xs leading-tight">Editions</h1>
              <h1 className="font-bold text-xs leading-tight">Limités en</h1>
              <h1 className="font-bold text-xs leading-tight text-orange-400">
                sérigraphie
              </h1>
            </>
          }
          items={SERIGRAPHIE_ILLUSTRATIONS}
        />

        <NewsletterSection />

        <FooterWireFrame nysos={nysos} />
      </section>

      <NavBarSimulation />
    </main>
  );
};
