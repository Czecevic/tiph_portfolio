import Link from "next/link";
import Image from "next/image";
import { Project } from "@/public/data/data";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <Link
    href={`/project/${project.id}`}
    className="w-full md:w-1/2 p-3 block group"
  >
    <div className="relative w-full h-48 overflow-hidden rounded">
      <Image
        src={project.imgPres}
        alt={`Présentation ${project.title}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
    <h3 className="font-bold text-lg mt-2 group-hover:text-[#7e1114] transition-colors">
      {project.title}
    </h3>
    <p className="text-sm text-gray-600 line-clamp-2">{project.desc}</p>
  </Link>
);
