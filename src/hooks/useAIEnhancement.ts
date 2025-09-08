import { useState } from 'react';
import { enhanceTextWithAI } from '../services/aiService';

type ErrorState = {
  message: string;
  status?: number | string;
} | null;

type EnhancementContext = "resumo" | "descricao_experiencia";

type EnhanceResult = {
  data: string | null;
  error: ErrorState;
}

export const useAIEnhancement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorState>(null);

  const enhance = async (text: string, context: EnhancementContext): Promise<string | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await enhanceTextWithAI(text, context);
      setIsLoading(false);
      return { data: result, error: null };
    } catch (err: any) {
      const errorObject: ErrorState = { message: err.message || "Ocorreu um erro desconhecido." };
            
      setError(errorObject);
      setIsLoading(false);
      return { data: null, error: errorObject };
    }
  };

  return { isLoading, error, enhance };
};