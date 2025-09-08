import { useState } from "react";

interface Skill {
    id: number;
    name: string;
    level: "Básico" | "Intermediário" | "Avançado";
}

interface SkillsProps {
    onChange: (skills: Skill[]) => void;
}

export default function Skills({ onChange }: SkillsProps) {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [newSkill, setNewSkill] = useState("");
    const [level, setLevel] = useState<"Básico" | "Intermediário" | "Avançado">(
        "Básico"
    );

    function addSkill() {
        if (!newSkill.trim()) return;
        const updated = [
            ...skills,
            { id: Date.now(), name: newSkill.trim(), level },
        ];
        setSkills(updated);
        onChange(updated);
        setNewSkill("");
        setLevel("Básico");
    }

    function removeSkill(id: number) {
        const updated = skills.filter((s) => s.id !== id);
        setSkills(updated);
        onChange(updated);
    }

    return (
        <div className="space-y-4 mt-6">
            <h3 className="text-xl font-semibold">Habilidades</h3>

            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Ex: React, SQL, Comunicação..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="flex-1 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
                <select
                    value={level}
                    onChange={(e) =>
                        setLevel(e.target.value as "Básico" | "Intermediário" | "Avançado")
                    }
                    className="border rounded p-2"
                >
                    <option>Básico</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                </select>
                <button
                    type="button"
                    onClick={addSkill}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
                >
                    Adicionar
                </button>
            </div>

            <ul className="space-y-2">
                {skills.map((skill) => (
                    <li
                        key={skill.id}
                        className="flex justify-between items-center border p-2 rounded"
                    >
                        <span>
                            {skill.name} - <em>{skill.level}</em>
                        </span>
                        <button
                            type="button"
                            onClick={() => removeSkill(skill.id)}
                            className="text-red-500"
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
