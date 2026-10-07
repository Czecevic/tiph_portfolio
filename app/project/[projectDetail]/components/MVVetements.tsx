import Image, { StaticImageData } from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

import { TopNavBarSimulation } from "./TopNavBarSimulation";
import { NavBarSimulation } from "./NavBarSimulation";
import { FooterWireFrame } from "./FooterWireFrame";

import nysos from "@/public/data/img/Nysos/logo_ecrit.png";
import tshirtLogo from "@/public/data/img/Nysos/app_Nysos/t-shirt_blanc.jpg";
import sopranos from "@/public/data/img/Nysos/app_Nysos/t-shirt_1.jpg";
import pullVert from "@/public/data/img/Nysos/app_Nysos/veste_verte.jpg";
import pantalonGhibli from "@/public/data/img/Nysos/app_Nysos/pantalon_dragon.jpg";
import veste from "@/public/data/img/Nysos/app_Nysos/veste.jpg";
import super_nana from "@/public/data/img/Nysos/app_Nysos/polos_nana.jpg";

// Types
interface ItemProduct {
  id: number;
  linkImg: StaticImageData;
  title: string;
}

interface ProductCardProps {
  item: ItemProduct;
  className?: string;
  imageClassName?: string;
}

// Données statiques
const FIRST_PRODUCT_ROW: ItemProduct[] = [
  { id: 0, linkImg: sopranos, title: "T shirt - The Sopranos" },
  { id: 1, linkImg: tshirtLogo, title: "Pull - Mask Off" },
];

const SECOND_PRODUCT_ROW: ItemProduct[] = [
  { id: 0, linkImg: pantalonGhibli, title: "Pantalon - Studio Ghibli" },
  { id: 1, linkImg: veste, title: "Veste - Doberman" },
];

const FEATURED_VESTE: ItemProduct = {
  id: 2,
  linkImg: pullVert,
  title: "Veste - Fleurs d'été",
};

const FEATURED_POLO: ItemProduct = {
  id: 3,
  linkImg: super_nana,
  title: "Polos - Super Nanas",
};

// Sous-composants
const ProductCard = ({
  item,
  className = "w-5/12",
  imageClassName = "object-cover w-full rounded",
}: ProductCardProps) => (
  <div className={className}>
    <Image
      src={item.linkImg}
      alt={item.title}
      width={400}
      height={400}
      className={imageClassName}
    />
    <p className="text-xs mt-1 font-bold">{item.title}</p>
    <p className="text-[10px]">Price</p>
  </div>
);

const Pagination = () => (
  <div className="flex items-center justify-center gap-3">
    <button className="border px-1">1</button>
    <button>2</button>
    <button>3</button>
    <button>
      <ArrowRight />
    </button>
  </div>
);

export const MVVetements = () => {
  return (
    <main className="relative border-2 w-full border-[#7E1114] rounded text-black h-137 flex flex-col justify-between overflow-hidden">
      <TopNavBarSimulation nysos={nysos} />

      <section className="overflow-y-auto flex-1 pb-24 mx-3">
        <h1 className="font-bold">Vêtements</h1>
        <span className="block w-full h-px bg-black mb-2"></span>
        <div className="flex justify-between items-center">
          <p className="text-[10px] underline font-bold">Trier par :</p>
          <div className="flex items-center">
            <p className="text-[10px]">Plus récent</p>
            <ChevronDown />
          </div>
        </div>
        <div className="flex flex-row flex-wrap space-y-4 gap-1 justify-between">
          {FIRST_PRODUCT_ROW.map((picture) => (
            <ProductCard key={picture.id} item={picture} />
          ))}

          <Image
            src={FEATURED_VESTE.linkImg}
            alt={FEATURED_VESTE.title}
            width={400}
            height={400}
            className="object-cover w-full h-72 rounded m-0 p-0"
          />
          <div className="flex flex-col">
            <p className="text-xs mt-1 font-bold">{FEATURED_VESTE.title}</p>
            <p className="text-[10px]">Price</p>
          </div>
        </div>

        {/* Seconde section produits */}
        <div className="flex flex-row flex-wrap space-y-4 gap-1 justify-between">
          {SECOND_PRODUCT_ROW.map((picture) => (
            <ProductCard key={picture.id} item={picture} />
          ))}

          <Image
            src={FEATURED_POLO.linkImg}
            alt={FEATURED_POLO.title}
            width={400}
            height={100}
            className="object-cover w-full h-50 rounded m-0 p-0"
          />
          <div className="flex flex-col">
            <p className="text-xs mt-1 font-bold">{FEATURED_POLO.title}</p>
            <p className="text-[10px]">Price</p>
          </div>
        </div>

        <Pagination />

        <span className="block w-[90%] h-px bg-black mx-auto m-2"></span>
        <FooterWireFrame nysos={nysos} />
      </section>

      <NavBarSimulation />
    </main>
  );
};
