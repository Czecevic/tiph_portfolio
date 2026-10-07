export interface Project {
  id: number;
  title: string;
  imgPres: string;
  desc?: string;
  typeProject: string;
  role: string;
  objectif: string;
  date: string;
  titleBackoffice?: string;
  descBackoffice?: string;
  backoffice?: string;
  descTitle?: string;
  rechercheUtilisateur?: string;
  suiteRechercheUtilisateur?: string;
  recherche?: string[];
  recherche_2?: string;
  wireframes?: string[];
  wireframesDesc?: string;
  wireframesDescSuite?: string;
  ciblePrincipale?: string;
  ciblePrincipaleSuite?: string;
  charteGraphiqueTitle?: string;
  CGDesc_1?: string;
  CGDesc_2?: string;
  CGDesc_3?: string;
  CGImage?: string[];
  logo?: string;
  logoEcrit?: string;
  UI?: string;
}

export interface OtherProject {
  id: number;
  title: string;
  desc: string;
}

export interface FooterCategory {
  id: number;
  title: string;
  links: string[];
}

export const listProject: Project[] = [
  {
    id: 0,
    title: "TF1 - Backoffice",
    imgPres: "/data/img/TF1/tf1.png",
    titleBackoffice: "Backoffice avant la refonte",
    descBackoffice: "Reconstitution du visuel du backoffice avant sa refonte.",
    backoffice: "/data/img/TF1/backoffice.png",
    descTitle:
      "Refondre un outil interne utilisé par différentes typologies d’utilisateurs",
    desc: "Réaliser la refonte du Backoffice interne de TF1 afin de le rendre plus accessible aux nouveaux utilisateurs.",
    typeProject: "UX / UI / product Owners",
    role: "UX / UI designer",
    objectif:
      "Adapter le backoffice interne aux utilisateurs, le simplifier et le rendre plus accessible aux nouveaux utilisateurs.",
    date: "6 mois - sep 2024 / fev 2025",
    rechercheUtilisateur:
      "J’ai réalisé des personas au total, correspondant aux profils de tous les utilisateurs. À la suite de ces personas, nous avons réalisé des shadowings ainsi que des interviews :",
    suiteRechercheUtilisateur:
      "À la suite de cette recherche, on a pu retravailler les personas et valider ou non nos hypothèses. Les résultats de la recherche utilisateur ont été présentés aux équipes et supérieurs à travers un atelier de restitution.",
    recherche: [
      "/data/img/TF1/recherche_1.png",
      "/data/img/TF1/recherche_2.png",
    ],
    recherche_2: "/data/img/TF1/recherche_3.png",
    wireframes: [
      "/data/img/TF1/wireframe_1.png",
      "/data/img/TF1/wireframe_2.png",
      "/data/img/TF1/wireframe_3.png",
      "/data/img/TF1/wireframe_4.png",
      "/data/img/TF1/wireframe_5.png",
    ],
    wireframesDesc:
      "Grâce à la recherche utilisateur et à l’atelier de facilitation, nous avons pu recréer l’écran et proposer des wireframes aux différentes parties prenantes en réalisant des tests d’utilisabilité.",
    wireframesDescSuite:
      "Maquettes et Wireframes réalisés à partir de la bibliothèque Ant Design.",
    UI: "/data/img/TF1/UI.png",
  },
  {
    id: 1,
    title: "Nysos",
    imgPres: "/data/img/Nysos/nysos.png",
    backoffice: "/data/img/Nysos/recherche_1.png",
    titleBackoffice: "Parcours utilisateur",
    descBackoffice:
      "À partir du persona principal j’ai pu réaliser une user journey map de ce persona en décrivant les différentes étapes de son parcours de la recherche internet jusqu’à la réception du produit.",
    rechercheUtilisateur:
      "J’ai commencé par trouver l’idée puis déterminer si cela pouvait intéresser des personnes en faisant des recherches internet puis un questionnaire sur ma cible envisagée. Les résultats sortant de ces études m’ont permis de dresser deux personas ainsi que de définir la cible principale et de savoir qu’il y avait bel et bien un marché pour ma proposition.",
    desc: "Créer une solution numérique innovante (e-commerce) qui répond à des besoins réels.",
    typeProject: "UX / UI / product Owners",
    role: "Product designer",
    objectif:
      "Créer une solution numérique innovante qui répond à des besoins réels",
    date: "janvier 2024 - août 2025",
    recherche: [
      "/data/img/Nysos/utilisateur_1.png",
      "/data/img/Nysos/utilisateur_2.png",
    ],
    ciblePrincipale:
      "18 – 25 ans, citadines, femmes ; désireux d’avoir des pièces uniques, attirés par la mode, achetant actuellement principalement en seconde main ou petit créateur, étudiantes ou jeunes diplômées avec forte dépense pour la mode.",
    ciblePrincipaleSuite:
      "Les personnes entre 18 et 25 dépense en moyenne plus pour leur budget mode : 116 €/mois contre 82 €/mois. Ce qui donne environ 1 392 €/an (Republik Retail). Une autre étude évoque que les femmes de 18-25 ans dépensent en moyenne 1 280 €/an (étude de l’application Joko).",
    wireframes: [
      "/data/img/Nysos/wireframe_1.png",
      "/data/img/Nysos/wireframe_2.png",
    ],
    wireframesDesc:
      "Le site internet étant un site e-commerce qui a donc pour objectif de vendre des produits mais également de permettre aux personnes de prendre contact avec l’artiste, j’ai décidé de créer une version mobile et desktop. La version mobile est privilégiée et c’est une PWA réalisée sur Shopify.",
    charteGraphiqueTitle: "Charte Graphique",
    CGDesc_1:
      "J’ai d’abord réalisé un moodboard pour avoir une idée de l’esthétique que pourrait arborer mon site internet pour transmettre le côté premium de la marque.",
    CGDesc_2:
      "Ensuite je me suis inspirée des couleurs déjà choisies de mon logo pour réaliser la charte graphique. J’ai décidé de mixer une couleur vive tel que le orange afin de trancher avec le reste et donner ce côté créatif à mon site internet tout en arborant des couleurs plus neutres.",
    CGDesc_3:
      "J’ai décidé de partir sur la font Inter pour les textes et titres parce qu’elle est open source et accessible. Pour le logo j’ai choisi la font Nori Regular pour un effet calligraphie élégant.",
    CGImage: [
      "/data/img/Nysos/charte_graphique_1.png",
      "/data/img/Nysos/charte_graphique_3.png",
    ],
    logo: "/data/img/Nysos/logo.svg",
    logoEcrit: "/data/img/Nysos/logo_ecrit.png",
    UI: "x",
  },
  {
    id: 2,
    title: "RATP",
    imgPres: "/data/img/RATP/ratp.png",
    desc: "Réaliser une exploration ethnographique avec une approche d’éco-conception.",
    typeProject: "UX",
    role: "UX designer",
    objectif:
      "Réaliser une exploration ethnographique avec une approche d’éco-conception.",
    date: "1 mois - nov 2023",
  },
  {
    id: 3,
    title: "Steam",
    desc: "Améliorer un site mobile non éco-conçu en une interface éco-conçue.",
    imgPres: "/data/img/Steam/steam.png",
    typeProject: "UX",
    role: "UX designer",
    objectif:
      "Concevoir une interface éco-conçue à partir d’un site mobile qui ne l’est pas",
    date: "mars 2023",
  },
  {
    id: 4,
    title: "Bienvenue à Barquette",
    desc: "Réaliser le design system d'une application.",
    imgPres: "/data/img/Barquette/barquette.png",
    typeProject: "UI",
    role: "UI designer",
    objectif:
      "Réaliser un design système de l’application de notre choix (réelle ou fictive)",
    date: "2 semaines - mai 2025",
  },
  {
    id: 5,
    title: "The GreenLab",
    desc: "Rendre le site plus attractif et convertir les visiteurs.",
    imgPres: "/data/img/GreenLab/greenLab.png",
    typeProject: "UI",
    role: "UI designer",
    objectif:
      "Rendre plus attractif le site et convertir les visiteurs en clients tout en appliquant une nouvelle charte graphique",
    date: "sept 2023 - août 2024",
  },
];

