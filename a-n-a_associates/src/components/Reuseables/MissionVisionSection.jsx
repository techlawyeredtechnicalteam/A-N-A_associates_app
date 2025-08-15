//
import { motion } from "framer-motion";
import { ABOUT_ANIMATION_VARIANTS } from "../Animation/AboutAnimation";
import { MissionVisionCard } from "./MissionVisionCard";
import { MISSION_VISION_DATA } from "@/constants/MissionVisionData";

export const MissionVisionSection = () => (
  <motion.section
    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
    aria-labelledby="mission-vision"
    variants={ABOUT_ANIMATION_VARIANTS.container}
  >
    <MissionVisionCard data={MISSION_VISION_DATA.mission} type="mission" />
    <MissionVisionCard data={MISSION_VISION_DATA.vision} type="vision" />
  </motion.section>
);
