"use client";
import { motion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ delay = 0, y = 28, ...p }: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      {...p}
    />
  );
}

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
export const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };

export function Stagger(p: HTMLMotionProps<"div">) {
  return <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} {...p} />;
}
export function Item(p: HTMLMotionProps<"div">) {
  return <motion.div variants={item} {...p} />;
}
