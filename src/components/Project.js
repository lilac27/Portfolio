import React from 'react';

function Project() {
  const projects = [
    {
      title: 'Filmetheca',
      description: 'A user driven film application. Collaboratively created.',
      githubLink: 'https://github.com/adamhansen184/filmetheca/',
      deployedLink: 'https://adamhansen184.github.io/filmetheca/',
    },
    {
      title: 'Pizza Express',
      description: 'A business centered application, designed with pizza shops in mind. Collaboratively created.',
      githubLink: 'https://github.com/christianbmartinez/pizza-express',
      deployedLink: 'https://nameless-river-58365-d5c2867a5c56.herokuapp.com/',
    },
    {
        title: 'Tech Blog',
        description: 'A full stack application designed to provide a space for collaboration and discussion of tech topics. Created solo.',
        githubLink: 'https://github.com/lilac27/blog',
        deployedLink: 'https://lilac-blog-c1eaf0c9e1eb.herokuapp.com/',
      },
      {
        title: 'Note Taker',
        description: 'An individual centered application designed to act as a personal notebook. Created solo.',
        githubLink: 'https://github.com/lilac27/Note-Taker',
        deployedLink: 'https://radiant-waters-72762-2c7bc798e78b.herokuapp.com/notes',
      },
      {
        title: 'Weather Checker',
        description: 'An individual centered application designed to provide weather forecasts for different cities. Created solo.',
        githubLink: 'https://github.com/lilac27/Weather-Checker',
        deployedLink: 'https://lilac27.github.io/Weather-Checker/',
      },
      {
        title: 'Work Day Scheduler',
        description: 'An individual centered application designed to allow scheduling of tasks. Created solo.',
        githubLink: 'https://github.com/lilac27/Work-Day-Scheduler',
        deployedLink: 'https://lilac27.github.io/Work-Day-Scheduler/',
      },
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