export const otherProject: OtherProject[] = [
  {
    id: 0,
    title: "Photos",
    desc: "Je souhaite vous présenter mes projets photos : argentique (portrait et paysage) et numérique avec retouches.",
  },
  {
    id: 1,
    title: "Dessins et peintures",
    desc: "Je souhaite vous montrer mon côté créatif à travers des dessins et peintures sur toile et vêtements.",
  },
  {
    id: 2,
    title: "Marque de vêtements",
    desc: "Nysos est une marque de custom de vêtements à la peinture que j’ai pu créer pour mon mémoire de Master.",
  },
];

export const FooterInfo: FooterCategory[] = [
  {
    id: 0,
    title: "Collection",
    links: ["Vêtements", "Sac - totebag", "Accessoires"],
  },
  {
    id: 1,
    title: "Personnalisation",
    links: ["Faire ma demande", "Discuter avec l'artiste"],
  },
  {
    id: 2,
    title: "Sérigraphie",
    links: ["Vêtements", "Sac - totebag", "Accessoires"],
  },
  {
    id: 3,
    title: "À propos de nous",
    links: ["Notre histoire", "Contact"],
  },
  {
    id: 4,
    title: "Informations",
    links: [
      "FAQ",
      "Retouches",
      "Retouches et remboursement",
      "Politique de confidentialité",
    ],
  },
  {
    id: 5,
    title: "Nos réseaux",
    links: ["Instagram", "TikTok", "Pinterest"],
  },
];
