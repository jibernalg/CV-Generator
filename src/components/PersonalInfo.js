import React, { useState } from "react";

function PersonalInfo({onPersonalInfoChange}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [about, setAbout] = useState("");

  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    onPersonalInfoChange({firstName:event.target.value,lastName,title,email,phone,address,linkedin,github,about})
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    onPersonalInfoChange({firstName,lastName:event.target.value,title,email,phone,address,linkedin,github,about})
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onPersonalInfoChange({firstName,lastName,title:event.target.value,email,phone,address,linkedin,github,about})
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    onPersonalInfoChange({firstName,lastName,title,email:event.target.value,phone,address,linkedin,github,about})
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    onPersonalInfoChange({firstName,lastName,title,email,phone:event.target.value,address,linkedin,github,about})
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    onPersonalInfoChange({firstName,lastName,title,email,phone,address:event.target.value,linkedin,github,about})
  };
  const handleLinkedinChange = (event) => {
    setLinkedin(event.target.value);
    onPersonalInfoChange({firstName,lastName,title,email,phone,address,linkedin:event.target.value,github,about})
  };
  const handleGithubChange = (event) => {
    setGithub(event.target.value);
    onPersonalInfoChange({firstName,lastName,title,email,phone,address,linkedin,github:event.target.value,about})
  };
  const handleAboutChange = (event) => {
    setAbout(event.target.value);
    onPersonalInfoChange({firstName,lastName,title,email,phone,address,linkedin,github,about:event.target.value})
  };
  

  return (
    <form className=" personalInfoForm" >
      <label htmlFor="personalInfo">Personal Information</label>
      <div>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Job Title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          placeholder="Paste Linkedin URL (i.e. https://www.linkedin.com/in/yourname)" 
          value={linkedin}
          onChange={handleLinkedinChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="github"
          id="github"
          placeholder="Paste Github URL (i.e. https://github.com/yourname)"
          value={github}
          onChange={handleGithubChange}
        />
      </div>
      <div>
        <textarea
          type="text"
          name="about"
          id="about"
          placeholder="About"
          value={about}
          onChange={handleAboutChange}
        />
      </div>
    </form>
  );
}

export default PersonalInfo;
