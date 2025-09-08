export default function PreviewSection({children}: {children: React.ReactNode}) {
    return (
        <div className="p-6 overflow-y-auto bg-gray-50">
            <h2 className="text-2xl font-bold mb-6 text-blue-700">Preview</h2>
            <p className="space-y-8">
                {children}
            </p>
        </div>
    );
}
