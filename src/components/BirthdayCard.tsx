import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import CardFront from "./CardFront";
import CardInside from "./CardInside";
import { cardAnimation } from "../animations";

export default function BirthdayCard() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [showTicket, setShowTicket] = useState(false);

  const defaults = {
    origin: { y: 0.6 },
  };

  const fire = (particleRatio: number, opts: confetti.Options) => {
    const particleCount = Math.floor(window.innerWidth * particleRatio);
    confetti({
      ...defaults,
      ...opts,
      particleCount,
    });
  };

  const handleCardClick = () => {
    if (!isCardOpen) {
      setIsCardOpen(true);
      setTimeout(() => {
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8,
        });
      }, 10);
    }
  };

  const handleGiftClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsGiftOpen(true);
    setTimeout(() => {
      setShowTicket(true);

      fire(0.35, {
        spread: 60,
        decay: 0.91,
        scalar: 0.8,
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13151a] via-[#171923] to-[#1c1f2a] flex flex-col items-center justify-center p-4">
      <motion.div
        className="w-full max-w-sm aspect-[3/5] bg-[#f0e6e6] rounded-lg shadow-xl overflow-hidden cursor-pointer"
        onClick={handleCardClick}
        animate={cardAnimation(isCardOpen)}
      >
        <CardFront isCardOpen={isCardOpen} />
        <CardInside
          isCardOpen={isCardOpen}
          isGiftOpen={isGiftOpen}
          showTicket={showTicket}
          onGiftClick={handleGiftClick}
        />
      </motion.div>
    </div>
  );
}
