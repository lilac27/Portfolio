import React from 'react';

function Project() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is the first project',
      githubLink: 'https://github.com/project1',
      deployedLink: 'https://project1.com',
    },
    {
      title: 'Project 2',
      description: 'This is the second project',
      githubLink: 'https://github.com/project2',
      deployedLink: 'https://project2.com',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>
            GitHub: <a href={project.githubLink}>{project.githubLink}</a>
          </p>
          <p>
            Deployed: <a href={project.deployedLink}>{project.deployedLink}</a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Project;