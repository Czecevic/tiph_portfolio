export default function project() {
  const listProject = [
    {
      id: 0,
      title: "TF1",
      desc: "Réaliser la refonte du Backoffice interne de TF1 afin de le rendre plus accessible aux nouveaux utilisateurs. ",
      typeProject: "UX / UI / product Owners",
    },
    {
      id: 1,
      title: "Nysos",
      desc: "Créer une solution numérique innovante (e-commerce) qui répond à des besoins réels.",
      typeProject: "UX / UI / product Owners",
    },
    {
      id: 2,
      title: "RATP",
      desc: "Réaliser une exploration éthnographique avec une approche d’éco-conception.",
      typeProject: "UX",
    },
    {
      id: 3,
      title: "Steam",
      desc: "Améliorer un site mobile non éco-conçue en une interface éco-conçue.",
      typeProject: "UX",
    },
    {
      id: 4,
      title: "Bienvenue à Barquette",
      desc: "Améliorer un site mobile non éco-conçue en une interface éco-conçue.",
      typeProject: "UI",
    },
    {
      id: 5,
      title: "The GreenLab",
      desc: "Améliorer un site mobile non éco-conçue en une interface éco-conçue.",
      typeProject: "UI",
    },
  ];
  return (
    <div>
      <h1>Project Product Owner / UX / UI</h1>
      {listProject.map(
        (project) =>
          project.typeProject === "UX / UI / product Owners" && (
            <div key={project.id}>
              <h1>{project.title}</h1>
              <p>{project.desc}</p>
            </div>
          ),
      )}
      <h1>Project UX</h1>
      {listProject.map(
        (project) =>
          project.typeProject === "UX" && (
            <div key={project.id}>
              <h1>{project.title}</h1>
              <p>{project.desc}</p>
            </div>
          ),
      )}
      <h1>Project UI</h1>
      {listProject.map(
        (project) =>
          project.typeProject === "UI" && (
            <div key={project.id}>
              <h1>{project.title}</h1>
              <p>{project.desc}</p>
            </div>
          ),
      )}
    </div>
  );
}
