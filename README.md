# 📄 CV Builder AI

Gerador de Currículos Inteligente com **preview em tempo real** e **melhorias por Inteligência Artificial**.

## 🚀 Tecnologias

- **React 19**
- **TypeScript**
- **TailwindCSS v4**
- **Vite**
- **OpenAI API**

## 💡 Conceito da Aplicação

- **Layout Split-Screen**  
  - Esquerda: Formulário completo de entrada de dados  
  - Direita: Preview do currículo atualizado em tempo real  
- **Layout fixo para desktop** (sem necessidade de versão mobile)

## 📝 Seções do Formulário

1. **Dados Pessoais**: Nome, Email, Telefone, LinkedIn, Resumo profissional  
2. **Habilidades**: Lista dinâmica com níveis (Básico/Intermediário/Avançado)  
3. **Experiências**: Empresa, Cargo, Período, Descrição, checkbox “Trabalho atual”  

## ⚙️ Funcionalidades Core

- ✅ Preview instantâneo  
- ✅ Listas dinâmicas (habilidades e experiências)  
- ✅ Melhorias automáticas de texto por IA  
- ✅ Interface desktop clean e moderna  

## 📂 Estrutura da Aplicação

```text
src/
├── App.tsx
├── components/
│   ├── Layout/ (FormSection, PreviewSection)
│   ├── Form/ (PersonalInfo, Skills, Experience, AIEnhanceButton)
│   ├── Preview/ (CVPreview, PersonalHeader, SkillsSection, ExperienceSection)
│   └── UI/ (LoadingSpinner, ErrorBoundary, Toast)
├── services/ (aiService.ts)
├── hooks/ (useCVData, useAIEnhancement, useToast)
├── utils/ (validation.ts, textProcessing.ts)
├── types/ (cv.types.ts, api.types.ts)
└── index.css
```


## 📌 Requisitos Obrigatórios

1. Layout Split-Screen (scroll independente, fixo para desktop)  
2. Formulário de Dados Pessoais com validação em tempo real  
3. Gerenciamento de Habilidades dinâmico  
4. Gerenciamento de Experiências dinâmico com validações  
5. Preview em tempo real  
6. Integração com IA (botões “Melhorar” em textos)  
7. Melhorias de Texto por IA (resumo e descrições profissionais)  
8. Estados e Feedback UX (toasts, loaders, skeletons, animações)  
9. Error Handling robusto  
10. Segurança e Configuração (variáveis de ambiente, validação de entrada)  

## 🔮 Requisitos Opcionais

- Exportação em PDF (via **jsPDF** + **html2canvas**)  
- Temas de cores personalizáveis  
- Atalhos de teclado  
- Histórico de versões (undo/redo)  
- Persistência no **localStorage**  
- Importação/exportação de dados em JSON  

## 🛠️ Conceitos Técnicos Implementados

- Estado compartilhado avançado (sincronização entre formulário e preview)  
- Inputs controlados com validação  
- Props e lifting state up  
- Renderização condicional  
- Integração com APIs externas (OpenAI)  
- Performance e otimização (useCallback, debouncing, lazy loading)  

---

📌 **Observação**: Este projeto foi desenhado **exclusivamente para desktop**, sem necessidade de versão responsiva para mobile.
