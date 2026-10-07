interface Emploi {
  id: number;
  title: string;
  desc: string[];
  type: string;
}

interface EmploiCardProps {
  emploi: Emploi[];
  type: string;
}

export function EmploiCard({ emploi, type }: EmploiCardProps) {
  const filteredEmplois = emploi.filter((item) => {
    const itemType = item.type.toLowerCase();
    const targetType = type.toLowerCase();
    return itemType === targetType || itemType === `${targetType}s`;
  });

  if (filteredEmplois.length === 0) {
    return null;
  }

  return (
    <div className="my-6">
      <h3 className="text-xl font-bold text-[#7e1114] border-b pb-2 mb-4 capitalize">
        {type}s
      </h3>
      <div className="space-y-4">
        {filteredEmplois.map((item) => (
          <div key={item.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-base md:text-lg text-gray-900 mb-2">
              {item.title}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {item.desc.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
