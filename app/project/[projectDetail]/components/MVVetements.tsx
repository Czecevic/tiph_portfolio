import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { TopNavBarSimulation } from "./TopNavBarSimulation";
import { NavBarSimulation } from "./NavBarSimulation";
import { FooterWireFrame } from "./FooterWireFrame";

import nysos from "@/public/data/img/Nysos/logo_ecrit.png";
import { ProductCard } from "./sous-composant/ProductCard";
import { Pagination } from "./sous-composant/Pagination";
import {
  FIRST_PRODUCT_ROW,
  FEATURED_VESTE,
  FEATURED_POLO,
  SECOND_PRODUCT_ROW,
} from "@/public/data/data";

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
