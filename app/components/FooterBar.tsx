import Link from "next/link";

export const FooterBar = () => {
  return (
    <footer className="flex flex-col justify-between p-3 border-t-2">
      <h1 className="uppercase">Section</h1>
      <div className="flex flex-col gap-3">
        <Link href="/" className="text-black hover:text-[#7e1114]">
          Accueil
        </Link>
        <Link href="/project" className="text-black hover:text-[#7e1114]">
          Projet
        </Link>
        <Link href="/about" className="text-black hover:text-[#7e1114]">
          A propos
        </Link>
      </div>
    </footer>
  );
};
