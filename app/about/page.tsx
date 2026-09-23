import { EmploiCard } from "./components/EmploiCard";

export default function About() {
  const listAbout = [
    {
      id: 0,
      title: "Emplois",
      desc: "Présentation des différents emplois que j’ai eu où j’ai pu mettre en pratique mes compétences et les approfondir.",
    },
    {
      id: 1,
      title: "Diplômes",
      desc: "Présentation des différentes formations que j’ai réalisé et dans lesquelles j’ai développé des softskills et des compétences pratiques.",
    },
    {
      id: 2,
      title: "Loisirs",
      desc: "Présentation des activités que je réalise en plus et qui m’ont permises de développer ma créativité et ma curiosité.",
    },
  ];
  const emploi = [
    {
      id: 0,
      title: "Product designer à Hunter Sync",
      desc: [
        "Création d’une extension Chrome sur Figma",
        "Refonte du site internet de la marque (Figma) puis intégration via Wordpress",
      ],
      type: "Stages",
    },
    {
      id: 1,
      title: "UX / UI designer à TF1",
      desc: [
        "Travail sur la refonte d’un site interne :  wireframe (Figma), entretiens/ recherche utilisateur, restitution",
        "Création de tickets",
        "Ajout de fonctionnalités (questionnaire utilisateur)",
        "graphisme : création de logos",
      ],
      type: "Stages",
    },
    {
      id: 2,
      title: "Assistante Art thérapeute à Bleu Soleil",
      desc: [
        "Création d’ateliers pour les participants",
        "Réalisation de compte rendu des ateliers",
        "Rédaction d’un rapport de stage détaillé avec une analyse psychologique",
      ],
      type: "Stages",
    },
    {
      id: 3,
      title: "Chargée de communication à The GreenLab",
      desc: [
        "SEO : recherche mots clés",
        "Travail sur le site : Audit UX, parcours utilisateurs",
      ],
      type: "Alternances",
    },
    {
      id: 4,
      title: "Assistante Chargée de communication à Institut UTHyL",
      desc: [
        "Travail sur la refonte d’un site interne :  wireframe (Figma), entretiens/ recherche utilisateur, restitution",
        "Création de tickets",
        "Ajout de fonctionnalités (questionnaire utilisateur)",
        "graphisme : création de logos",
      ],
      type: "Alternances",
    },
    {
      id: 5,
      title: "Assistante art thérapeute à Bleu Soleil",
      desc: [
        "J'ai aidé l'art thérapeute dans l'exercice dans sa profession avec un groupe d'adulte dans le cadre d'un atelier d'art plastique thérapie.",
      ],
      type: "Associatif",
    },
    {
      id: 6,
      title: "Association écologique à Université Paris Cité",
      desc: [
        "Réalisation d’une affiche pour l’association",
        "Réunion de choix stratégique pour l(évolution de l’association",
      ],
      type: "Alternances",
    },
  ];
  const etudes = [
    {
      id: 0,
      title: "Master Expert en Stratégie Digitale - spécialité Lead UX",
      subTitle: "Digitale Campus - Paris",
      desc: "Formation de 2 ans au sein de l’école Digital Campus. Cette formation avait un tronc commun qui donne des compétences en tant qu’expert en stratégie digitale complété par des cours de spécialité en UX design, product design ainsi qu’en UI design. J’ai pu développer la plupart de mes compétences pratiques (en product design, UX et UI design) lors de cette formation. ",
    },
    {
      id: 1,
      title: "Bachelor Responsable commarketing Digital",
      subTitle: "ICMD - Paris",
      desc: "Formation de 1 an au sein de l’école ICMD. Cette formation servait à développer des connaissances générales sur le marketing et de communication digital ce qui m’a permis d’avoir des bases solides sur le sujet étoffées par mon alternance réalisée en parrallèle.",
    },
    {
      id: 2,
      title: "Licence Sciences Psychologiques",
      subTitle: "Université Paris Cité - Boulogne",
      desc: "Formation de 3 ans au sein de l’Université Paris Cité. Cette formation avait pour objectif d’obtenir un socle solide sur les différents aspects de la psychologie avec un aspect scientifique appuyé.",
    },
    {
      id: 3,
      title: "Baccalauréat S, spécialité SVT",
      subTitle: "Lycée Jean Pierre Vernant - Sèvres",
      desc: "Formation de 3 ans au sein du lycée Jean Pierre Vernant où j’ai fait un Bac S spécialité SVT avec une option en Cinéma ce qui m’a permis de développer ma créativité et une méthode scientifique et rigoureuse.",
    },
  ];
  return (
    <div>
      <h1>Prodcut Designer</h1>
      <p>
        Je suis diplômée d’un master en tant qu’Expert en Stratégie Digital
        spécialité Lead UX - Product Designer. Je suis actuellement à la
        recherche de ma prochaine expérience professionnel dans laquelle je
        pourrais exprimer ma créativité et montrer mes compétences en UX et en
        UI.
      </p>
      <section>
        {listAbout.map((project) => (
          <div key={project.id}>
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
            <button>Voir plus</button>
          </div>
        ))}
      </section>
      <article>
        <EmploiCard emploi={emploi} type={"Stage"} />
        <EmploiCard emploi={emploi} type={"Alternance"} />
        <EmploiCard emploi={emploi} type={"Associatif"} />
      </article>
      <span className="block border-2 h-1 w-full"></span>
    </div>
  );
}
