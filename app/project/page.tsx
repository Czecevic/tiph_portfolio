import { ProjectCard } from "./components/ProjectCard";
import { listProject } from "@/public/data/data";
import Link from "next/link";

export default function ProjectsPage() {
  const renderProjectByType = (type: string) =>
    listProject
      .filter((project) => project.typeProject === type)
      .map((project) => <ProjectCard key={project.id} project={project} />);

  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-4xl md:text-6xl uppercase font-extrabold text-center my-6 font-heading tracking-widest">
        Projets
      </h1>

      <section className="my-8">
        <h2 className="text-xl font-bold font-heading mb-4 text-gray-800 border-b pb-2">
          UX / UI & Product Design
        </h2>
        <div className="flex flex-wrap -mx-3">
          {renderProjectByType("UX / UI / product Owners")}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-bold font-heading mb-4 text-gray-800 border-b pb-2">
          UX Design
        </h2>
        <div className="flex flex-wrap -mx-3">{renderProjectByType("UX")}</div>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-bold font-heading mb-4 text-gray-800 border-b pb-2">
          UI Design
        </h2>
        <div className="flex flex-wrap -mx-3">{renderProjectByType("UI")}</div>
      </section>

      <section className="text-center my-12 p-8 bg-[#7e1114] rounded-xl text-white">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 uppercase">
          Contactez-moi pour vos projets !
        </h2>
        <p className="max-w-xl mx-auto my-4 text-gray-100 text-sm md:text-base">
          Développons ensemble votre produit avec les méthodes UX et UI les plus adaptées à vos besoins.
        </p>
        <Link
          href="/about"
          className="inline-block border-2 border-white text-white px-6 py-2.5 rounded font-medium hover:bg-white hover:text-[#7e1114] transition-colors text-sm"
        >
          En savoir plus
        </Link>
      </section>
    </main>
  );
}
