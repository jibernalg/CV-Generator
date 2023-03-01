import React, { useState } from "react";

function Education({ onEducationChange }) {
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      endDate: "",
    },
  ]);

  const handleEducationChange = (event, index) => {
    const { name, value } = event.target;
    const newEducation = [...education];
    newEducation[index][name] = value;
    setEducation(newEducation);
    onEducationChange(newEducation);
  };

  const handleAddEducation = () => {
    const newEducation = [
      ...education,
      {
        school: "",
        degree: "",
        endDate: "",
      },
    ];
    setEducation(newEducation);
  };
  const handleRemoveEducation = (index) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
    onEducationChange(newEducation);
  };

  return (
    <form>
      <label htmlFor="education">Education</label>
      {education.map((edu, index) => (
        <div key={index}>
          <div>
            <input
              type="text"
              name="school"
              id={`school${index}`}
              placeholder="School"
              value={edu.school}
              onChange={(event) => handleEducationChange(event, index)}
            />
          </div>
          <div>
            <input
              type="text"
              name="degree"
              id={`degree${index}`}
              placeholder="Degree"
              value={edu.degree}
              onChange={(event) => handleEducationChange(event, index)}
            />
          </div>
          <div>
            <input
              type="text"
              name="endDate"
              id={`endDate${index}`}
              placeholder="End Date"
              value={edu.endDate}
              onChange={(event) => handleEducationChange(event, index)}
            />
          </div>
          <button type="button" onClick={() => handleRemoveEducation(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddEducation}>
        Add
      </button>
    </form>
  );
}
export default Education;
