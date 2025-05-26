import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievement</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="CS50x Puzzle Day Winner'25"
            subTitle="Solved 9/9 Puzzles"
            result="CS50x Puzzle Day"
            des="Solved 9/9 Puzzles in CS50x Puzzle Day @ Harvard University with my talented team @geniusminds"
          />
          <ResumeCard
            title="LeetCode Mastery"
            subTitle="Coding Challenges to Hone Problem-Solving Skills"
            result="Leetcode"
            des="Doing daily LeetCode coding, enhancing problem-solving skills and mastering algorithmic concepts."
          />
          <ResumeCard
            title="Hackathon Excellence"
            subTitle="Recognized for Outstanding Performance in LabLabAI Hackathons"
            result="Heckathons"
            des="Emerged as a  participant in  hackathons hosted by LabLabAI, demonstrating creativity, teamwork, and technical proficiency in developing innovative solutions within tight time constraints."
          />
          <ResumeCard
            title="Academic Excellence"
            subTitle="Graduated with Outstanding 91% Achievement in University Education"
            result="Education"
            des="Accomplished an impressive academic goal by graduating with an outstanding 91% score, showcasing commitment and excellence in university studies"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
