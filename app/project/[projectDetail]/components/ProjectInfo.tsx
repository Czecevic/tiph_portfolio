export const ProjectInfo = ({
  title,
  projectInfo,
}: {
  title: string;
  projectInfo: {
    id: number;
    title: string;
    value: string;
  }[];
}) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-between">
      <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectInfo.map((info) => (
          <div key={info.id} className="flex flex-col">
            <h2 className="text-lg md:text-xl font-bold">{info.title}</h2>
            <p className=" text-sm md:text-base">
              {info.value || "Non spécifié"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
