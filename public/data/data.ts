import {
  IllustrationItem,
  ItemProduct,
  BundleItem,
  ReviewItem,
  FeatureItem,
} from "@/interfaces";
import tshirtLogo from "@/public/data/img/Nysos/app_Nysos/t-shirt_blanc.jpg";
import sopranos from "@/public/data/img/Nysos/app_Nysos/t-shirt_1.jpg";
import pullVert from "@/public/data/img/Nysos/app_Nysos/veste_verte.jpg";
import pantalonGhibli from "@/public/data/img/Nysos/app_Nysos/pantalon_dragon.jpg";
import veste from "@/public/data/img/Nysos/app_Nysos/veste.jpg";
import super_nana from "@/public/data/img/Nysos/app_Nysos/polos_nana.jpg";
import { Project, OtherProject, FooterCategory } from "@/interfaces";
import tshirt_face from "@/public/data/img/Nysos/app_Nysos/t-shirt_face.png";
import tshirt_dos from "@/public/data/img/Nysos/app_Nysos/t-shirt_dos.png";
import tshirt_arriere from "@/public/data/img/Nysos/app_Nysos/t-shirt_arriere.png";
import tshirt_avant from "@/public/data/img/Nysos/app_Nysos/t-shirt_avant.png";
import totebag_bob from "@/public/data/img/Nysos/app_Nysos/bob_l'eponge_totebag.jpg";
import veste_verte from "@/public/data/img/Nysos/app_Nysos/veste_verte.jpg";
import pantalon from "@/public/data/img/Nysos/app_Nysos/pantalon.jpg";
import tiph from "@/public/data/img/Nysos/app_Nysos/tiph.jpg";
import totebag from "@/public/data/img/Nysos/app_Nysos/totebag_logo.jpg";
import serigraphie_1 from "@/public/data/img/Nysos/app_Nysos/serigraphie.png";
import serigraphie_2 from "@/public/data/img/Nysos/app_Nysos/serigraphie_2.png";
export const listProject: Project[] = [
  {
    id: 0,
    title: "TF1 - Backoffice",
    descTitle:
      "Refondre un outil interne utilisé par différentes typologies d’utilisateurs",
    imgPres: "/data/img/TF1/tf1.png",
    titleBackoffice: "Backoffice avant la refonte",
    descBackoffice: "Reconstitution du visuel du backoffice avant sa refonte.",
    backoffice: "/data/img/TF1/backoffice.png",
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
    UI: [
      {
        id: 0,
        imglink: "/data/img/TF1/UI.png",
      },
    ],
  },
  {
    id: 1,
    title: "Nysos",
    descTitle:
      "Réalisation d’un projet entreprenarial (mémoire de fin de master) dont nous devions réaliser la solution numérique proposée",
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
    UI: [
      {
        id: 0,
        imglink: "/data/img/Nysos/UI_2.png",
      },
      {
        id: 1,
        imglink: "/data/img/Nysos/UI_3.png",
      },
    ],
    TU: [
      {
        id: 0,
        imglink: "/data/img/Nysos/TU_1.png",
      },
      {
        id: 1,
        imglink: "/data/img/Nysos/TU_2.png",
      },
      {
        id: 2,
        imglink: "/data/img/Nysos/TU_3.png",
      },
    ],
    TU_2: [
      {
        id: 0,
        imglink: "/data/img/Nysos/TU_4.png",
      },
      {
        id: 1,
        imglink: "/data/img/Nysos/TU_5.png",
      },
    ],
  },
  {
    id: 2,
    title: "RATP",
    descTitle:
      "Amélioration de l’expérience utilisateur dans les transports franciliens",
    imgPres: "/data/img/RATP/ratp.png",
    desc: "Vous êtes chargés d’explorer les transports parisiens en utilisant des méthodes ethnographiques, sociologiques, recherche et d’audit UX. L’objectif principal est d’identifier les problèmes, les besoins et les comportements des utilisateurs, ainsi que de créer des scénarios d’utilisateurs pour améliorer l’expérience globale.",
    typeProject: "UX",
    role: "UX designer",
    objectif:
      "Réaliser une exploration ethnographique avec une approche d’éco-conception.",
    date: "1 mois - nov 2023",
    explication:
      "4 thèmes d’hypothèses : signalisation, accessibilité, circulation et services Nous avons réalisés 2 personas et 2 user journey map.",
    explicationIllu: [
      {
        id: 0,
        imglink: "/data/img/RATP/explication_1.png",
      },
      {
        id: 1,
        imglink: "/data/img/RATP/explication_2.png",
      },
    ],
    explicationDesc:
      "Puis nous avons réalisés une recherche utilisateur : nous avons interrogé des personnes via un guide d’entretien via une ressource présente sur DONUT PANIC. Les questions s’appuient sur nos hypothèses. Nous avons ensuite analysés ces entretiens grâce à la méthode de Design Thinking : ROSE -THORN - BUD. Nous avons ensuite regroupé par sujet communs nos verbatims puis nous avons organiser des groupes d’idées en fonction de nos grands thèmes d’hypothèses.",
    explicationDescSuite:
      "Afin de mieux comprendre notre analyse, nous avons étudié les différents biais cognitifs qui peuvent s’appliquer à nos personas ou bien aux personnes interviewées. A travers nos interviews nous avons remarqué une nouvelle catégorie : émotion et nous avons décidé de nous orienter vers cela pour notre solution.",
    userFlow: [
      {
        id: 0,
        imglink: "/data/img/RATP/userFlow.png",
      },
    ],
    reponseWireframes: [
      {
        id: 0,
        imglink: "/data/img/RATP/page_zenway.png",
        title: "Page d'accueil du Zenway",
      },
      {
        id: 1,
        imglink: "/data/img/RATP/page_trajet.png",
        title: "Page trajet",
      },
    ],
    reponseWireframeDesc:
      "Nous avons donc décider de travailler sur l’interface existant des bornes interactives «Zenway» présente en station. Notre objectif : créer une expérience dont l’utilisateur se souviendra en s’appuyant sur le biais émotionnel Notre idée est donc la suivante : apporter une réelle dimension zen à ces bornes zenway et faire vivre une expérience inédite dans les transports tout en nous appuyant sur des règles d’écoconception. Nous avons donc repenser l’interface de ces bornes avec une approche unique, sensorielle et inclusive où la personnalisation et le bien être se rencontrent pour donner une expérience et mémorable à chacun. Pour cela nous avons décider de rajouter une enceinte directionnelle au dessus des bornes ",
    UI: [
      {
        id: 0,
        imglink: "/data/img/RATP/UI.png",
      },
    ],
  },
  {
    id: 3,
    title: "Steam",
    descTitle: "Transformer une interface mobile en interface éco-conçue",
    desc: "Après avoir regarder le score d’éco-conception de site internet nous avons de décider de partir sur l’un avec un mauvais score afin de le transformer en site d’avantage respectueux des règles d’éco-conception",
    imgPres: "/data/img/Steam/steam.png",
    typeProject: "UX",
    role: "UX designer",
    objectif:
      "Concevoir une interface éco-conçue à partir d’un site mobile qui ne l’est pas",
    date: "mars 2023",
    methodologieDesc:
      "Nous avons décider de partir sur Steam qui a un éco index de G et un score Green IT de E ce qui est trés faible. Nous avons prit plus précisément la page du jeu «Iratus : Lord of the death» . Nous avons ensuite réaliser un atelier H.O.R.S.E. : Hide, Organisze, Reduce, Standardize, Eliminate. Réalisations de Wireframes sur papier. ",
    methodologieImg: [
      {
        id: 0,
        imglink: "/data/img/Steam/metho_1.png",
      },
      {
        id: 1,
        imglink: "/data/img/Steam/metho_2.png",
      },
    ],
    UI: [
      {
        id: 0,
        imglink: "/data/img/steam/header.png",
      },
      {
        id: 0,
        imglink: "/data/img/steam/videoContainer.png",
      },
    ],
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

export const FIRST_PRODUCT_ROW: ItemProduct[] = [
  { id: 0, linkImg: sopranos, title: "T shirt - The Sopranos" },
  { id: 1, linkImg: tshirtLogo, title: "Pull - Mask Off" },
];

export const SECOND_PRODUCT_ROW: ItemProduct[] = [
  { id: 0, linkImg: pantalonGhibli, title: "Pantalon - Studio Ghibli" },
  { id: 1, linkImg: veste, title: "Veste - Doberman" },
];

export const FEATURED_VESTE: ItemProduct = {
  id: 2,
  linkImg: pullVert,
  title: "Veste - Fleurs d'été",
};

export const FEATURED_POLO: ItemProduct = {
  id: 3,
  linkImg: super_nana,
  title: "Polos - Super Nanas",
};

export const SUGGESTIONS = [
  { id: 0, img: totebag_bob, title: "Totebag Bob l'éponge" },
  { id: 1, img: veste, title: "Veste" },
  { id: 2, img: veste_verte, title: "Veste verte" },
];

export const SUGGESTIONS_END = [
  { id: 0, img: pantalon, title: "Personnalisation" },
  { id: 1, img: tiph, title: "Contacter l'artiste" },
];
export const INFO_LINKS = [
  "Guide des tailles et coupe",
  "Matières",
  "Paiement et remboursement",
  "Livraison et retours",
];

export const THUMBNAILS = [
  { src: tshirt_face, alt: "T-shirt face" },
  { src: tshirt_dos, alt: "T-shirt dos" },
  { src: tshirt_arriere, alt: "T-shirt arrière" },
  { src: tshirt_avant, alt: "T-shirt avant" },
];

export const FIRST_ILLUSTRATIONS: IllustrationItem[] = [
  {
    id: 0,
    name: "totebag - logo",
    link: totebag,
    add: "Collection de vêtements",
  },
  {
    id: 1,
    name: "pantalon - logo",
    link: pantalon,
    add: "Personnalisation",
  },
];

export const MIDDLE_ILLUSTRATIONS: IllustrationItem[] = [
  {
    id: 0,
    name: "tshirt - logo",
    link: tshirtLogo,
    add: "Pull - Mask off Price",
  },
  {
    id: 1,
    name: "tshirt - sopranos",
    link: sopranos,
    add: "T shirt - The Sopranos Price",
  },
  {
    id: 2,
    name: "pull",
    link: pullVert,
    add: "Name of the article Price",
  },
];

export const SERIGRAPHIE_ILLUSTRATIONS: IllustrationItem[] = [
  {
    id: 0,
    name: "serigraphie 1",
    link: serigraphie_1,
    add: "Headache",
  },
  {
    id: 1,
    name: "serigraphie 2",
    link: serigraphie_2,
    add: "Sad moon",
  },
];

export const CATEGORIES = ["Vêtements", "Sac - totebag", "Accessoires"];

export const NAV_LINKS = [
  "Your Store",
  "New & Noteworthy",
  "Categories",
  "Points Shop",
  "News",
  "Labs",
];

export const BUNDLES: BundleItem[] = [
  {
    id: 1,
    title: "Buy Iratus: Necromancer Edition",
    discountText: "Save 5% off all 3 items!",
  },
  {
    id: 2,
    title: "Buy Strategy Bundle",
    discountText: "Save 25% off all 5 items!",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    label: "Steam Deck Compatibility",
    value: "Playable",
    valueColor: "text-[#20cf20] font-semibold",
  },
  {
    label: "Languages",
    value: "English and 11 more",
    valueColor: "text-white",
  },
  {
    label: "Player Modes",
    value: "Single-player",
    valueColor: "text-white",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    author: "Ruein",
    recommended: "Not Recommended",
    content:
      "“I should have heeded that other review which said that groups of enemies can suddenly do enormous damage for no perceivable reason. There's the core of a fun game here but it's completely ruined by very inconsistent explanations of combat mechanics.”",
    date: "October 24",
    hours: "3.5 hrs on record",
  },
  {
    id: 2,
    author: "Kreacher",
    recommended: "Recommended",
    content:
      "“did the tutorial. after that restarted on a higher difficulty since it couldn't be worse than darkest dungeon. and ended up finishing the game in 1 sitting..... it's a lot of fun a laid back experience and you can make it as hard as you want it with difficulty and units you use.”",
    date: "October 19",
    hours: "10.6 hrs on record",
  },
  {
    id: 3,
    author: "Hannibal",
    recommended: "Recommended",
    content:
      "“This is a must for the turn-based indie dark fantasy dungeon crawler lovers!”",
    date: "October 24",
    hours: "44.9 hrs on record",
  },
  {
    id: 4,
    author: "Doctor Murder",
    recommended: "Recommended",
    content:
      "“Pure fun. It's fun building different parties and builds. It's fun finding just the right items and artifacts. Game too slow? Just speed it up to 5 times speed. You like Darkest dungeons than you will like this.”",
    date: "October 20",
    hours: "113.2 hrs on record",
  },
  {
    id: 5,
    author: "sebsal",
    recommended: "Recommended",
    content:
      "“Made a party of screaming women which instantly drive all the men they come across to insanity and death with their wailing and nagging. I cannot commend this game enough for its realism”",
    date: "October 24",
    hours: "7.9 hrs on record",
  },
  {
    id: 6,
    author: "REY",
    recommended: "Recommended",
    content:
      "“Not as amazing as Darkest Dungeon but still a great game in the genre, Great visuals, satisfying combat, good music and a thrilling atmosphere.”",
    date: "October 10",
    hours: "25.3 hrs on record",
  },
  {
    id: 7,
    author: "Guardfather",
    recommended: "Recommended",
    content:
      "“This game is fantastic. And it runs great on Linux. I've had a lot of fun figuring out different party configurations to take on various situations. The sanity system wasn't clear to me at first...”",
    date: "October 9",
    hours: "65.8 hrs on record",
  },
  {
    id: 8,
    author: "TheGreatR",
    recommended: "Recommended",
    content:
      "“Darkest Dungeon clone but you're the bad guy. The narrator here is equally iconic if you ask me. It's very short though so please keep that in mind when buying it.”",
    date: "October 1",
    hours: "28.4 hrs on record",
  },
  {
    id: 9,
    author: "Theoreocook",
    recommended: "Recommended",
    content:
      "“Played for 3 hours and I really like this game, it has a darkest dungeon type of style to it. My favorite part about the game is your a necromancer spawning your minions on the world.”",
    date: "October 24",
    hours: "3.7 hrs on record",
  },
  {
    id: 10,
    author: "Swajius",
    recommended: "Recommended",
    content:
      "“Reminds me of Deeper Darkness, but seems to be easier to understand the mechanics. I like the game and you cannot beat the price right now”",
    date: "October 23",
    hours: "6.5 hrs on record",
  },
  {
    id: 11,
    author: "Ratspike",
    recommended: "Review",
    content:
      "“Darkest dungeon clone that is easier, with less creativity in all areas ( dungeon map, talents specs mechanics etc). It's alright if you want more of the genre”",
    date: "October 25",
    hours: "13.3 hrs on record",
  },
  {
    id: 12,
    author: "giantshorty",
    recommended: "Recommended",
    content: "“Absolutely phenomenal”",
    date: "October 24",
    hours: "26.0 hrs on record",
  },
  {
    id: 13,
    author: "E-beksi",
    recommended: "Recommended",
    content:
      "“if you like turn based strategies like darkest dungeon, but with a more masochistic difficulty level”",
    date: "October 24",
    hours: "15.7 hrs on record",
  },
];
