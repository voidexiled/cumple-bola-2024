import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import type { CardInsideProps } from "../types";
import GiftButton from "./GiftButton";
import Ticket from "./Ticket";

export default function CardInside({
  isCardOpen,
  isGiftOpen,
  showTicket,
  onGiftClick,
}: CardInsideProps) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: isCardOpen ? 1 : 0 }}
      style={{ rotateY: 180 }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-full bg-[#f0e6e6] p-6 flex flex-col items-center justify-between">
        <div className="text-center mb-4">
          <motion.h1
            className="text-3xl font-bold text-[#4a4e69] mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            ¡Feliz Cumpleaños, Mi Amor!
          </motion.h1>
          <motion.p
            className="text-lg text-[#6b705c] mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Que este día esté lleno de amor y alegría.
          </motion.p>
          <motion.p
            className="text-lg text-[#6b705c]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Eres el regalo más hermoso en mi vida.{" "}
            <Heart className="inline-block text-[#e63946]" />
          </motion.p>
        </div>

        <div className="relative flex-grow flex items-center justify-center">
          <GiftButton isGiftOpen={isGiftOpen} onGiftClick={onGiftClick} />
          <Ticket showTicket={showTicket} />
        </div>
      </div>
    </motion.div>
  );
}
