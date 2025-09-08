import { useState } from "react";
import FormSection from "./components/Layout/FormSection";
import PreviewSection from "./components/Layout/PreviewSection";
import PersonalInfo from "./components/Form/PersonalInfo";
import PersonalHeader from "./components/Preview/PersonalHeader";
import Skills from "./components/Form/Skills";
import SkillsSection from "./components/Preview/SkillsSection";
import Experience from "./components/Form/Experience";
import ExperienceSection from "./components/Preview/ExperienceSection"; 

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    nome: "",
    email: "",
    fone: "",
    linkedin: "",
    resumo: "",
  });

  const [skills, setSkills] = useState<
    { id: number; name: string; level: "Básico" | "Intermediário" | "Avançado" }[]
  >([]);
  
  const [experiences, setExperiences] = useState<
    { id: number; empresa: string; cargo: string; periodo: string; desc: string; atual: boolean }[]
  >([]);

  return ( 
     <div className="grid grid-cols-2 h-screen">
      <FormSection>
        <PersonalInfo onChange={setPersonalInfo} />
        <Skills onChange={setSkills} />
        <Experience onChange={setExperiences} />
      </FormSection>
      
      <PreviewSection>
        <PersonalHeader {...personalInfo} />
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
      </PreviewSection>
    </div>
  );
}

export default App
