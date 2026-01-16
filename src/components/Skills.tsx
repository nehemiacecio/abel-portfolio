import { skills } from '../data/content';
import './Skills.css';

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h1 className="section-title">Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </span>
            <span>{skill.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
