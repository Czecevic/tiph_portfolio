"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import coeur from "../assets/coeur.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b-0 shadow-2xl relative">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-2">
          <Image src={coeur} alt="coeur_logo" loading="eager" className="w-5" />
          <Link href="/">Tiphanie Durand</Link>
        </div>
        <div className="hidden md:flex gap-3">
          <Link href="/" className="text-black hover:text-[#7e1114]">
            Accueil
          </Link>
          <Link href="/project" className="text-black hover:text-[#7e1114]">
            Projet
          </Link>
          <Link href="/about" className="text-black hover:text-[#7e1114]">
            À propos
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-black focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 p-4 bg-white border-t">
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-black hover:text-[#7e1114]"
          >
            Accueil
          </Link>
          <Link
            href="/project"
            onClick={toggleMenu}
            className="text-black hover:text-[#7e1114]"
          >
            Projet
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="text-black hover:text-[#7e1114]"
          >
            À propos
          </Link>
        </div>
      )}
    </nav>
  );
};
