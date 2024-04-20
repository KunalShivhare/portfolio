"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const Section = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: delay }}
      className="my-6"
    >
      {children}
    </motion.div>
  );
};
export default Section;
