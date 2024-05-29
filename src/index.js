import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
  return (
    <div className="skill-list">
      <Skills skill="React" emoji="💪🏼" color="red" />
      <Skills skill="HTML+CSS" emoji="👩🏽‍💻" color="pink" />
      <Skills skill="Agile" emoji="👩🏽" color="green" />
      <Skills skill="JavaScript" emoji="😫" color="yellow" />
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
