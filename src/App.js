import React, { useState } from "react";
import CV from "./components/CV";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    about: "",
  });
  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      responsabilities: "",
    },
  ]);
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      endDate: "",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      skill: "",
    },
  ]);

  const handlePersonalInfoChange = (info) => {
    setPersonalInfo(info);
  };

  const handleExperienceChange = (jobs) => {
    setExperience(jobs);
  };

  const handleEducationChange = (edu) => {
    setEducation(edu);
  };

  const handleSkillsChange = (skill) => {
    setSkills(skill);
  };

  
  return (
    <div className="App">
      <Header />
      <PersonalInfo onPersonalInfoChange={handlePersonalInfoChange} />
      <Experience onExperienceChange={handleExperienceChange} />
      <Education onEducationChange={handleEducationChange} />
      <Skills onSkillsChange={handleSkillsChange} />
      <CV data={{ ...personalInfo, experience, education,skills }} />
      <Footer />
    </div>
  );
}

export default App;
