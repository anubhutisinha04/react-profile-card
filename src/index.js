import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillsList = [
  {
    skill: "HTML/CSS",
    level: "Advanced",
    color: "#FFBC42",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    color: "#D81159",
  },
  {
    skill: "React",
    level: "Intermediate",
    color: "#8F2D56",
  },
  {
    skill: "Java",
    level: "Intermediate",
    color: "#218380",
  },
  {
    skill: "Spring boot",
    level: "Beginner",
    color: "#73D2DE",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="Anubhuti Sinha" />;
}

function Intro() {
  return (
    <div>
      <h1>Anubhuti Sinha</h1>
      <p>
        Current Masters Student with 3.4 years of Fullstack development
        experience at Wells Fargo. I am a new graduate interested in Frontend
        Development. Currently, I am very much into React JS.
      </p>
    </div>
  );
}

function SkillList() {
  const skills = skillsList;
  console.log(skills);

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skills
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skills({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill} </span>
      <span>{level === "Beginner" && "🍼"}</span>
      <span>{level === "Intermediate" && "👩🏽‍💻"}</span>
      <span>{level === "Advanced" && "💪🏼"}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
