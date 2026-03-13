import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollReveal = ({
  children,
  baseOpacity = 0,
  duration = 1,
  distance = 20,           // qué tanto se mueve
  direction = "up",        // "up" | "down" | "left" | "right"
  once = false,            // si quieres que se repita o no
  delay = 0,               // delay opcional
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const offset = (() => {
    switch (direction) {
      case "down":
        return { x: 0, y: -distance }; // empieza arriba y baja
      case "left":
        return { x: distance, y: 0 };  // empieza derecha y entra a la izq
      case "right":
        return { x: -distance, y: 0 }; // empieza izquierda y entra a la der
      case "up":
      default:
        return { x: 0, y: distance };  // empieza abajo y sube (lo tuyo actual)
    }
  })();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: baseOpacity, ...offset }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: baseOpacity, ...offset }
      }
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
