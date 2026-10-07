import Link from "next/link";
import Image from "next/image";
import oizong from "./assets/oisong.jpg";
import tiph_photo from "./assets/photo_tiph_couleur.png";
import { listProject, otherProject } from "@/public/data/data";
import { FooterBar } from "./components/FooterBar";

export default function Home() {
  const featuredProjects = listProject.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto p-5 space-y-10">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src={tiph_photo}
          alt="Photo Tiphanie Durand"
          width={180}
          height={180}
          priority
          className="w-40 h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
        />
        <div>
          <h1 className="sm:text-3xl text-xl font-normal mb-2 text-gray-700">
            Tiphanie Durand
          </h1>
          <h2 className="sm:text-5xl text-3xl mb-3 tracking-widest font-heading font-bold uppercase text-black">
            Product Designer
          </h2>
          <p className="text-md text-gray-700 leading-relaxed max-w-3xl">
            Je suis diplômée d’un Master en tant qu’Expert en Stratégie Digitale
            spécialité Lead UX - Product Designer. Je suis actuellement à la
            recherche de ma prochaine expérience professionnelle dans laquelle je
            pourrai exprimer ma créativité et montrer mes compétences en UX et en UI.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold font-heading mb-6">Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProjects.map((project) => (
            <Link
              href={`/project/${project.id}`}
              key={project.id}
              className="flex flex-col justify-between group p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-bold my-2 group-hover:text-[#7e1114] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {project.desc}
                </p>
              </div>
              <div className="h-48 w-full relative overflow-hidden rounded-lg mt-auto">
                <Image
                  src={project.imgPres}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full text-center mt-8">
          <Link
            href="/project"
            className="inline-block border-2 border-black px-6 py-2.5 rounded-lg font-medium hover:bg-black hover:text-white transition-colors text-sm"
          >
            Voir plus
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#7e1114] text-white p-8 rounded-xl flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Contactez-moi pour vos projets
        </h2>
        <p className="text-lg font-normal tracking-wide max-w-xl">
          Création de tous types de produits avec les méthodes UX/UI les plus adaptées.
        </p>
        <Link
          href="/about"
          className="border-2 border-white px-6 py-2.5 rounded-lg font-medium hover:bg-white hover:text-[#7e1114] transition-colors text-sm"
        >
          En savoir plus
        </Link>
      </section>

      {/* Personal Projects Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center pt-4">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-extrabold tracking-wider mb-4">
            Projets personnels en dehors du design
          </h2>
          <p className="text-gray-700 mb-6">
            Pendant mon temps libre, je dessine, je fais de la photo, de la couture...
            Ces activités créatives me permettent de constamment nourrir mon esprit artistique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherProject.map((project) => (
              <div
                key={project.id}
                className={`flex flex-col justify-between p-4 border border-gray-100 rounded-lg bg-gray-50 ${
                  project.id === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3 relative aspect-square rounded-xl overflow-hidden shadow-md">
          <Image
            alt="Oisong artwork"
            src={oizong}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </section>

      <FooterBar />
    </div>
  );
}
