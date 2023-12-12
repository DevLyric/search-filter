import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const professions = [
    "Doctor",
    "Engineer",
    "Teacher",
    "Lawyer",
    "Programmer",
    "Designer",
    "Nurse",
    "Architect",
    "Police Officer",
    "Chef",
    "Journalist",
    "Accountant",
    "Psychologist",
    "Electrician",
    "Pharmacist",
    "Pilot",
    "Astronomer",
    "Firefighter",
    "Actor",
    "Musician",
  ];

  const filteredList = professions.filter((profession) =>
    profession.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {filteredList.map((profession) => (
        <p key={profession}>{profession}</p>
      ))}
    </div>
  );
}

export default App;
