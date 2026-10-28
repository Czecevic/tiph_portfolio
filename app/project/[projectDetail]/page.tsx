// data
import { listProject } from "@/public/data/data";
// composant
import { notFound } from "next/navigation";
import { ImgPres } from "./components/ImgPres";
import { ProjectInfo } from "./components/ProjectInfo";
import { Wireframes } from "./components/Wireframe";
import { CharteGraphique } from "./components/CharteGraphique";
import { MVHomePage } from "./components/MVHomePage";
import { MVArticle } from "./components/MVArticle";
import { MVVetements } from "./components/MVVetements";

import Image from "next/image";
import Link from "next/link";
import { VisiteTU } from "./components/VisiteTU";
import { SimilarProjects } from "./components/SimiliarProject";
import { SteamAvant } from "./components/sous-composant/SteamAvant";
import { SteamApres } from "./components/sous-composant/SteamApres";

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

      <hr className="w-full my-6 md:my-8 border-gray-200" />

      {findProject.desc && (
        <section className="w-full text-center">
          <h2 className="text-xl md:text-2xl font-heading my-4">
            {findProject.descTitle}
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base px-2">
            {findProject.desc}
          </p>
        </section>
      )}

      {findProject.explication && (
        <div>
          <h1 className="text-2xl md:text-3xl font-heading text-left w-full mb-4">
            Explications
          </h1>
          <div className="flex flex-row gap-5 p-3">
            {findProject.explicationIllu.map(({ imglink, id }) => (
              <div key={id} className="w-full">
                <Image
                  src={imglink}
                  alt={`Recherche ${id + 1}`}
                  width={2000}
                  height={2000}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className="py-3">{findProject.explicationDesc}</p>
          <p>{findProject.explicationDescSuite}</p>
          <Image
            src={findProject.userFlow[0].imglink}
            alt={`Recherche ${findProject.userFlow[0].id + 1}`}
            width={2000}
            height={2000}
            className="object-contain"
          />
        </div>
      )}

      {findProject.reponseWireframes && (
        <div>
          <h1 className="text-2xl md:text-3xl font-heading text-left w-full mb-4">
            Réponse via des wireframes
          </h1>
          <p>{findProject.reponseWireframeDesc}</p>
          <div className="flex flex-row gap-5 p-3">
            {findProject.reponseWireframes.map(({ imglink, title, id }) => (
              <div key={id} className="w-full">
                <Image
                  src={imglink}
                  alt={`Recherche ${id + 1}`}
                  width={2000}
                  height={2000}
                  className="object-contain"
                />
                <h1 className=" font-bold text-center">{title}</h1>
              </div>
            ))}
          </div>
          <div className=" text-center">
            <h1 className="font-bold uppercase font-heading">Parcours</h1>
            <a href="">Lien prototype</a>
          </div>
        </div>
      )}

      {findProject.recherche && findProject.recherche.length > 0 && (
        <section className="w-full my-6 md:my-8">
          <h2 className="text-2xl md:text-3xl font-heading text-left w-full mb-4">
            Recherche Utilisateur
          </h2>
          <p className="mb-4 text-base md:text-lg">
            {findProject.rechercheUtilisateur}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {findProject.recherche.map((imgRecherche, index) => (
              <div
                key={index}
                className="w-full relative aspect-video rounded overflow-hidden"
              >
                <Image
                  src={imgRecherche}
                  alt={`Recherche utilisateur ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          {findProject.suiteRechercheUtilisateur && (
            <p className="my-4 text-sm md:text-base">
              {findProject.suiteRechercheUtilisateur}
            </p>
          )}
        </section>
      )}

      {findProject.ciblePrincipale && (
        <section className="w-full my-6 md:my-8">
          <h2 className="text-2xl md:text-3xl font-heading text-left w-full mb-4">
            Cible Principale
          </h2>
          <p className="mb-4 text-base md:text-lg">
            {findProject.ciblePrincipale}
          </p>
          {findProject.ciblePrincipaleSuite && (
            <p className="mb-4 text-base md:text-lg">
              {findProject.ciblePrincipaleSuite}
            </p>
          )}
        </section>
      )}

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
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-contain"
            />
          </div>
        </section>
      )}

      {findProject.backoffice && (
        <section className="w-full my-6 md:my-8">
          <h2 className="text-2xl md:text-3xl font-heading text-left w-full my-4">
            {findProject.titleBackoffice || "Backoffice"}
          </h2>
          <p className="text-left w-full mb-4 text-sm md:text-base">
            {findProject.descBackoffice}
          </p>
          <div className="w-full md:w-2/3 relative aspect-video mx-auto">
            <Image
              src={findProject.backoffice}
              alt="Backoffice"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-contain"
            />
          </div>
        </section>
      )}

      {findProject.methodologieImg && (
        <div>
          <h1 className="font-extrabold">Méthodologie</h1>
          <p>{findProject.methodologieDesc}</p>
          <div className="flex items-end">
            {findProject.methodologieImg.map(({ imglink, id }) => (
              <Image
                src={imglink}
                alt={`Recherche ${id + 1}`}
                width={2000}
                height={2000}
                loading="eager"
                className=" w-1/2 object-contain p-5"
              />
            ))}
          </div>
        </div>
      )}

      {findProject.title === "Steam" && (
        <div>
          <h2 className="font-heading">Modifications</h2>
          <ul>
            <li>
              Enlèvement d’éléments non pertinents : le live et les commentaire
            </li>
            <li>Génération de la page selon les parties</li>
            <li>Suppression des annonces inutiles comme les jeux similaires</li>
            <li>Suppression des visuels (Gifs)</li>
            <li>Diminution de la qualités des visuels</li>
            <li>Arrêt de l’auto play</li>
            <li>Raccourcissement de la page</li>
            <li>
              Création de 4 sections pour diminuer la taille de la page afin de
              générer moins de chargement directement sur la page
            </li>
          </ul>
        </div>
      )}

      {findProject.wireframes && (
        <Wireframes
          wireframes={findProject.wireframes}
          wireframesDesc={findProject.wireframesDesc}
          wireframesDescSuite={findProject.wireframesDescSuite}
        />
      )}

      {findProject.charteGraphiqueTitle && (
        <CharteGraphique
          title={findProject.charteGraphiqueTitle}
          desc_1={findProject.CGDesc_1}
          desc_2={findProject.CGDesc_2}
          desc_3={findProject.CGDesc_3}
          imgCG={findProject.CGImage?.[0]}
          imgCG_2={findProject.CGImage?.[1]}
          logo={findProject.logo}
          logoEcrit={findProject.logoEcrit}
        />
      )}

      {findProject.UI && (
        <section className="w-full my-6 md:my-8">
          <h2 className="text-2xl md:text-3xl font-heading text-left w-full my-4">
            UI
          </h2>
          <div className="w-full mx-auto place-items-center">
            {findProject.title === "Steam" && (
              <div className="flex gap-2 flex-wrap">
                <SteamAvant /> <SteamApres />
              </div>
            )}
            {findProject.title === "Nysos" && (
              <>
                <div className="flex md:flex-row flex-col gap-5">
                  <MVHomePage />
                  <MVArticle />
                  <MVVetements />
                </div>
                <div className="flex flex-wrap flex-col md:flex-row gap-5 mt-5 justify-center">
                  {findProject.UI.map(({ id, imglink }) => (
                    <div
                      key={id}
                      className="relative border-2 border-[#7E1114] rounded text-black h-137 flex flex-col justify-between overflow-x-auto md:w-[48%] w-full"
                    >
                      <Image
                        src={imglink}
                        alt={`img_UI ${id}`}
                        width={2000}
                        height={2000}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
            {findProject.title !== "Steam" && (
              <Image
                src={findProject.UI[0].imglink}
                alt={`img_UI ${findProject.UI[0].id}`}
                width={2000}
                height={2000}
                className="w-4/5 h-auto object-contain border border-[#7E1114]"
              />
            )}
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
            Lien prototype Figma
          </a>
        </section>
      )}
      {findProject.TU && (
        <VisiteTU TU={findProject.TU} TU_2={findProject.TU_2} />
      )}
      <hr className="w-full my-6 md:my-8 border-gray-200" />
      <SimilarProjects Projects={similarProjects} />
    </main>
  );
}
