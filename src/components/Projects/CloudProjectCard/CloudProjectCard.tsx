import "./CloudProjectCard.css";
import { Project } from "../Projects";
const CloudProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <section id="cloudprojectcard" className="cloudprojectcard--section">
    <div className="cloudprojectcard--container">
      <div className="cloudproject--section--img">
        <img src={project.src} className="card--img--top" alt={project.title} />
      </div>

      <div className="cloudprojectcard--section--container">
        <div className="cloudprojectcard--section--card--content">
          <h5 className="cloudprojectcard--section--title">{project.title}</h5>
          <p className="cloudprojectcard--section--text">
            {project.description}
          </p>
          <a href={project.link} className="btn btn-primary">
            Github Respository
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default CloudProjectCard;