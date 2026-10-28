"use client";

import Image from "next/image";
import WireframeMobile from "./WireFrameMobile";
import type { WireframesProps } from "@/interfaces";

export const Wireframes = ({
  wireframesDesc,
  wireframesDescSuite,
  wireframes = [],
}: WireframesProps) => {
  return (
    <section className="w-full my-8 md:my-12">
      <div className="max-w-3xl mb-6">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
          Wireframes
        </h2>
        {wireframesDesc && (
          <p className="text-base md:text-lg mb-1">{wireframesDesc}</p>
        )}
        {wireframesDescSuite && (
          <p className="text-sm">{wireframesDescSuite}</p>
        )}
      </div>
      <div className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-thin">
        {wireframes.map((imgSrc, index) => (
          <div
            key={index}
            className="w-full snap-center shrink-0 flex sm:flex-row flex-col gap-4 p-4 rounded-2xl "
          >
            <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
              <Image
                src={imgSrc}
                alt={`Wireframe ${index + 1}`}
                width={4000}
                height={4000}
              />
            </div>
          </div>
        ))}
        <div className="sm:w-1/2 w-full h-125 md:h-150 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          <WireframeMobile />
        </div>
      </div>
    </section>
  );
};
