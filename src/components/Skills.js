import React, { useState } from "react";

function Skills({ onSkillsChange }) {
  const [skills, setSkills] = useState([
    {
      skill: "",
    },
  ]);

  const handleSkillsChange = (event, index) => {
    const { name, value } = event.target;
    const newSkills = [...skills];
    newSkills[index][name] = value;
    setSkills(newSkills);
    onSkillsChange(newSkills);
  };

  const handleAddSkills = () => {
    const newSkills = [
      ...skills,
      {
        skill: "",
      },
    ];
    setSkills(newSkills);
  };
  const handleRemoveSkills = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
    onSkillsChange(newSkills);
  };

  return (
    <form>
      <label htmlFor="skills">Skills</label>
      {skills.map((skill, index) => (
        <div key={index}>
          <div>
            <input
              type="text"
              name="skill"
              id={`skill${index}`}
              placeholder="Skill"
              value={skill.school}
              onChange={(event) => handleSkillsChange(event, index)}
            />
          </div>
          <button type="button" onClick={() => handleRemoveSkills(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddSkills}>
        Add
      </button>
    </form>
  );
}
export default Skills;
