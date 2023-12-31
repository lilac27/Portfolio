import React from 'react';
import craftHouse from '../images/crafthouse.png';
import filmetheca from '../images/filmetheca.png';
import pizzaExpress from '../images/pizza-express.png';
import blog from '../images/blog.png';
import notes from '../images/note-taker.png';
import weather from '../images/weather.png';
import scheduler from '../images/work-day-scheduler.png';
import '../App.css';




const Project = () => {
  const projects = [
    {
      title: 'CraftHouse',
      description: 'A fun crafting site.',
      githubLink: 'https://github.com/CHawsCoding/CraftHouse',
      deployedLink: 'https://craft-house-333df780d3f8.herokuapp.com/',
      image: craftHouse
    },
    {
      title: 'Pizza Express',
      description: 'A business-centered application, designed with pizza shops in mind. Collaboratively created.',
      githubLink: 'https://github.com/christianbmartinez/pizza-express',
      deployedLink: 'https://nameless-river-58365-d5c2867a5c56.herokuapp.com/',
      image: pizzaExpress
    },
    {
      title: 'Filmetheca',
      description: 'A user-driven film application. Collaboratively created.',
      githubLink: 'https://github.com/adamhansen184/filmetheca/',
      deployedLink: 'https://adamhansen184.github.io/filmetheca/',
      image: filmetheca
    },
    {
      title: 'Tech Blog',
      description: 'A full stack application designed to provide a space for collaboration and discussion of tech topics. Created solo.',
      githubLink: 'https://github.com/lilac27/blog',
      deployedLink: 'https://lilac-blog-c1eaf0c9e1eb.herokuapp.com/',
      image: blog
    },
    {
      title: 'Note Taker',
      description: 'An individual centered application designed to act as a personal notebook. Created solo.',
      githubLink: 'https://github.com/lilac27/Note-Taker',
      deployedLink: 'https://radiant-waters-72762-2c7bc798e78b.herokuapp.com/notes',
      image: notes
    },
    {
      title: 'Weather Checker',
      description: 'An individual centered application designed to provide weather forecasts for different cities. Created solo.',
      githubLink: 'https://github.com/lilac27/Weather-Checker',
      deployedLink: 'https://lilac27.github.io/Weather-Checker/',
      image: weather
    },
    {
      title: 'Work Day Scheduler',
      description: 'An individual centered application designed to allow scheduling of tasks. Created solo.',
      githubLink: 'https://github.com/lilac27/Work-Day-Scheduler',
      deployedLink: 'https://lilac27.github.io/Work-Day-Scheduler/',
      image: scheduler
    },  ];


    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <img src={project.image} alt={project.title} className="w-full h-auto mb-4" />
            <p className="text-blue-500">
              GitHub: <a href={project.githubLink}>{project.githubLink}</a>
            </p>
            <p className="text-blue-500">
              Deployed: <a href={project.deployedLink}>{project.deployedLink}</a>
            </p>
          </div>
        ))}
      </div>
    );
  };

export default Project;
