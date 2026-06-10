import { motion, AnimatePresence } from "motion/react";

export const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          w-full
          h-175
          rounded-3xl
          bg-gray-200
          animate-pulse
          pt-9
        "
      />
    </AnimatePresence>
  );
};