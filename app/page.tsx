import Link from "next/link";
import { NavBar } from "./components/NavBar";
import Image from "next/image";
import oizong from "./assets/oisong.jpg";

export default function Home() {
  const listProject = [
    {
      id: 0,
      title: "TF1",
      desc: "Réaliser la refonte du Backoffice interne de TF1 afin de le rendre plus accessible aux nouveaux utilisateurs. ",
    },
    {
      id: 1,
      title: "Nysos",
      desc: "Créer une solution numérique innovante (e-commerce) qui répond à des besoins réels.",
    },
    {
      id: 2,
      title: "RATP",
      desc: "Réaliser une exploration éthnographique avec une approche d’éco-conception.",
    },
    {
      id: 3,
      title: "Steam",
      desc: "Améliorer un site mobile non éco-conçue en une interface éco-conçue.",
    },
  ];
  const overProject = [
    {
      id: 0,
      title: "Photos",
      desc: "Je souhaite vous présenter mes projets photos qui se décompose en plusieurs sections : photos argentique (portrait et paysage) et photo numérique avec retouches",
    },
    {
      id: 1,
      title: "Dessins et peintures",
      desc: "Je souhaite vous montrer mon côté créatif à travers des dessins et créations que j’ai réalisé. Je fais de la peinture sur toile et également sur vêtements",
    },
    {
      id: 2,
      title: "Marque de vêtements",
      desc: "Nysos est une marque de custom de vêtements à la peinture que j’ai pu créer de manière fictive pour mon mémoire de Master. J’espère la rendre bientôt concrète.",
    },
  ];
  return (
    <div>
      <NavBar />
      <h2>Tiphanie Durand</h2>
      <h1>Product Designer</h1>
      <p>
        Je suis diplômée d’un master en tant qu’Expert en Stratégie Digital
        spécialité Lead UX - Product Designer. Je suis actuellement à la
        recherche de ma prochaine expérience professionnel dans laquelle je
        pourrais exprimer ma créativité et montrer mes compétences en UX et en
        UI.
      </p>
      <h1>Projets</h1>
      <section className="flex">
        {listProject.map((project) => (
          <div key={project.id} className="">
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
          </div>
        ))}
      </section>
      <button className="border-2 p-3 rounded-lg">
        <Link href={"/project"}>Voir plus</Link>
      </button>
      <section className=" bg-red-900 text-white">
        <h1>Contactez moi pour vos projets</h1>
        <h2>Création de tout types de produits</h2>
        <p>
          Afin de développer votre produit avec les méthodes d'UX et de UI les
          plus adaptées à votre besoin !
        </p>
        <button className="border-2 p-3 rounded-lg">Contacter</button>
      </section>
      <article className="">
        <h1>Projets personnels en dehors du design</h1>
        <p>
          Dans mon temps libre, je dessine, je fais des photos, je couds, ... Je
          fais donc beaucoup d’activité créatives qui me permettent de
          développer mon esprit artistique et ma créativité.
        </p>
        <section className="flex flex-wrap justify-center">
          {overProject.map((project) => (
            <div key={project.id} className="w-1/2">
              <h1 className="text-2xl">{project.title}</h1>
              <p>{project.desc}</p>
              <button className="border-2 p-3 rounded-lg">Decouvrir</button>
            </div>
          ))}
        </section>
        <Image alt="oizong" src={oizong} loading="eager" />
      </article>
    </div>
  );
}
