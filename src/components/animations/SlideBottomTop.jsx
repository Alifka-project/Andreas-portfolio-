import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedElement = ({
  children,
  initial = { opacity: 0, y: 50 }, // Starts from bottom (50px) and invisible
  animateInView = { opacity: 1, y: 0 }, // Ends at normal position (0px) and visible
  transition = {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1], // Smooth ease-in-out
    staggerChildren: 0.1, // If animating multiple children
  },
  viewportOptions = { once: false, amount: 0.2 },
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
