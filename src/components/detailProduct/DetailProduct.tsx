import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";

type DetailProductProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const DetailProduct = ({ isOpen, onClose }: DetailProductProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div className="relative bg-white rounded-2xl p-6 w-full max-w-md">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl text-neutral-secondary hover:text-neutral-tertiary transition-all duration-100"
            >
              <IoClose />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
