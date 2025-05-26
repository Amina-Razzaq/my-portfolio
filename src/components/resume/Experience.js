import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
       <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full stack developer"
            subTitle="lablab.ai - (2025 - Present)"
            result="Heckathons"
            des="Participated in LabLab AI hackathons, solving real-world problems with innovative projects. Demonstrated teamwork and a commitment to learning and technology."
          />
          <ResumeCard
            title="Volunteer"
            subTitle="Institute - (April 2024- March 2025)"
            result="Trainee"
            des="Completed a 1-year at Punjab school , teaching different subject from grade 6 to 12 mostly Science subjects. Give hands on experience and taught computer e.g Html css javascript, programming skills,and problem solving.Its was really a lot of me in improving my skills, confidence,  mentorship and leadership."
          />
          <ResumeCard
            title="Fron-end developer"
            subTitle="LogicZon - (Nov 2023- jan 2024)"
            result="Internship"
            des="Completed a 3-month internship at LogicZon, do projects in using React.js, Tailwind CSS, bootsrap, JavaScript and Javascript's library e.g j.query. Gained skills in building user-friendly interfaces and creating interactive web applicationsC  ompleted a 3-month frontend internship at Prosoftic, learning React.js, Tailwind CSS, JavaScript, API management, and effective team communication. Acquired skills in building user-friendly interfaces and collaborating effectively with teams"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="FIVER - (2023 - 2024)"
            result="Freelancing"
            des="Keen on applying my skills in React.js, Tailwind CSS, and JavaScript to freelance projects, driven by a passion for technology and design. Excited to collaborate on projects that align with my interests, aiming to deliver innovative solutions for clients."
          />
        </div>
      </div>
   
  
    </motion.div>
  );
};

export default Experience;
