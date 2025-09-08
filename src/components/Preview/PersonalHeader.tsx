interface PersonalHeaderProps {
    nome: string;
    email: string;
    fone: string;
    linkedin: string;
    resumo: string;
}

export default function PersonalHeader({
    nome,
    email,
    fone,
    linkedin,
    resumo,
}: PersonalHeaderProps) {
    return (
        <div className="p-4 bg-white rounded-lg shadow space-y-2">
            <h1 className="text-3xl font-bold">
                {nome || <span className="text-gray-400">Seu Nome</span>}
            </h1>
            <p className="text-gray-700">
                {email || <span className="text-gray-400">seu.email@exemplo.com</span>}
            </p>
            <p className="text-gray-700">
                {fone || <span className="text-gray-400">(00) 00000-0000</span>}
            </p>
            <p className="text-blue-600">
                {linkedin || <span className="text-gray-400">linkedin.com/in/seu-perfil</span>}
            </p>
            <p className="mt-4 text-gray-800">
                {resumo || <span className="text-gray-400">Resumo profissional aqui...</span>}
            </p>
        </div>
    );
}
