import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Stack({ cards, randomRotation = false }) {
  const [stack, setStack] = useState(cards);

  const handleClick = (index) => {
    // mover la carta clickeada al fondo del stack
    setStack((prev) => {
      const newStack = [...prev];
      const [clicked] = newStack.splice(index, 1);
      newStack.push(clicked);
      return newStack;
    });
  };

  return (
    <div style={{ position: "relative", width: "340px", height: "200px", margin: "auto" }}>
      <AnimatePresence>
        {stack.map((card, i) => {
          const rotation = randomRotation ? (Math.random() - 0.5) * 6 : 0;
          const offset = i * 6; // desplazamiento visible
          return (
            <motion.div
              key={i}
              onClick={() => handleClick(i)}
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, rotate: rotation, top: offset, left: offset }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                cursor: "pointer",
                zIndex: stack.length - i, // carta superior arriba
              }}
            >
              {card}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
