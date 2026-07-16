import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex justify-between p-3">
      <h1>Tiphanie Durand</h1>
      <div className="flex gap-3">
        <Link href="/">Accueil</Link>
        <Link href="/project">Projet</Link>
        <Link href="/about">A propos</Link>
      </div>
    </nav>
  );
};
