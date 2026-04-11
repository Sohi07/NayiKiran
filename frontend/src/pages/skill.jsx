import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // Ensure the correct import path
import Footer from "../components/Footer";

const Skill = () => {
  return (
    <div className="relative z-0 bg-gradient-to-r from-purple-300 to-pink-200 min-h-screen flex flex-col w-full">
      {/* Navbar */}
      <div className="bg-pink-100">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center px-6 ">
        <div className="max-w-screen-xl mx-auto bg-pink-100 shadow-lg rounded-lg p-6 w-full">
          <motion.h2
            className="text-3xl font-extrabold text-center text-pink-700"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🏆 Skill Development
          </motion.h2>

          {/* Centered iframe with reduced size */}
          <motion.div
            className="w-full mt-8  flex justify-center items-center" // Added items-center to center the content
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <iframe
              src="https://www.skillindiadigital.gov.in/sector/list?forCourse=true"
              title="Government Website"
              className="w-3/4 h-[550px] rounded-lg shadow-2xl transition-transform transform mb-2 bg-purple-100 hover:scale-105"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
      <div className="w-full relative z-0">
                <Footer />
      </div>
    </div>
  );
};

export default Skill;
