import { motion, AnimatePresence } from "framer-motion";
import type { TicketProps } from "../types";
import { Sparkles } from "lucide-react";
export default function Ticket({ showTicket }: { showTicket: boolean }) {
  const whatsappMsgLink =
    "https://api.whatsapp.com/send/?phone=%2B528332032681&text=Hola+mi+amor+te+amo+quiero+canjear+mi+regalo+%3C3";
  return (
    <AnimatePresence>
      {showTicket && (
        <motion.a
          href={whatsappMsgLink}
          target="_blank"
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          rel="noreferrer"
        >
          <div className="bg-gradient-to-r from-[#fec89a] to-[#f9dcc4] p-1 rounded-xl shadow-xl">
            <div className="bg-white rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#fec89a] to-[#f9dcc4]" />
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#fec89a] to-[#f9dcc4]" />
              <div className="absolute top-2 left-0 w-2 h-4 bg-white rounded-r-full" />
              <div className="absolute top-2 right-0 w-2 h-4 bg-white rounded-l-full" />
              <div className="absolute bottom-2 left-0 w-2 h-4 bg-white rounded-r-full" />
              <div className="absolute bottom-2 right-0 w-2 h-4 bg-white rounded-l-full" />

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Sparkles className="w-32 h-32 text-[#fec89a] opacity-10" />
              </motion.div>

              <div className="relative z-10">
                <motion.h2
                  className="text-2xl font-bold text-[#4a4e69] mb-2 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  ¡Sorpresa!
                </motion.h2>
                <motion.p
                  className="text-base text-[#6b705c] mb-2 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Click para canjear 💕
                </motion.p>
                <motion.div
                  className="bg-gradient-to-r from-[#fec89a] to-[#f9dcc4] text-[#4a4e69] font-bold py-3 px-6 rounded-full text-center text-lg shadow-md relative overflow-hidden"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <span className="relative z-10">$2,200 MXN</span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-20"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      ease: "linear",
                    }}
                  />
                </motion.div>
                <motion.div
                  className="text-xs text-[#6b705c] mt-4 text-center flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <img src={"/sephora-logo.png"} alt="Sephora" width={80} />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
