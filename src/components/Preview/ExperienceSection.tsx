interface Experience {
    id: number;
    empresa: string;
    cargo: string;
    periodo: string;
    desc: string;
    atual: boolean;
}

interface ExperienceSectionProps {
    experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    if (!experiences.length) {
        return (
            <div className="p-4 bg-white rounded-lg shadow mt-6">
                <h3 className="text-xl font-semibold mb-2">Experiências Profissionais</h3>
                <p className="text-gray-400">Nenhuma experiência adicionada ainda.</p>
            </div>
        );
    }

    return (
        <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Experiências Profissionais</h3>
            <div className="space-y-4">
                {experiences.map((exp) => (
                    <div key={exp.id} className="border-b pb-2">
                        <h4 className="font-bold">{exp.cargo} - {exp.empresa}</h4>
                        <p className="text-sm text-gray-600">
                            {exp.atual ? "Atualmente" : exp.periodo}
                        </p>
                        <p className="mt-1 text-gray-800">{exp.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
