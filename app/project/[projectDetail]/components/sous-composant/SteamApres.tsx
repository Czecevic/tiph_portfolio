import Image from "next/image";
import {
  Menu,
  ArrowRight,
  Play,
  User2Icon,
  Sparkles,
  Cloud,
  ChartColumn,
  Globe,
} from "lucide-react";

import logoSteam from "@/public/data/img/steam/logo.png";
import imgJeu from "@/public/data/img/steam/header.jpg";
import appleLogo from "@/public/data/img/steam/apple.png";
import windowsLogo from "@/public/data/img/steam/windows.png";

// --- TYPES ---
interface BundleItem {
  id: number;
  title: string;
  description: string;
  discount: string;
  oldPrice: string;
  newPrice: string;
  images: any[];
}

interface DlcItem {
  name: string;
  price: string;
  discount?: string;
  oldPrice?: string;
}

interface SimilarGame {
  title: string;
  price: string;
  discount: string;
  oldPrice: string;
  image: any;
}

// --- DONNÉES STATIQUES ---
const GAME_FEATURES = [
  { label: "Single-player", icon: User2Icon },
  { label: "Steam Achievements", icon: Sparkles },
  { label: "Steam Cloud", icon: Cloud },
  { label: "Stats", icon: ChartColumn },
  { label: "Visit the game website", icon: Globe, external: true },
];

const GAME_TAGS = ["RPG", "Strategy", "Indie", "Turn-Based Combat", "2D"];

const GAME_DLCS: DlcItem[] = [
  { name: "Iratus: Lord of the Dead - Supporter Pack", price: "N/A" },
  {
    name: "Iratus: Wrath of the Necromancer",
    price: "$4.49",
    discount: "-70%",
    oldPrice: "$14.99",
  },
  { name: "Iratus - Summer Skin Set", price: "$2.99" },
  {
    name: "Iratus - Halloween Skin Set",
    price: "$1.49",
    discount: "-50%",
    oldPrice: "$2.99",
  },
  {
    name: "Iratus - Holidays Skin Set",
    price: "$1.49",
    discount: "-50%",
    oldPrice: "$2.99",
  },
];

const BUNDLES: BundleItem[] = [
  {
    id: 1,
    title: "Buy Iratus: Necromancer Edition",
    description: "Buy this bundle to save 5% off all 3 items!",
    discount: "-82%",
    oldPrice: "$54.97",
    newPrice: "$9.86",
    images: [imgJeu, imgJeu, imgJeu],
  },
  {
    id: 2,
    title: "Buy Strategy Bundle",
    description: "Buy this bundle to save 25% off all 5 items!",
    discount: "-78%",
    oldPrice: "$141.95",
    newPrice: "$30.56",
    images: [imgJeu, imgJeu, imgJeu],
  },
  {
    id: 3,
    title: "Buy Iratus Supporter Bundle",
    description:
      "Includes 2 items: Iratus: Lord of the Dead, Iratus: Lord of the Dead - Supporter Pack",
    discount: "-86%",
    oldPrice: "$39.98",
    newPrice: "$5.59",
    images: [],
  },
];

const SIMILAR_GAMES: SimilarGame[] = [
  {
    title: "Hidden Deep",
    price: "$4.49",
    discount: "-70%",
    oldPrice: "$14.99",
    image: imgJeu,
  },
  {
    title: "War Pips",
    price: "$4.49",
    discount: "-70%",
    oldPrice: "$14.99",
    image: imgJeu,
  },
  {
    title: "Partisans 1941",
    price: "$4.49",
    discount: "-70%",
    oldPrice: "$14.99",
    image: imgJeu,
  },
];

