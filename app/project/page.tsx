import { ProjectCard } from "./components/ProjectCard";
import { listProject } from "../../public/data/data";
import Link from "next/link";

export default function project() {
  const renderProjectByType = (type: string) =>
    listProject
      .filter((project) => project.typeProject === type)
      .map((project) => <ProjectCard key={project.id} project={project} />);
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-6xl uppercase font-extrabold text-center my-5 font-heading tracking-widest">
        Projets
      </h1>
      <section className="my-8">
        <div className="flex flex-wrap -mx-3">
          {renderProjectByType("UX / UI / product Owners")}
        </div>
      </section>
      <section className="my-8">
        <div className="flex flex-wrap -mx-3">{renderProjectByType("UX")}</div>
      </section>
      <section className="my-8">
        <div className="flex flex-wrap -mx-3">{renderProjectByType("UI")}</div>
      </section>
      <section className="text-center my-12 p-6 bg-[#7e1114] rounded-lg">
        <h2 className="text-2xl font-bold font-heading mb-2 text-white uppercase">
          Contactez moi pour vos projets !
        </h2>
        <h3 className="text-lg text-gray-50 rounded-lg">
          Création de tous types de produits
        </h3>
        <p className="max-w-xl mx-auto my-4 text-white">
          Afin de développer votre produit avec les méthodes d’UX et de UI les
          plus adaptées à votre besoin !
        </p>
        <Link
          href="/contact"
          className="inline-block border-2 text-white px-6 py-2 rounded font-medium hover:bg-opacity-90 transition-colors"
        >
          Contacter
        </Link>
      </section>
    </main>
  );
}
