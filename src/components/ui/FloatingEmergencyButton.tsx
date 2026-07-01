"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function FloatingEmergencyButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href="/emergency"
        className="group relative flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-shadow hover:shadow-xl hover:shadow-accent/40"
      >
        <motion.span
          className="absolute inset-0 rounded-md bg-accent"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(255,107,74,0.6)",
              "0 0 0 15px rgba(255,107,74,0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <Phone className="h-4 w-4 relative z-10" />
        <span className="relative z-10">Emergency</span>
      </Link>
    </motion.div>
  );
}
