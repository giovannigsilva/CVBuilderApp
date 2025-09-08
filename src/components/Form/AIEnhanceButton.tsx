import { useAIEnhancement } from '../../hooks/useAIEnhancement';
import LoadingSpinner from '../UI/LoadingSpinner'; 
import toast from 'react-hot-toast';

type Props = {
  textToEnhance: string;
  context: "resumo" | "descricao_experiencia";
  onEnhanced: (enhancedText: string) => void;
};

const AIEnhanceButton = ({ textToEnhance, context, onEnhanced }: Props) => {
  const { isLoading, enhance } = useAIEnhancement();

    const handleClick = async () => {
        if (!textToEnhance) return;
        const { data, error } = await enhance(textToEnhance, context);
        if (error) {
            const errorMessage = error.status
            ?`Erro ${error.status}: ${error.message}` : `Erro: ${error.message}`;
            toast.error(errorMessage);
            return;
        }
        if (data) {
            onEnhanced(data);
            toast.success("Texto melhorado com sucesso!");
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isLoading || !textToEnhance}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
            {isLoading ? <LoadingSpinner /> : "Melhorar com IA"}
        </button>
    );
};

export default AIEnhanceButton;