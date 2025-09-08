import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
  {category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
  {category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
];

type EnhancementContext = "resumo" | "descricao_experiencia";

const getPrompt = (text: string, context: EnhancementContext): string => {
  switch (context) {
    case "resumo":
      return `Melhore este resumo profissional para um currículo, usando um tom profissional e palavras-chave relevantes. Otimize a densidade da informação e o impacto. Texto original: "${text}"`;
    case "descricao_experiencia":
      return `Melhore esta descrição de experiência profissional, usando verbos de ação e quantificando resultados sempre que possível. Corrija a gramática e a ortografia. Texto original: "${text}"`;
    default:
      return `Melhore o seguinte texto: "${text}"`;
  }
};

//funcao para processar o retorno da IA

const processAIResponse = (rawText: string): string => {
    const normalizedText = rawText.replace(/\\n/g, '\n');
    const codeBlockMatch = normalizedText.match(/```(?:\w+\n)?([\s\S]*?)```/);

    if (codeBlockMatch && codeBlockMatch[1]) {
      return codeBlockMatch[1].replace(/[*_#`]/g, '').trim();
    }

    let cleanedText = normalizedText.replace(/^[^\n]*:\s*\n/m, '');
    cleanedText = cleanedText.replace(/[*_#`]/g, '');
    cleanedText = cleanedText.replace(/^"|"$/g, '');
    cleanedText = cleanedText.replace(/^'|'$/g, '');

    return cleanedText.trim();
};


export const enhanceTextWithAI = async (text: string, context: EnhancementContext): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings });
    const prompt = getPrompt(text, context);

    const result = await model.generateContent(prompt);
    const response = await result.response;

    if (response.promptFeedback?.blockReason) {
      throw new Error(`A solicitação foi bloqueada por: ${response.promptFeedback.blockReason}`);
    }

    const rawText = response.text();
    const enhancedText = processAIResponse(rawText);

    if (enhancedText) {
      return enhancedText;
    } else {
      throw new Error("A resposta da IA está vazia após o processamento.");
    }
  } catch (error) {
    console.error("Erro ao chamar a API do Gemini:", error);
    throw error;
  }
};