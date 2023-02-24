import React, {useState} from 'react'
import './jobCandidateInfo.css'

const JobCandidateinfo = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [isDataPresent, setIsDataPresent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
      phone,
      address,
      city,
      state,
      skills,
      experience,
      education,
    });
    setIsDataPresent(true)
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />

                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />

                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={handleAddressChange}
                  required
                />

                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={handleCityChange}
                  required
                />

                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={state}
                  onChange={handleStateChange}
                  required
                />

                <label htmlFor="skills">Skills</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={skills}
                  onChange={handleSkillsChange}
                  rows="5"
                  cols="30"
                  required
                ></textarea>

                <label htmlFor="experience">Experience</label>
                <textarea
                  id="experience"
                  name="experience"
                  value={experience}
                  onChange={handleExperienceChange}
                  rows="5"
                  cols="30"
                  required
                ></textarea>

                <label htmlFor="education">Education</label>
                <textarea
                  id="education"
                  name="education"
                  value={education}
                  onChange={handleEducationChange}
                  rows="5"
                  cols="30"
                  required
                ></textarea>

                <button type="submit">Submit</button>
              </form>
    </div>
  )
}

export default JobCandidateinfo