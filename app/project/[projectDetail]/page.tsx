import { listProject } from "@/public/data/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImgPres } from "./components/ImgPres";
import { ProjectInfo } from "./components/ProjectInfo";
import { Wireframes } from "./components/Wireframes";
import { WireframeNysos } from "./components/Wireframes_Nysos";

interface PageProps {
  params: Promise<{ projectDetail: string }>;
}

export default async function ProjectDetail({ params }: PageProps) {
  const { projectDetail } = await params;

  const findProject = listProject.find(
    (project) => project.id === Number(projectDetail),
  );

  if (!findProject) {
    notFound();
  }

  const projectInfo = [
    { id: 0, title: "Rôle", value: findProject.role },
    { id: 1, title: "Objectif du Projet", value: findProject.objectif },
    { id: 2, title: "Maquettes", value: findProject.typeProject },
    { id: 3, title: "Date", value: findProject.date },
  ];

  const similarProjects = listProject
    .filter((project) => project.id !== findProject.id)
    .slice(0, 2);

  return (
    <main className="flex flex-col items-center p-4 md:p-6 max-w-6xl mx-auto overflow-x-hidden w-full">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full items-center md:items-start">
        {findProject.imgPres && (
          <ImgPres imgPres={findProject.imgPres} title={findProject.title} />
        )}
        <ProjectInfo title={findProject.title} projectInfo={projectInfo} />
      </div>

      <span className="border-t-2 w-full my-6 md:my-8"></span>

      {findProject.desc && (
        <section className="w-full text-center">
          <h2 className="text-xl md:text-2xl font-heading my-4">
            {findProject.title}
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base px-2">
            {findProject.desc}
          </p>
        </section>
      )}
      {findProject.recherche && (
        <section className="w-full my-6 md:my-8">
          <h2 className="text-2xl md:text-3xl font-heading text-left w-full mb-4">
            Recherche Utilisateur
          </h2>
          <p className="mb-4 text-base md:text-lg">
            {findProject.rechercheUtilisateur}
          </p>
          <div className="flex flex-col md:flex-row w-full">
            {findProject.recherche.map((imgRecherche, index) => (
              <div
                key={index}
                className="w-full relative aspect-video rounded overflow-hidden"
              >
                <Image
                  src={imgRecherche}
                  alt={`Recherche utilisateur ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          {findProject.suiteRechercheUtilisateur !== "" && (
            <p className="my-4 text-sm md:text-base">
              {findProject.suiteRechercheUtilisateur}
            </p>
          )}
        </section>
      )}
      <section>
        <h2 className="text-2xl md:text-3xl font-heading text-left w-full mb-4">
          Cible Principal
        </h2>
        <p className="mb-4 text-base md:text-lg">
          {findProject.ciblePrincipale}
        </p>
        <p className="mb-4 text-base md:text-lg">
          {findProject.ciblePrincipaleSuite}
        </p>
      </section>

      {findProject.recherche_2 && (
        <section className="w-full my-4">
          <p className="my-4 text-sm md:text-base">
            Pour compléter ces recherches et impliquer plus de monde, nous avons
            décidé de réaliser un atelier de facilitation de tri de cartes pour
            réfléchir à la composition du menu :
          </p>
          <div className="w-full md:w-2/3 relative aspect-video mx-auto">
            <Image
              src={findProject.recherche_2}
              alt="Atelier de tri de cartes"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain"
            />
          </div>
        </section>
      )}
      {findProject.backoffice && (
        <section className="w-full my-6 md:my-8">
          <h2 className="text-2xl md:text-3xl font-heading text-left w-full my-4">
            {findProject.titleBackoffice}
          </h2>
          <p className="text-left w-full mb-4 text-sm md:text-base">
            {findProject.descBackoffice}
          </p>
          <div className="w-full md:w-2/3 relative aspect-video mx-auto">
            <Image
              src={findProject.backoffice}
              alt="Backoffice avant refonte"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain"
            />
          </div>
        </section>
      )}

      {findProject.wireframes && (
        <Wireframes
          wireframes={findProject.wireframes}
          wireframesDesc={findProject.wireframesDesc}
          wireframesDescSuite={findProject.wireframesDescSuite}
        />
      )}

      {findProject.UI && (
        <section className="w-full my-6 md:my-8">
          <h2 className="text-2xl md:text-3xl font-heading text-left w-full my-4">
            UI
          </h2>
          <div className="w-full md:w-2/3 relative aspect-video mx-auto">
            <Image
              src={findProject.UI}
              alt="Interface UI"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="eager"
              className="object-contain"
            />
          </div>
          <h3 className="text-lg md:text-xl font-body text-center mt-6">
            Version retenue
          </h3>
          <a
            href="https://www.figma.com/proto/97ZTuyvZXPs7PCOtZfvfw3/Portfolio?page-id=1%3A4&node-id=652-12733"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7e1114] hover:underline font-medium inline-block mt-2 w-full text-center text-sm md:text-base"
          >
            Lien prototype
          </a>
        </section>
      )}

      <span className="border-t-2 w-full my-6 md:my-8"></span>

      <section className="w-full my-6 md:my-8 text-center">
        <h2 className="text-xl md:text-2xl font-normal font-heading my-4">
          Projets Similaires
        </h2>
        <div className="flex md:gap-6 my-6 w-full">
          {similarProjects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="p-4 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center text-left w-full"
            >
              <h3 className="font-bold text-base md:text-lg w-full mb-1">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm  w-full mb-3 line-clamp-2">
                {project.desc}
              </p>
              {project.imgPres && (
                <div className="w-full relative aspect-video overflow-hidden">
                  <Image
                    src={project.imgPres}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>

        <Link
          href="/project"
          className="inline-block border-2 px-6 py-3 rounded-lg font-medium hover:bg-[#7e1114] hover:text-white transition-colors text-sm md:text-base"
        >
          Découvrir tous les projets
        </Link>
      </section>
    </main>
  );
}
