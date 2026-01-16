import { workExperiences } from '../data/content';
import './WorkExperience.css';

export function WorkExperience() {
  return (
    <section id="work" className="work-section">
      <h1 className="section-title">Work Experience</h1>
      <div className="experience-grid">
        {workExperiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h2 className="company-name">{exp.company}</h2>
            <div className="experience-meta">
              <span className="location">{exp.location}</span>
              <span className="period">{exp.period}</span>
              <span className="type">{exp.type}</span>
            </div>
            <ul className="responsibilities">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
