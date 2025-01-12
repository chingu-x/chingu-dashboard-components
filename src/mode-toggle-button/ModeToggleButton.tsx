import { AnimatePresence, type Variants, motion } from "framer-motion";

import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

interface ModeToggleButtonProps {
  onChange: () => void;
  theme: "light" | "dark";
}

export default function ModeToggleButton({
  theme,
  onChange,
}: ModeToggleButtonProps) {
  const modeToggleVariants: Variants = {
    hidden: {
      rotate: 25,
    },
    show: {
      rotate: 0,
    },
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        className="invisible w-0 h-0"
        data-testid="mode-toggle"
        type="checkbox"
        onChange={onChange}
        checked={theme === "light"}
      />
      <AnimatePresence mode="wait" initial={false}>
        <div className="w-6 h-6">
          {theme === "light" && (
            <motion.div
              key="moneIcon"
              variants={modeToggleVariants}
              initial="hidden"
              animate="show"
            >
              <MoonIcon className="w-full h-full fill-current text-base-300" />
            </motion.div>
          )}
          {theme === "dark" && (
            <motion.div
              key="sunIcon"
              variants={modeToggleVariants}
              initial="hidden"
              animate="show"
            >
              <SunIcon className="w-full h-full fill-current text-base-300" />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </label>
  );
}
