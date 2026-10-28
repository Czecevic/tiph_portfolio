import Image from "next/image";
import { Menu, Search, ChevronUp } from "lucide-react";

import logoSteam from "@/public/data/img/steam/logo.png";
import imgJeu from "@/public/data/img/steam/header.jpg";
import type { BundleItem, ReviewItem } from "@/interfaces";
import { NAV_LINKS, BUNDLES, REVIEWS, FEATURES } from "@/public/data/data";

// --- SOUS-COMPOSANTS ---
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-bold text-white uppercase tracking-wider">
    {children}
  </h2>
);

const BundleCard = ({ bundle }: { bundle: BundleItem }) => (
  <div className="bg-[#2a2f36] p-3 rounded-lg border border-[#3e4a59] flex justify-between items-center text-xs">
    <div>
      <p className="font-bold text-white">{bundle.title}</p>
      <p className="text-[#8f98a0] mt-0.5">{bundle.discountText}</p>
    </div>
    <button className="bg-[#2a475e] hover:bg-[#355c7d] text-white px-3 py-1.5 rounded font-medium">
      Add to Cart
    </button>
  </div>
);

const ReviewCard = ({ review }: { review: ReviewItem }) => {
  const getBadgeColor = (type: ReviewItem["recommended"]) => {
    switch (type) {
      case "Recommended":
        return "text-green-400";
      case "Not Recommended":
        return "text-red-400";
      default:
        return "text-yellow-400";
    }
  };

  return (
    <div className="bg-[#2a2f36] p-3 rounded-lg border border-[#3e4a59] space-y-2 text-xs">
      <div className="flex justify-between items-center">
        <span className="font-bold text-[#66c0f4]">{review.author}</span>
        <span className={`font-semibold ${getBadgeColor(review.recommended)}`}>
          {review.recommended}
        </span>
      </div>
      <p className="text-[#8f98a0]">{review.content}</p>
      <div className="text-[10px] text-[#56708a]">
        Posted: {review.date} • {review.hours}
      </div>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---
export const SteamAvant = () => {
  return (
    <div className="bg-[#1b2838] text-[#c7d5e0] h-[917] overflow-x-scroll font-sans pb-12 max-w-md mx-auto shadow-2xl">
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
      <nav className="bg-gradient-to- from-[#0F216E] to-[#3A78B1CC] p-4 text-xs font-semibold text-white space-y-3">
        {NAV_LINKS.map((link) => (
          <div key={link} className="cursor-pointer hover:text-[#66c0f4]">
            {link}
          </div>
        ))}
        <div className="flex items-center bg-[#316282] rounded overflow-hidden mt-3">
          <input
            type="text"
            placeholder="search"
            className="bg-transparent px-3 py-1.5 text-xs text-white placeholder-gray-300 italic focus:outline-none flex-1"
          />
          <button className="bg-[#67c1f5] p-1.5 text-[#1b2838] hover:bg-white transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Game Header Banner Image */}
      <div className="relative w-full">
        <Image
          src={imgJeu}
          width={2000}
          height={2000}
          alt="Iratus: Lord of the Dead"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* LIVE Broadcast Section */}
      <div className="p-3 bg-[#171a21]">
        <div className="bg-[#212c3d] rounded border border-[#2a475e] overflow-hidden">
          <div className="bg-[#2a384a] px-3 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-[#a82020] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full inline-block animate-pulse"></span>
                LIVE
              </span>
            </div>
            <ChevronUp className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>

          <div className="relative w-full aspect-video bg-black">
            <Image
              src={imgJeu}
              alt="Live Stream"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <main className="p-3 space-y-6">
        {/* Customer Reviews Summary Widget */}
        <div className="bg-[#2a475e]/40 p-3 rounded-lg border border-[#2a475e] flex items-center justify-between text-xs">
          <div>
            <span className="text-[#66c0f4] font-semibold">Very Positive</span>
            <p className="text-[#8f98a0]">Very Positive (85% of 5,900)</p>
          </div>
          <span className="bg-[#66c0f4]/20 text-[#66c0f4] px-2 py-1 rounded font-bold">
            85%
          </span>
        </div>

        {/* Purchase Section / Special Promotion */}
        <div className="bg-[#2a2f36] p-4 rounded-xl border border-[#3e4a59] space-y-4">
          <div className="bg-[#4c6b22] text-[#beee11] text-xs font-bold px-2 py-1 rounded inline-block">
            SPECIAL PROMOTION! Offer ends November 6
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs line-through text-[#8f98a0]">
                $14.99
              </span>
              <div className="text-xl font-bold text-[#beee11]">-70% $4.49</div>
            </div>
            <button className="bg-[#5c7e10] hover:bg-[#6c9212] text-white px-4 py-2 rounded font-bold text-sm shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Bundles Section */}
        <div className="space-y-3">
          <SectionTitle>Bundle Packages</SectionTitle>
          {BUNDLES.map((bundle) => (
            <BundleCard key={bundle.id} bundle={bundle} />
          ))}
        </div>

        {/* Game Features & Specs */}
        <div className="bg-[#2a2f36] p-4 rounded-xl border border-[#3e4a59] text-xs space-y-2">
          {FEATURES.map((feat, idx) => (
            <div
              key={feat.label}
              className={`flex justify-between py-1 ${
                idx !== FEATURES.length - 1 ? "border-b border-[#3e4a59]" : ""
              }`}
            >
              <span className="text-[#8f98a0]">{feat.label}</span>
              <span className={feat.valueColor}>{feat.value}</span>
            </div>
          ))}
        </div>

        {/* About This Game */}
        <div className="space-y-2">
          <SectionTitle>About This Game</SectionTitle>
          <p className="text-xs text-[#8f98a0] leading-relaxed">
            In Iratus you find yourself fighting for the forces of darkness in
            the role of the titular necromancer—Iratus, recently freed from his
            millennia-long imprisonment. Create your soldiers from the body
            parts of your slain enemies!
          </p>
        </div>

        {/* Mature Content Warning */}
        <div className="bg-[#3a1c1c] p-3 rounded-lg border border-[#5a2c2c] text-xs text-[#ff9999]">
          <span className="font-bold block mb-1">
            Mature Content Description
          </span>
          Contains stylized violence and blood.
        </div>

        {/* Customer Reviews Section */}
        <div className="space-y-3 pt-2">
          <SectionTitle>Customer Reviews</SectionTitle>
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-[10px] text-[#56708a] px-4 pt-8 space-y-2 border-t border-[#2a475e] mt-8">
        <p>© 2019 Daedalic Entertainment GmbH and Unfrozen Studios.</p>
        <p>All trademarks are property of their respective owners.</p>
      </footer>
    </div>
  );
};
