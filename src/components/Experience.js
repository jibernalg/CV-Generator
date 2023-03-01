import React, { useState } from "react";

function Experience({ onExperienceChange }) {
  const [jobs, setJobs] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      responsabilities: "",
    },
  ]);

  const handleJobChange = (event, index) => {
    const { name, value } = event.target;
    const newJobs = [...jobs];
    newJobs[index][name] = value;
    setJobs(newJobs);
    onExperienceChange(newJobs);
  };

  const handleAddJob = () => {
    const newJobs = [
      ...jobs,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        responsabilities: "",
      },
    ];
    setJobs(newJobs);
  };

  const handleRemoveJob = (index) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
    onExperienceChange(newJobs);
  };

  return (
    <form>
      <label htmlFor="experience">Experience</label>
      {jobs.map((job, index) => (
        <div key={index}>
          <div>
            <input
              type="text"
              name="company"
              id={`company${index}`}
              placeholder="Company"
              value={job.company}
              onChange={(event) => handleJobChange(event, index)}
            />
          </div>
          <div>
            <input
              type="text"
              name="position"
              id={`position${index}`}
              placeholder="Position"
              value={job.position}
              onChange={(event) => handleJobChange(event, index)}
            />
          </div>
          <div>
            <input
              type="text"
              name="startDate"
              id={`startDate${index}`}
              placeholder="Start Date"
              value={job.startDate}
              onChange={(event) => handleJobChange(event, index)}
            />
          </div>
          <div>
            <input
              type="text"
              name="endDate"
              id={`endDate${index}`}
              placeholder="End Date"
              value={job.endDate}
              onChange={(event) => handleJobChange(event, index)}
            />
          </div>
          <div>
            <input
              type="text"
              name="responsabilities"
              id={`responsabilities${index}`}
              placeholder="Responsabilities"
              value={job.responsabilities}
              onChange={(event) => handleJobChange(event, index)}
            />
          </div>
          <button type="button" onClick={() => handleRemoveJob(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddJob}>
        Add
      </button>
    </form>
  );
}

export default Experience;
