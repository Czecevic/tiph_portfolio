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
        <h1>Emplois</h1>
      </article>
    </div>
  );
}
