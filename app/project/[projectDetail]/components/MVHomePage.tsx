"use client";

import Image from "next/image";
import { NavBarSimulation } from "./NavBarSimulation";
import { TopNavBarSimulation } from "./TopNavBarSimulation";
import { FooterWireFrame } from "./FooterWireFrame";
import nysos from "@/public/data/img/Nysos/logo_ecrit.png";

// Images
import tshirt_soprano from "@/public/data/img/Nysos/app_Nysos/t-shirt_1.jpg";
import tshirt_face from "@/public/data/img/Nysos/app_Nysos/t-shirt_face.png";
import tshirt_dos from "@/public/data/img/Nysos/app_Nysos/t-shirt_dos.png";
import tshirt_arriere from "@/public/data/img/Nysos/app_Nysos/t-shirt_arriere.png";
import tshirt_avant from "@/public/data/img/Nysos/app_Nysos/t-shirt_avant.png";
import tiph_with_tshirt from "@/public/data/img/Nysos/app_Nysos/t-shirt_porte.jpg";
import logo_tshirt from "@/public/data/img/Nysos/app_Nysos/logo_t-shirt.png";
import totebag_bob from "@/public/data/img/Nysos/app_Nysos/bob_l'eponge_totebag.jpg";
import veste from "@/public/data/img/Nysos/app_Nysos/veste.jpg";
import veste_verte from "@/public/data/img/Nysos/app_Nysos/veste_verte.jpg";
import pantalon from "@/public/data/img/Nysos/app_Nysos/pantalon.jpg";
import tiph from "@/public/data/img/Nysos/app_Nysos/tiph.jpg";

import { Heart, Share2, ArrowRight } from "lucide-react";

const SUGGESTIONS = [
  { id: 0, img: totebag_bob, title: "Totebag Bob l'éponge" },
  { id: 1, img: veste, title: "Veste" },
  { id: 2, img: veste_verte, title: "Veste verte" },
];

const SUGGESTIONS_END = [
  { id: 0, img: pantalon, title: "Personnalisation" },
  { id: 1, img: tiph, title: "Contacter l'artiste" },
];

const INFO_LINKS = [
  "Guide des tailles et coupe",
  "Matières",
  "Paiement et remboursement",
  "Livraison et retours",
];

const THUMBNAILS = [
  { src: tshirt_face, alt: "T-shirt face" },
  { src: tshirt_dos, alt: "T-shirt dos" },
  { src: tshirt_arriere, alt: "T-shirt arrière" },
  { src: tshirt_avant, alt: "T-shirt avant" },
];

export const MVHomePage = () => {
  return (
    <main className="relative border-2 border-[#7E1114] rounded text-black h-137 flex flex-col justify-between overflow-hidden w-full">
      <TopNavBarSimulation nysos={nysos} />
      <section className="px-5 overflow-y-auto flex-1 pb-24">
        <Image
          src={tshirt_soprano}
          alt="T-shirt Soprano"
          width={400}
          height={400}
          className="border border-black object-center w-full my-3"
        />

        <div className="flex justify-center gap-2">
          {THUMBNAILS.map((thumb, idx) => (
            <Image
              key={idx}
              src={thumb.src}
              alt={thumb.alt}
              width={100}
              height={100}
              className="border w-1/6 border-black m-1 object-cover"
            />
          ))}
        </div>

        <h1 className="mx-3 font-bold mt-3">T-Shirt - The Sopranos</h1>
        <p className="uppercase text-xs text-gray-600">Exemplaire unique</p>

        <div className="flex justify-around gap-2 my-2">
          <button className="border text-xs p-2 w-1/2 rounded hover:bg-gray-100">
            Ajouter au panier
          </button>
          <button className="border bg-black text-white text-xs p-2 w-1/2 rounded hover:bg-gray-800">
            Payer maintenant
          </button>
        </div>

        <div className="flex justify-around gap-2 my-2">
          <button className="flex flex-row items-center justify-center gap-2 text-xs p-2 w-1/2 border rounded">
            <Heart className="w-4 h-4" /> Favoris
          </button>
          <button className="flex flex-row items-center justify-center gap-2 text-xs p-2 w-1/2 border rounded">
            <Share2 className="w-4 h-4" /> Partager
          </button>
        </div>

        <h2 className="font-bold mt-4">Description</h2>
        <p className="text-sm">
          T-shirt Uniqlo noir peint sur le thème de The Sopranos.{" "}
          <span className="underline font-bold text-sm cursor-pointer">
            lire la suite
          </span>
        </p>

        <div className="my-4">
          <h3 className="font-bold text-sm border-b pb-2">Informations</h3>
          <div className="space-y-1 mt-1">
            {INFO_LINKS.map((cat) => (
              <a
                key={cat}
                href="#"
                className="flex items-center justify-between p-2 border-b border-gray-200 text-[11px] font-medium tracking-wide hover:bg-gray-50"
              >
                <span>{cat}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
              </a>
            ))}
          </div>
        </div>

        <Image
          src={tiph_with_tshirt}
          alt="Tiphanie portant le t-shirt"
          width={500}
          height={500}
          className="border border-black object-center w-full my-3 rounded"
        />
        <Image
          src={logo_tshirt}
          alt="Logo t-shirt"
          width={500}
          height={500}
          className="border border-black object-center w-full my-3 rounded"
        />

        <h3 className="font-bold text-sm mt-4 mb-2">
          Tu pourrais également aimer
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {SUGGESTIONS.map((sug) => (
            <div key={sug.id} className="text-center">
              <Image
                src={sug.img}
                alt={sug.title}
                width={150}
                height={150}
                className="border rounded object-cover aspect-square w-full"
              />
              <p className="font-bold text-xs mt-1 truncate">{sug.title}</p>
              <p className="text-xs text-gray-500">Prix</p>
            </div>
          ))}
        </div>

        <p className="font-bold text-xs my-4">
          Tu souhaites <span className="text-orange-500">choisir</span> ton
          design ?
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {SUGGESTIONS_END.map((sug) => (
            <div key={sug.id} className="text-center">
              <Image
                src={sug.img}
                alt={sug.title}
                width={200}
                height={200}
                className="border h-36 w-full object-cover rounded"
              />
              <p className="font-bold text-xs underline mt-1">{sug.title}</p>
            </div>
          ))}
        </div>

        <section className="p-3 bg-gray-50 rounded my-4">
          <h3 className="font-bold text-sm mb-1">Souscrire à la newsletter</h3>
          <p className="text-[9px] text-gray-600 mb-3">
            Afin de découvrir en avant-première les sorties limitées et nos
            nouvelles collections.
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

        <FooterWireFrame nysos={nysos} />
      </section>
      <NavBarSimulation />
    </main>
  );
};
