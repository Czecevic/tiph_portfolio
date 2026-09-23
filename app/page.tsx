import Link from "next/link";
import Image from "next/image";
import oizong from "./assets/oisong.jpg";
import { listProject, otherProject } from "../public/data/data";
import tiph_photo from "./assets/photo_tiph_couleur.png";
import { FooterBar } from "./components/FooterBar";
export default function Home() {
  return (
    <div className="m-5">
      <div className="flex items-center">
        <Image
          src={tiph_photo}
          alt="photo_tiph"
          className="w-40 grayscale-100 hover:grayscale-0 transition-all duration-300"
        ></Image>
        <div className="m-5">
          <h1 className="sm:text-3xl text-xl font-normal mb-3.5">
            Tiphanie Durand
          </h1>
          <h1 className="sm:text-6xl text-3xl mb-3.5 tracking-widest font-heading font-normal uppercase">
            Product Designer
          </h1>
          <p className="text-md">
            Je suis diplômée d’un master en tant qu’Expert en Stratégie Digital
            spécialité Lead UX - Product Designer. Je suis actuellement à la
            recherche de ma prochaine expérience professionnel dans laquelle je
            pourrais exprimer ma créativité et montrer mes compétences en UX et
            en UI.
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-bold space-2">Projets</h1>
      <section className="flex flex-wrap gap-10">
        {listProject.map((project) => {
          if (project.id < 4) {
            return (
              <Link
                href={`/project/${project.id}`}
                key={project.id}
                className="flex flex-col md:w-1/5 w-full justify-between mb-5"
              >
                <h1 className="font-bold my-3">{project.title}</h1>
                <p className="mb-3">{project.desc}</p>
                <div className="h-64 w-full overflow-hidden rounded-lg mt-auto">
                  <img
                    src={project.imgPres}
                    alt="photo_img"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Link>
            );
          }
        })}
      </section>
      <div className="w-full text-center mb-10">
        <button className="border-2 p-3 rounded-lg">
          <Link href={"/project"}>Voir plus</Link>
        </button>
      </div>
      <section className="bg-red-900 text-white p-5 rounded-lg flex flex-col items-center gap-5">
        <h1 className="text-4xl font-extrabold">
          Contactez moi pour vos projets
        </h1>
        <h1 className="text-2xl font-normal tracking-wider">
          Création de tout types de produits
        </h1>
        <p className="tracking-wider font-light">
          Afin de développer votre produit avec les méthodes d'UX et de UI les
          plus adaptées à votre besoin !
        </p>
        <button className="border-2 p-3 rounded-lg">Contacter</button>
      </section>
      <article className="flex mt-5">
        <div>
          <h1 className="text-4xl font-extrabold tracking-wider mb-5">
            Projets personnels en dehors du design
          </h1>
          <p className="mb-5">
            Dans mon temps libre, je dessine, je fais des photos, je couds, ...
            Je fais donc beaucoup d’activité créatives qui me permettent de
            développer mon esprit artistique et ma créativité.
          </p>
          <section className="flex flex-wrap justify-center">
            {otherProject.map((project) => (
              <div
                key={project.id}
                className={`${project.id != 2 ? `w-1/2` : `w-full`} flex flex-col justify-between p-4`}
              >
                <h1 className="text-2xl font-extrabold mb-3">
                  {project.title}
                </h1>
                <p className="mb-3">{project.desc}</p>
                <div className="w-full text-center mt-auto">
                  <button className="border-2 p-3 rounded-lg">Decouvrir</button>
                </div>
              </div>
            ))}
          </section>
        </div>
        <Image
          alt="oizong"
          src={oizong}
          loading="eager"
          className="w-1/3 rounded-lg object-cover"
        />
      </article>
      <FooterBar />
    </div>
  );
}
