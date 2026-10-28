import Image from "next/image";
import { CollectionCarouselProps } from "@/interfaces";

export const CollectionCarousel = ({
  title,
  items,
}: CollectionCarouselProps) => (
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
