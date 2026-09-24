import Image from "next/image";

export const CharteGraphique = ({
  title,
  desc_1,
  desc_2,
  desc_3,
  imgCG,
  imgCG_2,
}: any) => {
  return (
    <section className="w-full my-8 md:my-12">
      <h1>{title}</h1>
      <p>{desc_1}</p>
      <Image
        src={imgCG}
        alt={`img charte graphique`}
        loading="eager"
        width={500}
        height={500}
        className="object-contain p-2 w-full"
      />
      <p>{desc_2}</p>
      <p>{desc_3}</p>
      <div className="flex">
        <Image
          src={imgCG_2}
          alt={`img charte graphique`}
          loading="eager"
          width={500}
          height={500}
          className="object-contain p-2 w-full"
        />
      </div>
    </section>
  );
};
