//
"use client";
import { motion } from "framer-motion";

const COMPANY_NAME = "A.N.A & Associates";

export const BackgroundAnimation = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <motion.div
          className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold whitespace-nowrap flex items-center h-full"
          animate={{
            x: [0, -2000]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="inline-block text-[#b98e44] pr-8">
            {Array(10).fill(`${COMPANY_NAME} • `).join("")}
          </span>
        </motion.div>
      </div>

      {/* Second layer for continuous effect */}
      <div className="absolute inset-0 opacity-2 sm:opacity-3">
        <motion.div
          className="text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold whitespace-nowrap flex items-center h-full"
          animate={{
            x: [-2000, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ marginTop: "10%" }}
        >
          <span className="inline-block text-white/10 pr-8">
            {Array(10).fill(`LEGAL EXCELLENCE • `).join("")}
          </span>
        </motion.div>
      </div>
    </div>
  );
};
