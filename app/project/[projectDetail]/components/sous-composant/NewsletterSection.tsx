import { ArrowRight } from "lucide-react";

export const NewsletterSection = () => (
  <section className="p-3 bg-gray-50 rounded my-4">
    <h3 className="font-bold text-sm mb-1">Souscrire à la newsletter</h3>
    <p className="text-[9px] text-gray-600 mb-3">
      Afin de découvrir en avant-première les sorties limitées et nos nouvelles
      collections.
    </p>
    <form onSubmit={(e) => e.preventDefault()} className="relative">
      <input
        type="email"
        placeholder="e-mail"
        className="w-full border-b-2 border-black bg-transparent px-2.5 py-1.5 text-[10px] focus:outline-none pr-8"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
        aria-label="S'abonner"
      >
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </form>
  </section>
);
