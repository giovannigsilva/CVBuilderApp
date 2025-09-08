export default function FormSection({children}: {children: React.ReactNode}) {
    return (
        <div className="p-6 border-r border-gray-200 overflow-y-auto bg-white">
            <h2 className="text-2xl font-bold mb-6 text-blue-700">Formulário</h2>
            <p className="space-y-8">
                {children}
            </p>
        </div>
    );
}