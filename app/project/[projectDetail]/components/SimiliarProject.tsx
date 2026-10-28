import { Project } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export const SimilarProjects = ({ Projects }: { Projects: Project[] }) => {
  return (
    <section className="w-full my-6 md:my-8 text-center">
      <h2 className="text-xl md:text-2xl font-heading font-normal my-4">
        Projets Similaires
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 w-full">
        {Projects.map((project) => (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className="p-4 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center text-left w-full bg-white"
          >
            <h3 className="font-bold text-base md:text-lg w-full mb-1">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm w-full mb-3 line-clamp-2">
              {project.desc}
            </p>
            {project.imgPres && (
              <div className="w-full relative aspect-video overflow-hidden rounded">
                <Image
                  src={project.imgPres}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
          </Link>
        ))}
      </div>

      <Link
        href="/project"
        className="inline-block border-2 border-[#7e1114] text-[#7e1114] px-6 py-3 rounded-lg font-medium hover:bg-[#7e1114] hover:text-white transition-colors text-sm md:text-base"
      >
        Voir plus
      </Link>
    </section>
  );
};
