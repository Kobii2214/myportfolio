import React from 'react';
import './experience.css';
import FadeInWhenVisible from './FadeInWhenVisible';

const Experience = () => {
  return (
    <div className="experience">
      <FadeInWhenVisible delay={0}>
        <p className="experience-description">Explore My</p>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1}>
        <h2>Experience</h2>
      </FadeInWhenVisible>

      <div className="journey">
        <FadeInWhenVisible delay={0.2}>
          <div className="experience-item">
            <h3>Shopify</h3>
            <p><strong>Project:</strong> ShopEase</p>
            <p><em>Front-End Developer | 2023 - 2024</em></p>
            <p>ShopEase allows users to create shopping lists, set deadlines, and receive reminders.</p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3}>
          <div className="experience-item">
            <h3>WebMD</h3>
            <p><strong>Project:</strong> SymptomedMatcher</p>
            <p><em>Front-End Developer | 2022 - 2023</em></p>
            <p>SymptomedMatcher helps users match symptoms to possible health conditions.</p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <div className="experience-item">
            <h3>Oracle</h3>
            <p><strong>Project:</strong> Supply Inventory System</p>
            <p><em>Front-End Developer | 2021 - 2022</em></p>
            <p>Tracks and manages inventory across departments for organizations.</p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.5}>
          <div className="experience-item">
            <h3>Autodesk</h3>
            <p><strong>Project:</strong> Build Z</p>
            <p><em>Front-End Developer | 2020 - 2021</em></p>
            <p>Build Z tracks construction projects, costs, and progress in real time.</p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.6}>
          <div className="experience-item">
            <h3>Todoist</h3>
            <p><strong>Project:</strong> To Do List</p>
            <p><em>Front-End Developer | 2019 - 2020</em></p>
            <p>A task management tool for creating lists, setting deadlines, and tracking progress.</p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.7}>
          <div className="experience-item">
            <h3>Pokémon Company</h3>
            <p><strong>Project:</strong> Pokeguide</p>
            <p><em>Front-End Developer | 2018 - 2019</em></p>
            <p>Pokeguide helps users compare Pokémon and track their favorites.</p>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Experience;
