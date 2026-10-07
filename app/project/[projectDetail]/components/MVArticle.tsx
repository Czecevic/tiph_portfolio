"use client";

import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

import { NavBarSimulation } from "./NavBarSimulation";
import { TopNavBarSimulation } from "./TopNavBarSimulation";
import { FooterWireFrame } from "./FooterWireFrame";

import nysos from "@/public/data/img/Nysos/logo_ecrit.png";
import totebag from "@/public/data/img/Nysos/app_Nysos/totebag_logo.jpg";
import pantalon from "@/public/data/img/Nysos/app_Nysos/pantalon.jpg";
import tshirtLogo from "@/public/data/img/Nysos/app_Nysos/t-shirt_blanc.jpg";
import sopranos from "@/public/data/img/Nysos/app_Nysos/t-shirt_1.jpg";
import pullVert from "@/public/data/img/Nysos/app_Nysos/veste_verte.jpg";
import serigraphie_1 from "@/public/data/img/Nysos/app_Nysos/serigraphie.png";
import serigraphie_2 from "@/public/data/img/Nysos/app_Nysos/serigraphie_2.png";

// Types
interface IllustrationItem {
  id: number;
  name: string;
  link: StaticImageData;
  add: string;
}

interface CollectionCarouselProps {
  title: React.ReactNode;
  items: IllustrationItem[];
}

// Données statiques
const FIRST_ILLUSTRATIONS: IllustrationItem[] = [
  {
    id: 0,
    name: "totebag - logo",
    link: totebag,
    add: "Collection de vêtements",
  },
  {
    id: 1,
    name: "pantalon - logo",
    link: pantalon,
    add: "Personnalisation",
  },
];

const MIDDLE_ILLUSTRATIONS: IllustrationItem[] = [
  {
    id: 0,
    name: "tshirt - logo",
    link: tshirtLogo,
    add: "Pull - Mask off Price",
  },
  {
    id: 1,
    name: "tshirt - sopranos",
    link: sopranos,
    add: "T shirt - The Sopranos Price",
  },
  {
    id: 2,
    name: "pull",
    link: pullVert,
    add: "Name of the article Price",
  },
];

const SERIGRAPHIE_ILLUSTRATIONS: IllustrationItem[] = [
  {
    id: 0,
    name: "serigraphie 1",
    link: serigraphie_1,
    add: "Headache",
  },
  {
    id: 1,
    name: "serigraphie 2",
    link: serigraphie_2,
    add: "Sad moon",
  },
];

const CATEGORIES = ["Vêtements", "Sac - totebag", "Accessoires"];

const Separator = () => (
  <span className="block w-[90%] h-px bg-black mx-auto my-4"></span>
);

const CollectionCarousel = ({ title, items }: CollectionCarouselProps) => (
  <div className="flex gap-4 px-3 py-2">
    <div className="shrink-0 w-1/3">
      {title}
      <h1 className="font-bold text-[10px] mt-2 cursor-pointer flex items-center gap-1 hover:underline">
        Voir tout <span>&#8594;</span>
      </h1>
    </div>

    <div className="flex overflow-x-auto gap-3 scrollbar-none snap-x snap-mandatory w-2/3 py-1">
      {items.map((illu) => (
        <div key={illu.id} className="shrink-0 w-36 snap-start">
          <Image
            src={illu.link}
            alt={illu.name}
            width={400}
            height={400}
            className="object-cover w-full h-36 rounded"
          />
          <p className="underline text-xs mt-1 font-bold truncate">
            {illu.add}
          </p>
          <p className="text-[10px]">Price</p>
        </div>
      ))}
    </div>
  </div>
);

const NewsletterSection = () => (
  <section className="p-3 bg-gray-50 rounded my-4">
    <h3 className="font-bold text-sm mb-1">Souscrire à la newsletter</h3>
    <p className="text-[9px] text-gray-600 mb-3">
      Afin de découvrir en avant-première les sorties limitées et nos nouvelles
      collections.
    </p>
    <form onSubmit={(e) => e.preventDefault()} className="relative">
      <input
        type="email"
        placeholder="e-mail"
        className="w-full border-b-2 border-black bg-transparent px-2.5 py-1.5 text-[10px] focus:outline-none pr-8"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
        aria-label="S'abonner"
      >
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </form>
  </section>
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
