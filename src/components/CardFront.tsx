import { motion } from "framer-motion";
import type { CardProps } from "../types";

export default function CardFront({ isCardOpen }: CardProps) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: isCardOpen ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-full bg-gradient-to-br from-[#f9c5d1] to-[#f6e7d8] flex items-center justify-center">
        <p className="text-[#4a4e69] text-2xl font-bold">Toca para abrir</p>
      </div>
    </motion.div>
  );
}
