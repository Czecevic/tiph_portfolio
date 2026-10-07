"use client";

import {
  MessageSquare,
  Heart,
  ShoppingBag,
  ArrowRight,
  Home,
} from "lucide-react";
import nysos from "@/public/data/img/Nysos/logo_ecrit.png";
import Image from "next/image";
import { FooterWireFrame } from "./FooterWireFrame";
import { NavBarSimulation } from "./NavBarSimulation";
import { TopNavBarSimulation } from "./TopNavBarSimulation";

interface CollectionProps {
  title: string;
}

const CATEGORIES = ["VÊTEMENTS", "SAC - TOTE BAG", "ACCESSOIRES"];

function CollectionSection({ title }: CollectionProps) {
  return (
    <section className="p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-sm leading-tight">{title}</h3>
        <a
          href="#"
          className="text-[10px] text-black hover:underline flex items-center gap-1"
        >
          Voir tout <ArrowRight className="w-2.5 h-2.5 inline" />
        </a>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
        <div className="shrink-0 w-32">
          <div className="w-full h-40 bg-[#D9D9D9] rounded-sm mb-1" />
          <p className="text-[9px] font-medium leading-tight">
            Nom de l'article
          </p>
          <p className="text-[9px] text-gray-500">Prix</p>
        </div>
        <div className="shrink-0 w-32">
          <div className="w-full h-40 bg-[#D9D9D9] rounded-sm mb-1" />
          <p className="text-[9px] font-medium leading-tight">
            Nom de l'article
          </p>
          <p className="text-[9px] text-gray-500">Prix</p>
        </div>
      </div>
    </section>
  );
}

export default function WireframeMobile() {
  return (
    <div className="relative w-full max-w-95 mx-auto bg-white border border-gray-300 rounded-2xl shadow-xl overflow-hidden font-sans text-gray-800 text-xs">
      <TopNavBarSimulation nysos={nysos} />
      <main className="relative divide-y divide-gray-100 overflow-hidden">
        <section className="p-3 border-0">
          <div className="w-full h-48 bg-[#D9D9D9] flex items-center justify-center rounded-sm" />
          <p className="mt-2 text-[10px] text-black font-medium underline">
            Collection de vêtements
          </p>
        </section>

        <section className="absolute z-10 w-4/5 flex justify-around items-center py-1 mx-5 backdrop-blur-xs rounded-md">
          <button
            className="p-1 text-gray-600 hover:text-black"
            aria-label="Accueil"
          >
            <Home className="w-4 h-4" />
          </button>
          <button
            className="p-1 text-gray-600 hover:text-black"
            aria-label="Messages"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
          <button
            className="p-1 text-gray-600 hover:text-black"
            aria-label="Favoris"
          >
            <Heart className="w-4 h-4" />
          </button>
          <button
            className="p-1 text-gray-600 hover:text-black"
            aria-label="Panier"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </section>

        <section className="p-3">
          <div className="w-full h-44 bg-[#D9D9D9] rounded-sm mb-2" />
          <p className="text-[10px] text-black font-medium underline">
            Personnalisation
          </p>
        </section>

        <CollectionSection title="Dernière collection" />

        <section className="p-3">
          <h3 className="font-bold text-sm mb-3 border-b pb-1">Catégories</h3>
          <div className="space-y-2">
            {CATEGORIES.map((cat) => (
              <a
                key={cat}
                href="#"
                className="flex items-center justify-between p-2.5 border-black border-b text-[11px] font-medium tracking-wide hover:bg-gray-50"
              >
                <span>{cat}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
              </a>
            ))}
          </div>
        </section>

        <section className="p-3 border-0">
          <div className="flex flex-row items-center gap-2 mb-1">
            <h3 className="font-bold text-sm">À propos de</h3>
            <Image
              src={nysos}
              width={120}
              height={30}
              alt="logo Nysos"
              className="w-16 h-auto object-contain"
            />
          </div>
          <p className="text-[10px] text-black font-bold mb-2">
            Nysos est une marque de personnalisation et création de vêtements
            éthique et créative.
          </p>
          <a
            href="#"
            className="text-[10px] font-medium flex items-center gap-1"
          >
            Découvrir notre histoire{" "}
            <ArrowRight className="w-2.5 h-2.5 inline" />
          </a>
        </section>

        <CollectionSection title="Éditions limitées en sérigraphie" />

        <section className="p-3">
          <h3 className="font-bold text-sm mb-1">Souscrire à la newsletter</h3>
          <p className="text-[9px] text-black mb-3">
            Afin de découvrir en avant-première les sorties limitées et nos
            nouvelles collections.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <input
              type="email"
              placeholder="e-mail"
              className="w-full border-b-2 border-black px-2.5 py-1.5 text-[10px] focus:outline-none pr-8"
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

        <FooterWireFrame nysos={nysos} />
      </main>
      <NavBarSimulation />
    </div>
  );
}
