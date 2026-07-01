"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
];

export function LanguageToggle() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-md bg-white/80 backdrop-blur-md border border-border px-3 py-2 text-sm font-medium text-foreground shadow-lg hover:shadow-xl transition-all"
        aria-label="Toggle language"
      >
        <Globe className="h-4 w-4" />
        <span>{current.label}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-0 mb-2 min-w-[120px] rounded-xl border border-border bg-white shadow-xl overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrent(lang);
                  setOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-primary-50 ${
                  current.code === lang.code
                    ? "font-semibold text-primary"
                    : "text-foreground"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
