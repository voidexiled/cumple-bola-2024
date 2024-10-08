import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";
import type { GiftButtonProps } from "../types";

export default function GiftButton({
  isGiftOpen,
  onGiftClick,
}: {
  isGiftOpen: boolean;
  onGiftClick: (e: React.MouseEvent) => void;
}) {
  return (
    <AnimatePresence>
      {!isGiftOpen && (
        <motion.button
          onClick={onGiftClick}
          className="w-24 h-24 bg-gradient-to-br from-[#fec89a] to-[#f9dcc4] rounded-lg shadow-lg relative overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Gift className="w-16 h-16 text-[#4a4e69] mx-auto relative z-10" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "linear",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
