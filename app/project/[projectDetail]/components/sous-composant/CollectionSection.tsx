import type { CollectionProps } from "@/interfaces";
import { ArrowRight } from "lucide-react";

export function CollectionSection({ title }: CollectionProps) {
  return (
    <section className="p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-sm leading-tight">{title}</h3>
        <a
          href="#"
          className="text-[10px] text-black hover:underline flex items-center gap-1"
        >
          Voir tout <ArrowRight className="w-2.5 h-2.5 inline" />
        </a>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
        <div className="shrink-0 w-32">
          <div className="w-full h-40 bg-[#D9D9D9] rounded-sm mb-1" />
          <p className="text-[9px] font-medium leading-tight">
            Nom de l'article
          </p>
          <p className="text-[9px] text-gray-500">Prix</p>
        </div>
        <div className="shrink-0 w-32">
          <div className="w-full h-40 bg-[#D9D9D9] rounded-sm mb-1" />
          <p className="text-[9px] font-medium leading-tight">
            Nom de l'article
          </p>
          <p className="text-[9px] text-gray-500">Prix</p>
        </div>
      </div>
    </section>
  );
}
