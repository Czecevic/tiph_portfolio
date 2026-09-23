import Link from "next/link";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: any }) => (
  <Link
    href={`/project/${project.id}`}
    className="w-full md:w-1/2 p-3 block group"
  >
    <div className="relative w-full h-48 overflow-hidden rounded">
      <Image
        src={project.imgPres}
        alt={`Img for ${project.title}`}
        fill
        sizes="(max-width: 768px) 100vm, 25vm"
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
    <h3 className="font-bold text-lg mt-2">{project.title}</h3>
    <p className="text-sm text-gray-600">{project.desc}</p>
  </Link>
);
