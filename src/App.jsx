import React from 'react';
import HeroSlide from './components/HeroSlide';
import AboutSlide from './components/AboutSlide';
import SkillsSlide from './components/SkillsSlide';
import ProjectsSlide from './components/ProjectsSlide';
import EducationSlide from './components/EducationSlide';
import ContactSlide from './components/ContactSlide';

function App() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar bg-neutral-950">
      <HeroSlide />
      <AboutSlide />
      <SkillsSlide />
      <ProjectsSlide />
      <EducationSlide />
      <ContactSlide />
    </div>
  );
}

export default App;