import { EmploiCard } from "./components/EmploiCard";
import { FooterBar } from "../components/FooterBar";

const LIST_ABOUT = [
  {
    id: 0,
    title: "Emplois",
    desc: "Présentation des différents postes où j’ai pu mettre en pratique mes compétences et les approfondir.",
  },
  {
    id: 1,
    title: "Diplômes",
    desc: "Présentation des différentes formations dans lesquelles j’ai développé des compétences pratiques et soft skills.",
  },
  {
    id: 2,
    title: "Loisirs",
    desc: "Présentation des activités créatives que je pratique pour nourrir ma curiosité.",
  },
];

const EMPLOIS = [
  {
    id: 0,
    title: "Product designer à Hunter Sync",
    desc: [
      "Création d’une extension Chrome sur Figma",
      "Refonte du site internet de la marque (Figma) puis intégration via WordPress",
    ],
    type: "Stage",
  },
  {
    id: 1,
    title: "UX / UI designer à TF1",
    desc: [
      "Refonte d’un site interne : wireframes (Figma), entretiens et recherche utilisateur, restitution",
      "Création de tickets et spécifications",
      "Ajout de fonctionnalités (questionnaire utilisateur)",
      "Graphisme : création de logos",
    ],
    type: "Stage",
  },
  {
    id: 2,
    title: "Assistante Art-thérapeute à Bleu Soleil",
    desc: [
      "Création d’ateliers pour les participants",
      "Réalisation de comptes-rendus d’ateliers",
      "Rédaction d’un rapport de stage détaillé avec analyse",
    ],
    type: "Stage",
  },
  {
    id: 3,
    title: "Chargée de communication à The GreenLab",
    desc: [
      "SEO : recherche et stratégie de mots-clés",
      "Travail sur le site : Audit UX, parcours utilisateurs",
    ],
    type: "Alternance",
  },
  {
    id: 4,
    title: "Assistante Chargée de communication à Institut UTHyL",
    desc: [
      "Travail sur la refonte d’un site interne : wireframe (Figma), entretiens / recherche utilisateur",
      "Création de visuels et supports",
    ],
    type: "Alternance",
  },
  {
    id: 5,
    title: "Assistante art-thérapeute à Bleu Soleil",
    desc: [
      "Accompagnement d'un groupe d'adultes dans le cadre d'un atelier d'art-plastique thérapie.",
    ],
    type: "Associatif",
  },
  {
    id: 6,
    title: "Association écologique à Université Paris Cité",
    desc: [
      "Réalisation d’une affiche pour l’association",
      "Réunion de choix stratégique pour l’évolution de l’association",
    ],
    type: "Associatif",
  },
];

const ETUDES = [
  {
    id: 0,
    title: "Master Expert en Stratégie Digitale - Spécialité Lead UX",
    subTitle: "Digital Campus - Paris",
    desc: "Formation de 2 ans. Tronc commun en stratégie digitale complété par des cours de spécialité en UX, UI et Product Design.",
  },
  {
    id: 1,
    title: "Bachelor Responsable Communication Marketing Digital",
    subTitle: "ICMD - Paris",
    desc: "Formation de 1 an développant des connaissances générales en marketing et communication digitale.",
  },
  {
    id: 2,
    title: "Licence Sciences Psychologiques",
    subTitle: "Université Paris Cité - Boulogne",
    desc: "Formation de 3 ans apportant un socle solide sur les différents aspects de la psychologie et démarche scientifique.",
  },
  {
    id: 3,
    title: "Baccalauréat S, spécialité SVT",
    subTitle: "Lycée Jean-Pierre Vernant - Sèvres",
    desc: "Bac S avec option Cinéma, développant méthode scientifique et esprit créatif.",
  },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <header className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest font-heading">
          Product Designer
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Diplômée d’un Master Expert en Stratégie Digitale (spécialité Lead UX / Product Designer),
          je recherche ma prochaine opportunité professionnelle pour exprimer ma créativité
          et concevoir des expériences utilisateurs d'exception.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LIST_ABOUT.map((item) => (
          <div
            key={item.id}
            className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold font-heading mb-6 border-b pb-2">
          Expériences professionnelles
        </h2>
        <EmploiCard emploi={EMPLOIS} type="Stage" />
        <EmploiCard emploi={EMPLOIS} type="Alternance" />
        <EmploiCard emploi={EMPLOIS} type="Associatif" />
      </section>

      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold font-heading mb-6 border-b pb-2">
          Formations & Diplômes
        </h2>
        <div className="space-y-4">
          {ETUDES.map((etude) => (
            <div key={etude.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="font-bold text-lg text-gray-900">{etude.title}</h3>
              <p className="text-sm font-semibold text-[#7e1114] mb-2">{etude.subTitle}</p>
              <p className="text-sm text-gray-700">{etude.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FooterBar />
    </div>
  );
}
