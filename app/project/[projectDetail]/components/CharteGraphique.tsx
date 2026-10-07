import Image from "next/image";

interface CharteGraphiqueProps {
  title?: string;
  desc_1?: string;
  desc_2?: string;
  desc_3?: string;
  imgCG?: string;
  imgCG_2?: string;
  logoEcrit?: string;
  logo?: string;
}

const COLOR_SWATCHES = [
  "#303A8F",
  "#D75523",
  "#F7F7F7",
  "#161616",
  "#D8D2C3",
  "#1F2E55",
];

export const CharteGraphique = ({
  title,
  desc_1,
  desc_2,
  desc_3,
  imgCG,
  imgCG_2,
  logoEcrit,
  logo,
}: CharteGraphiqueProps) => {
  return (
    <section className="w-full my-8 md:my-12">
      {title && (
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          {title}
        </h2>
      )}
      {desc_1 && <p className="mb-4 text-base md:text-lg">{desc_1}</p>}

      {imgCG && (
        <div className="w-full relative aspect-video rounded my-4">
          <Image
            src={imgCG}
            alt="Charte graphique 1"
            width={2000}
            height={2000}
            className=" object-cover"
          />
        </div>
      )}

      {desc_2 && <p className="mb-4 text-base md:text-lg">{desc_2}</p>}
      {desc_3 && <p className="mb-4 text-base md:text-lg">{desc_3}</p>}

      <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
        {imgCG_2 && (
          <div className="w-full sm:w-1/2 relative aspect-square rounded overflow-hidden">
            <Image
              src={imgCG_2}
              alt="Charte graphique 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        )}

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex gap-2 flex-wrap justify-between">
            {COLOR_SWATCHES.map((color, index) => (
              <span
                key={index}
                style={{ backgroundColor: color }}
                className="h-20 w-1/4 rounded shadow-sm border border-gray-200"
              />
            ))}
          </div>

          <div className="flex gap-4 items-center justify-center">
            {logo && (
              <div className="w-1/2 relative h-20">
                <Image
                  src={logo}
                  alt="Logo Nysos"
                  fill
                  sizes="25vw"
                  className="object-contain"
                />
              </div>
            )}
            {logoEcrit && (
              <div className="w-1/2 relative h-20">
                <Image
                  src={logoEcrit}
                  alt="Logo écrit Nysos"
                  fill
                  sizes="25vw"
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
