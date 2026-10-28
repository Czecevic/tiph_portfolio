import Image from "next/image";
import type { PhoneViewerProps } from "@/interfaces";

export const PhoneViewer = ({
  images,
  currentIndex,
  onNext,
  getHighlightStyle,
}: PhoneViewerProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      <div className="relative flex items-center justify-center">
        <Image
          src={images[currentIndex]?.imglink || images[0].imglink}
          alt={`Étape ${currentIndex}`}
          width={2000}
          height={2000}
          className="p-3 h-[92%] rounded-4xl"
        />
        <Image
          src="/data/img/Nysos/bg_phone.png"
          alt="Cadre téléphone"
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
        />
        <span
          className={`absolute ${getHighlightStyle(currentIndex)} -mt-15 hover:border-[#D75523] rounded-xl bg-black/0 hover:bg-[#D75523]/10 transition-all delay-150 duration-300 ease-in-out z-20 cursor-pointer`}
          onClick={onNext}
        />
      </div>
    </div>
  );
};