export const SteamApres = () => {
  return (
    <div className="bg-[#1b2838] text-[#c7d5e0] h-[917] overflow-x-scroll font-sans pb-12 max-w-md mx-auto shadow-2xl">
      {/* Header */}
      <header className="bg-[#171a21] p-3 flex items-center justify-between border-b border-[#2a475e]">
        <div className="flex items-center text-white">
          <Menu className="w-8 h-8 cursor-pointer" />
        </div>
        <div className="flex justify-center flex-1">
          <Image
            src={logoSteam}
            width={120}
            height={36}
            alt="logo_steam"
            className="h-8 w-auto object-contain"
          />
        </div>
      </header>

      <main className="p-3 space-y-4">
        {/* Titre du jeu et bouton Community Hub */}
        <div className="flex justify-between items-start gap-2">
          <h1 className="text-xl font-bold text-white leading-tight">
            Iratus: Lord of the Dead
          </h1>
          <button className="bg-[#2a475e] hover:bg-[#355c7d] text-white text-[10px] font-semibold px-2.5 py-1.5 rounded whitespace-nowrap">
            Community hub
          </button>
        </div>

        {/* Bannière principale et mini-galerie */}
        <div className="bg-[#171a21] p-1.5 rounded border border-[#2a475e] space-y-1.5">
          <div className="relative w-full">
            <Image
              src={imgJeu}
              width={1000}
              height={500}
              alt="Iratus: Lord of the Dead"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="relative border border-[#66c0f4]">
              <Image
                src={imgJeu}
                width={200}
                height={100}
                alt="thumb 1"
                className="w-full h-14 object-cover"
              />
            </div>
            <div className="relative border border-transparent bg-black flex items-center justify-center">
              <Image
                src={imgJeu}
                width={200}
                height={100}
                alt="thumb 2"
                className="w-full h-14 object-cover opacity-60"
              />
              <div className="absolute inset-flex items-center justify-center">
                <div className="bg-black/70 p-1.5 rounded-full">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </div>
            <div className="relative border border-transparent">
              <Image
                src={imgJeu}
                width={200}
                height={100}
                alt="thumb 3"
                className="w-full h-14 object-cover"
              />
            </div>
          </div>
        </div>
        {/* corriger */}
        <div className="bg-[linear-gradient(to_left,#E2F4FF4D,#546B734D)] p-4 rounded shadow-inner">
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium text-gray-200">
              Buy Iratus: Lord of the Dead
            </span>
            <div className="flex gap-1.5 text-white items-center opacity-80">
              <Image
                src={windowsLogo}
                alt="windows"
                className="w-3.5 h-3.5 object-contain"
              />
              <Image
                src={appleLogo}
                alt="apple"
                className="w-3.5 h-3.5 object-contain"
              />
            </div>
          </div>
          <p className="text-[11px] text-[#66c0f4] mt-0.5 mb-3">
            SPECIAL PROMOTION! Offer ends November 6
          </p>
          <div className="flex justify-end">
            <div className="flex items-stretch border border-black bg-black rounded overflow-hidden">
              {/* -82% */}
              <div className="bg-[#4c6b22] text-[#beee11] font-bold text-base px-3 py-1 flex items-center">
                -82%
              </div>

              {/* Prix */}
              <div className="bg-[#2a2f36] px-2.5 py-1 text-right flex flex-col justify-center">
                <div className="text-[9px] line-through text-[#8f98a0]">
                  $54.97
                </div>
                <div className="text-sm font-bold text-[#beee11] leading-none">
                  $9.86
                </div>
              </div>

              {/* Add to Cart */}
              <button className="bg-[#5c7e10] hover:bg-[#6c9212] text-white px-3.5 py-1.5 font-bold text-xs whitespace-nowrap border-l border-black">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="p-3 rounded-lg text-xs space-y-2">
          <div className="flex justify-start gap-2">
            <span className="text-[#556772]">RELEASE DATE:</span>
            <span className="text-[#8F98A0]">Apr 23, 2020</span>
          </div>
          <div className="flex justify-start items-end gap-6">
            <span className="text-[#556772]">
              DEVELOPER:
              <br />
              PUBLISHER:
            </span>
            <div className="flex justify-between w-full">
              <div className="text-left">
                <span className="text-[#66c0f4] block">Unfrozen</span>
                <span className="text-[#66c0f4] block">
                  Daedalic Entertainment
                </span>
              </div>
              <div className="pt-1 flex justify-end">
                <button className="bg-[#2a475e] hover:bg-[#355c7d] text-[#67C1F5] text-[10px] px-2.5 py-1 rounded">
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description courte */}
        <p className="text-[13.78px] text-justify text-white leading-relaxed">
          Iratus of the Dead is a turn-based tactical roguelike RPG set in a
          dark fantasy universe. Lead an army of undead to help an angry
          necromancer in his quest to reach the surface world and bring death to
          the mortal.
        </p>

        {/* Caractéristiques du jeu (Single-player, Achievements...) */}
        <div className="bg-[#67C1F51A] rounded-lg overflow-hidden text-xs">
          {GAME_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.label}
                className={`flex items-center justify-between ${
                  idx !== GAME_FEATURES.length - 1
                    ? "border-b border-[#3e4a59]"
                    : ""
                } hover:bg-[#323842]`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-black p-3 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#66c0f4] font-medium">
                    {feat.label}
                  </span>
                </div>

                {feat.external && (
                  <ArrowRight className="w-4 h-4 text-[#66c0f4] -rotate-45 mr-3" />
                )}
              </div>
            );
          })}
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">
            TAGS
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {GAME_TAGS.map((tag) => (
              <span
                key={tag}
                className="bg-[#2a475e]/60 hover:bg-[#2a475e] text-[#66c0f4] text-[10px] px-2 py-1 rounded cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Évaluation / Reviews summary */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">
            ÉVALUATION
          </h2>
          <div className="flex justify-between text-xs p-2.5 rounded">
            <div>
              <span className="text-[#8f98a0]">RECENT REVIEWS:</span>{" "}
              <span className="text-[#66c0f4]">Very Positive (28)</span>
            </div>
          </div>
          <div className="flex justify-between text-xs p-2.5 rounded">
            <div>
              <span className="text-[#8f98a0]">ALL REVIEWS:</span>{" "}
              <span className="text-[#66c0f4]">Very Positive (5,900)</span>
            </div>
          </div>
        </div>

        {/* Navigation / Onglets (DLC, ABOUT, SYSTEM REQUIREMENTS, REVIEW) */}
        <div className="flex border-b border-[#2a475e] text-[11px] font-semibold text-center overflow-x-auto scrollbar-none">
          <div className="py-2 px-3 text-[#66c0f4] border-b-2 border-[#66c0f4]">
            DLC
          </div>
          <div className="py-2 px-3 text-[#8f98a0] hover:text-white">ABOUT</div>
          <div className="py-2 px-3 text-[#8f98a0] hover:text-white whitespace-nowrap">
            SYSTEM REQUIREMENTS
          </div>
          <div className="py-2 px-3 text-[#8f98a0] hover:text-white">
            REVIEW
          </div>
        </div>

        {/* Contenu DLC pour ce jeu */}
        <div className="space-y-1">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
            CONTENT FOR THIS GAME
          </h2>
          {GAME_DLCS.map((dlc, idx) => (
            <div
              key={idx}
              className="bg-[#2a2f36] p-2.5 rounded border border-[#3e4a59] flex justify-between items-center text-xs"
            >
              <span className="text-white text-[11px] truncate pr-2">
                {dlc.name}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                {dlc.discount && (
                  <span className="bg-[#4c6b22] text-[#beee11] font-bold text-[10px] px-1.5 py-0.5 rounded">
                    {dlc.discount}
                  </span>
                )}
                {dlc.oldPrice && (
                  <span className="line-through text-[#8f98a0] text-[10px]">
                    {dlc.oldPrice}
                  </span>
                )}
                <span className="font-bold text-white">{dlc.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Liste des Bundles (Captures d'écran 2 et 4) */}
        <div className="space-y-3 pt-2">
          {BUNDLES.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-[#2a2f36] p-3 rounded-lg border border-[#3e4a59] space-y-3 text-xs"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">
                    {bundle.title}{" "}
                    <span className="text-[10px] text-[#66c0f4] font-normal">
                      BUNDLE
                    </span>
                  </h3>
                  <p className="text-[#8f98a0] text-[10px] mt-0.5">
                    {bundle.description}
                  </p>
                </div>
                <div className="flex gap-1 text-gray-300 text-[10px]">
                  <span>🪟</span>
                </div>
              </div>

              {bundle.images.length > 0 && (
                <div className="grid grid-cols-3 gap-1 bg-[#171a21] p-1 rounded">
                  {bundle.images.map((img, i) => (
                    <div key={i} className="relative h-12">
                      <Image
                        src={img}
                        alt="bundle item"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center pt-1">
                <button className="bg-[#2a475e] hover:bg-[#355c7d] text-white text-[11px] px-3 py-1.5 rounded font-medium">
                  Bundle info
                </button>
                <div className="flex justify-end">
                  <div className="flex items-stretch border border-black bg-black rounded overflow-hidden">
                    {/* -82% */}
                    <div className="bg-[#4c6b22] text-[#beee11] font-bold text-base px-3 py-1 flex items-center">
                      {bundle.discount}
                    </div>

                    {/* Prix */}
                    <div className="bg-[#2a2f36] px-2.5 py-1 text-right flex flex-col justify-center">
                      <div className="text-[9px] line-through text-[#8f98a0]">
                        {bundle.oldPrice}
                      </div>
                      <div className="text-sm font-bold text-[#beee11] leading-none">
                        {bundle.newPrice}
                      </div>
                    </div>

                    {/* Add to Cart */}
                    <button className="bg-[#5c7e10] hover:bg-[#6c9212] text-white px-3.5 py-1.5 font-bold text-xs whitespace-nowrap border-l border-black">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center pt-1">
            <button className="border border-[#2a475e] bg-[#2a475e]/30 hover:bg-[#2a475e] text-white text-xs px-4 py-1.5 rounded">
              Browse all
            </button>
          </div>
        </div>

        {/* Section MORE LIKE THIS */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">
              MORE LIKE THIS
            </h2>
            <button className="bg-[#2a475e] hover:bg-[#355c7d] text-white text-[10px] px-2 py-0.5 rounded">
              See all
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {SIMILAR_GAMES.map((game, idx) => (
              <div
                key={idx}
                className="bg-[#2a2f36] rounded border border-[#3e4a59] overflow-hidden flex flex-col justify-between"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-1.5 space-y-1">
                  <p className="text-[10px] font-bold text-white truncate">
                    {game.title}
                  </p>
                  <div className="flex items-center justify-between bg-[#171a21] p-1 rounded text-[9px]">
                    <span className="text-[#beee11] font-bold">
                      {game.discount}
                    </span>
                    <span className="text-white font-bold">{game.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contrôles de défilement du carousel */}
          <div className="flex justify-between items-center pt-1 px-1 text-gray-500">
            <div className="w-1.5 h-1.5 bg-[#66c0f4] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
            <div className="flex gap-2">
              <span className="text-xs text-[#66c0f4] cursor-pointer">
                &#9664;
              </span>
              <span className="text-xs text-[#66c0f4] cursor-pointer">
                &#9654;
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer minimaliste Steam */}
      <footer className="text-[9px] text-[#56708a] px-4 pt-6 space-y-2 border-t border-[#2a475e] mt-6 flex items-start gap-2">
        <div className="shrink-0 pt-0.5">
          <span className="bg-black text-white font-extrabold px-1 py-0.5 text-[8px] tracking-tighter">
            VALVE
          </span>
        </div>
        <div>
          <p>VAT included in all prices where applicable.</p>
        </div>
      </footer>
    </div>
  );
};
