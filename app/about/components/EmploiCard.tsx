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
    <div>
      <h2>{type}s</h2>
      <div>
        {filteredEmplois.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <ul>
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
