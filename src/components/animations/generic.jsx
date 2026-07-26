import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedElement = ({
  children,
  initial = { opacity: 0, y: 20 },
  animateInView = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  viewportOptions = { once: false, amount: 0.2 }, // Changed once: false
  className = "",
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOptions);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animateInView : initial}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
