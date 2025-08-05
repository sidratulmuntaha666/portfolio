"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
      transition={{ duration: 1}}
    >
      {children}
    </motion.div>
  );
}