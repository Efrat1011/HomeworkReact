import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'


const projectsData = [
  { id: 1, title: 'Project 1', description: 'Мебель туралы жоба' },
  { id: 2, title: 'Project 2', description: 'Рецептер туралы жоба' },
  { id: 3, title: 'Project 3', description: 'Ауа райы туралы жоба' },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <ul>
        {projectsData.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;