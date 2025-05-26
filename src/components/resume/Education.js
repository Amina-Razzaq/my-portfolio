import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Science"
            subTitle="Government college women uiniversity faisalabad (2022 - 2024)"
            result="3.63/4"
            des="In my degree during master, I sharpened programming skills and explored database management. Hands-on projects provided practical experience in building software solutions and grasping complex algorithms."
          />
          <ResumeCard
            title="Bachelor of Science"
            subTitle="Punjab University,Lahore (2019 - 2021)"
            result="A Grade"
            des=" I specialized in my subjects , delving into advanced topics like developing analytical and problem-solving skills."
          />
          <ResumeCard
            title="FSC -pre-Medical"
            subTitle="Punjab College Faisalabad (2015 - 2017)"
            result="951/1100"
            des=" I pursued my study with dedication and full focus with practical and got A+ grade"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Punjab science School (2013 - 2015)"
            result="924/1100"
            des="During my school education, I focused on basic fundamentals, gaining a strong understanding of  concepts and basic mathematics. "
          />
        </div>
      </div>
      {/* part Two */}

    
    </motion.div>
  );
};

export default Education;
