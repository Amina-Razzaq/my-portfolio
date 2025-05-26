import React from 'react';
import { contactImg } from "../../assets/index";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md h-full border p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contact"
      />

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold">Amina Razzaq</h3>
        <p className="text-lg font-normal">Front-end Developer</p>
        <p className="text-base tracking-wide">
          Front-end Developer | Generative AI Enthusiast | LeetCode | PhD Candidate
        </p>
        <p className="text-base flex items-center gap-2">
          Phone: <span>+92 3414208783</span>
        </p>
        <p className="text-base flex items-center gap-2">
          Email: <span>aminarazzaq72@gmail.com</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <span className="bannerIcon">
              <FaDiscord />
            </span>
          </a>
          <a
            href="https://github.com/Amina-Razzaq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/amina-razzaq-65960429b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://leetcode.com/u/Amina_Razzaq/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <span className="bannerIcon">
              <BsCodeSlash />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;