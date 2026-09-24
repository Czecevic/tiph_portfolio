"use client";

import Image from "next/image";

interface WireframesProps {
  wireframesDesc?: string;
  wireframesDescSuite?: string;
  wireframes: string[];
}

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
          <p className="text-gray-500 text-sm">{wireframesDescSuite}</p>
        )}
      </div>

      {/* Zone de défilement horizontal (Carrousel Figma-style) */}
      <div className="relative w-full">
        <div className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300">
          {wireframes.map((wireframe, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-120 lg:w-135 flex flex-col gap-2"
            >
              {/* Carte englobante avec ombre et bordure style maquette */}
              <div className="relative w-full aspect-3/4 bg-white overflow-hidden group">
                <Image
                  src={wireframe}
                  alt={`Wireframe ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 540px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
