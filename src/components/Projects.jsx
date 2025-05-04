import React from 'react';
import './Projects.css';
import PokeguideImg from '../assets/Pokeguide.jpg';
import ShopEaseImg from '../assets/shopease.png';
import SymptomMatcherImg from '../assets/Pokeguide.jpg';
import SupplySystemImg from '../assets/supplyinven.png';
import BuildZImg from '../assets/Buildz.png';
import TodoImg from '../assets/Todolist.png';
import FadeInWhenVisible from './FadeInWhenVisible';

const Projects = () => {
  const projects = [
    {
      title: 'ShopEase',
      description: 'A shopping planner that allows users to create a list of items they wish to buy, set purchase dates, and receive reminders to help keep track of their shopping plans.',
      image: ShopEaseImg,
      github: 'https://github.com/Kobii2214/shopease.git'
    },
    {
      title: 'SYMPTOMEDMATCHER',
      description: 'A medical symptom checker app that provides condition suggestions based on user input.',
      image: SymptomMatcherImg,
      github: 'https://github.com/yourusername/symptomedmatcher'
    },
    {
      title: 'Supply Inventory System',
      description: 'An inventory and monitoring system built for WMSU to track supplies across departments.',
      image: SupplySystemImg,
      demo: 'http://supplyoffice.infinityfreeapp.com/'
    },
    {
      title: 'Build Z',
      description: 'A PHP-based construction management tool for tracking projects, costs, and progress with real-time updates and resource insights.',
      image: BuildZImg,
      github: 'https://github.com/Kobii2214/buildz.git'
    },
    {
      title: 'DoitNow',
      description: 'A minimalist to-do list web app for organizing tasks and setting reminders, built with React and designed for a smooth user experience.',
      image: TodoImg,
      github: 'https://github.com/Kobii2214/pokeguide.git',
      demo: 'https://ameeff-elisan-todolist.netlify.app/'
    },
    {
      title: 'Pokeguide',
      description: 'A modern Pokédex web application built with React that allows users to explore, Battle, and favorite Pokémon with an interactive UI and real-time data fetching.',
      image: PokeguideImg,
      github: 'https://github.com/Kobii2214/pokeguide.git',
      demo: 'https://pokeguide-elisan-adjarail.netlify.app/'
    }
  ];

  return (
    <div className="projects-section">
      <FadeInWhenVisible>
        <p className="projects-text">Browse my recent</p>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <h2>Projects</h2>
      </FadeInWhenVisible>

      <div className="projects-scroll">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
  {project.github && (
    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
  )}
  {project.demo && (
    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
  )}
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
