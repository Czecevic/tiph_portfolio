import { Menu } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface TopNavBarSimulationProps {
  nysos: StaticImageData | string;
}

export const TopNavBarSimulation = ({ nysos }: TopNavBarSimulationProps) => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <button aria-label="Menu">
        <Menu className="w-4 h-4 text-black" />
      </button>
      <span className="font-serif italic font-bold text-lg tracking-wide">
        <Image
          src={nysos}
          width={140}
          height={35}
          alt="Logo Nysos"
          className="w-auto h-8 brightness-0 object-contain mx-auto"
        />
      </span>
      <div className="w-4" />
    </header>
  );
};
