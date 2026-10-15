"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ViewCvButton } from "./CvModal";

const links = ["about", "training", "projects", "skills", "certificates", "roadmap", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const on = () => {
      const y = scrollY + 140; let cur = "";
      links.forEach((l) => { const el = document.getElementById(l); if (el && el.offsetTop <= y) cur = l; });
      setActive(cur);
    };
    on(); addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      <div className="wrap">
        <nav aria-label="Main">
          <a className="logo" href="#top">Golam <span>Rabbi</span></a>
          <button id="mb" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
          <ul id="menu" className={open ? "open" : ""}>
            {links.map((l) => (
              <li key={l}><a href={`#${l}`} className={active === l ? "on" : ""} onClick={() => setOpen(false)}>{l[0].toUpperCase() + l.slice(1)}</a></li>
            ))}
            <li className="navcv"><ViewCvButton className="btn pri sm">View CV</ViewCvButton></li>
          </ul>
        </nav>
      </div>
      <motion.div className="progress" style={{ scaleX: bar }} />
    </motion.header>
  );
}
