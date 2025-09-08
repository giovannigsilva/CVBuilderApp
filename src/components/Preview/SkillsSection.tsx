interface Skill {
    id: number;
    name: string;
    level: "Básico" | "Intermediário" | "Avançado";
}

interface SkillsSectionProps {
    skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    if (!skills.length) {
        return (
            <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Habilidades</h3>
                <p className="text-gray-400">Nenhuma habilidade adicionada ainda.</p>
            </div>
        );
    }
    return (
        
        <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Habilidades</h3>
            <ul className="list-disc list-inside space-y-1">
                {skills.map((skill) => (
                    <li key={skill.id}>
                        {skill.name} <span className="text-sm text-gray-600">({skill.level})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
