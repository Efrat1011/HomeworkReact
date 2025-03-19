import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../index.css'


const projectsData = [
  { id: 1, title: 'Project 1', description: 'Мебель туралы жоба' , details: 'https://efrat1011.github.io/project-mebel/' },
  { id: 2, title: 'Project 2', description: 'Рецептер туралы жоба', details: 'https://efrat1011.github.io/resipa-api/' },
  { id: 3, title: 'Project 3', description: 'Ауа райы туралы жоба', details: 'https://efrat1011.github.io/weather-aPI/' },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.details}</p>
      <Link to="/projects">Back to Projects</Link>
    </div>
  );
};

export default ProjectDetail;