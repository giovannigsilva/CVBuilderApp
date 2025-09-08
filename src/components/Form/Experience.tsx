import { useState } from "react";

interface Experience {
    id: number;
    empresa: string;
    cargo: string;
    periodo: string;
    desc: string;
    atual: boolean;
}

interface ExperienceProps {
    onChange: (experiences: Experience[]) => void;
}

export default function Experience({ onChange }: ExperienceProps) {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [form, setForm] = useState({
        empresa: "",
        cargo: "",
        periodo: "",
        desc: "",
        atual: false,
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : value,
        }));
    }

    function addExperience() {
        if (!form.empresa.trim() || !form.cargo.trim()) return;
        if (!form.atual && !form.periodo.trim()) {
            alert("Informe o período ou marque como trabalho atual.");
            return;
        }
        const updated = [...experiences, { id: Date.now(), ...form }];
        setExperiences(updated);
        onChange(updated);
        setForm({
            empresa: "",
            cargo: "",
            periodo: "",
            desc: "",
            atual: false,
        });
    }

    function removeExperience(id: number) {
        const updated = experiences.filter((exp) => exp.id !== id);
        setExperiences(updated);
        onChange(updated);
    }

    

    return (
        <div className="space-y-4 mt-6">
            <h3 className="text-xl font-semibold">Experiências Profissionais</h3>

            <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={form.empresa}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm "
            />

            <input
                type="text"
                name="cargo"
                placeholder="Cargo"
                value={form.cargo}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            <input
                type="text"
                name="periodo"
                placeholder="Período (Ex: Jan/2020 - Dez/2022)"
                value={form.periodo}
                onChange={handleChange}
                disabled={form.atual}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    name="atual"
                    checked={form.atual}
                    onChange={handleChange}
                />
                Trabalho atual
            </label>

            <textarea
                name="desc"
                placeholder="Descrição das atividades"
                value={form.desc}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm h-20"
            />

            <button
                type="button"
                onClick={addExperience}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
            >
                Adicionar Experiência
            </button>

            <ul className="space-y-2">
                {experiences.map((exp) => (
                    <li
                        key={exp.id}
                        className="flex justify-between items-center border p-2 rounded"
                    >
                        <span>
                            {exp.empresa} - {exp.cargo}
                        </span>
                        <button
                            type="button"
                            onClick={() => removeExperience(exp.id)}
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
