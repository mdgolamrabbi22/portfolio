"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ViewCvButton } from "./CvModal";

const up = (d: number) => ({ initial: { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] as const } });

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="blob b1" /><div className="blob b2" />
      <div className="wrap hg">
        <div>
          <motion.div className="badge" {...up(0.1)}><i />Open to internships, full-time jobs and scholarships</motion.div>
          <motion.h1 {...up(0.2)}>Md Golam <em>Rabbi</em></motion.h1>
          <motion.p className="quote" {...up(0.3)}>“The plan might not work. I’m building it anyway.”</motion.p>
          <motion.p className="role" {...up(0.4)}>Aspiring AI &amp; Machine Learning Engineer</motion.p>
          <motion.p className="in" {...up(0.5)}>I write Python, build web and IoT projects, and I’m training in Data Science and Machine Learning at DIPTI, Dhaka. I’m working toward a career building intelligent applications.</motion.p>
          <motion.div className="row" {...up(0.6)}>
            <a className="btn pri" href="#projects">Explore projects</a>
            <ViewCvButton className="btn">View CV</ViewCvButton>
            <a className="btn" href="#contact">Contact me</a>
          </motion.div>
        </div>

        <motion.div className="photo" initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <div className="glow" />
          <motion.div className="frame" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <Image src="/images/profile.jpg" alt="Portrait of Md Golam Rabbi in a dark blazer and light blue shirt" width={560} height={609} priority sizes="(max-width:900px) 80vw, 460px" />
            <div className="plate"><strong>Md Golam Rabbi</strong><span>AI &amp; ML Engineer in the making</span></div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
