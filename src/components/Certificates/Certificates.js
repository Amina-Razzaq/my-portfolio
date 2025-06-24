import React from 'react';
import Title from '../layouts/Title';
import CertificateCard from './CertificateCard';

// Import your certificate images here
import { certificate4, certificate6,  } from "../../assets/index";

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: "AI Genesis Hackathon",
      des: "Made a project named SupplyShield 2.0-Smart Risk Detection which is AI powered shipement risk intelligence using streamlit",
      src: certificate6,

    },
    
    {
      id: 4,
      title: "CS50X Puzzle",
      des: "Solved 9/9 puzzles in CS50X Puzzle Day 2025 and got certificate From Cambridge.",
      src: certificate4,

    },
   
  ];

  return (

    <section
      id="certificates"
      className="w-full h-auto bg-bodyColor text-lightText px-4"
    >
      <div className='max-w-screen-xl mx-auto w-full p-4 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000'>

   
      <div className="flex justify-center items-center text-center">
        <Title
          title="MY ACHIEVEMENTS AND QUALIFICATIONS"
          des="Certificates"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {certificatesData.map((certificate) => (
          <CertificateCard
          key={certificate.id}
          id={certificate.id}
          title={certificate.title}
          src={certificate.src}
        />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Certificates;