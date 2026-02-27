import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const tabs = [
  { label: "Home", icon: "🏠" },
  { label: "Profile", icon: "👤" },
  { label: "Settings", icon: "⚙️" },
];

export default function AnimatedTabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <ul className="flex justify-between bg-gray-100 p-2 rounded-lg">
        {tabs.map((item) => (
          <motion.li
            key={item.label}
            className="relative cursor-pointer px-4 py-2"
            onClick={() => setSelectedTab(item)}
          >
            {item.label}

            {item === selectedTab && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded"
              />
            )}
          </motion.li>
        ))}
      </ul>


      <div className="mt-6 text-center text-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTab.icon}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
