import { useState } from "react";

interface PersonalInfoProps {
  onChange: (data: {
    nome: string;
    email: string;
    fone: string;
    linkedin: string;
    resumo: string;
  }) => void;
}

export default function PersonalInfo({ onChange }: PersonalInfoProps) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    fone: "",
    linkedin: "",
    resumo: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
    onChange(newForm);
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Dados Pessoais</h3>

      <input
        type="text"
        name="nome"
        placeholder="Nome completo"
        value={form.nome}
        onChange={handleChange}
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        required
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
      />

      <input
        type="tel"
        name="fone"
        placeholder="Telefone"
        value={form.fone}
        onChange={handleChange}
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />

      <input
        type="url"
        name="linkedin"
        placeholder="LinkedIn"
        value={form.linkedin}
        onChange={handleChange}
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />

      <textarea
        name="resumo"
        placeholder="Resumo profissional"
        value={form.resumo}
        onChange={handleChange}
        maxLength={500}
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm h-24"
      />
      <p className="text-sm text-gray-500">{form.resumo.length}/500 caracteres</p>
    </div>
  );
}
