import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] "
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
        <ProjectsCard
          title="Virtual Voice Assistant"
          des="I created the Virtual Voice Assistant. A smart voice assistant built with React that opens websites through spoken commands and performs Google searches when needed. Seamlessly blends predefined actions with flexible voice-based browsing for a hands-free experience."
          src={projectOne}
          link= 'https://virtual-voice-assistant-six.vercel.app/'
          git='https://github.com/Amina-Razzaq/Virtual-Voice-Assistant'
        />

         <ProjectsCard
          title="3D-animated-portfolio-website"
          des="I created a 3D-animated-portfolio-website. A visually dynamic 3D animated portfolio website showcasing my skills and projects with interactive motion and modern design. Built with React and Three.js, it delivers an immersive experience that highlights creativity and frontend expertise."
          src={projectTwo}
          link= 'https://3-d-animated-portfolio-website.vercel.app/'
          git='https://github.com/Amina-Razzaq/3D-animated-portfolio-Website'
        />

        <ProjectsCard
          title="BulkSms-website"
          des=" I developed a  website using Html CSS  to form a layout and showcase its services. The site is user-friendly, responsive, and designed to attract and engage potential clients."
          src={projectThree}
          link= 'https://myntra-clone-w3n8.vercel.app/'
          git='https://github.com/Amina-Razzaq/BulkSms-website'
        />
        
      </div>
    </section>
  );
}

export default Projects