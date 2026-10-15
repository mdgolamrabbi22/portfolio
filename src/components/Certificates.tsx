"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { certs } from "@/data/site";
import { Reveal, Stagger, Item } from "./Motion";

export default function Certificates() {
  const [sel, setSel] = useState<number | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setSel(null);
    addEventListener("keydown", k); return () => removeEventListener("keydown", k);
  }, []);
  return (
    <section id="certificates"><div className="wrap">
      <Reveal><h2>Certificates &amp; achievements</h2><p className="lead">Select a certificate to view it in full. Personal ID details on the SSC certificate are covered.</p></Reveal>
      <Stagger className="grid g2">
        {certs.map((c, i) => (
          <Item key={c.title}><motion.article className="card cert" whileHover={{ y: -6 }}>
            <button className="imgbtn" onClick={() => setSel(i)} aria-label={`View ${c.title}`}>
              <Image src={c.img} alt={c.alt} width={600} height={450} className="im" sizes="(max-width:640px) 90vw, 520px" />
            </button>
            <div className="cat">{c.cat}</div><h3>{c.title}</h3><p>{c.org}</p>{c.note && <p>{c.note}</p>}
            <button className="btn sm" onClick={() => setSel(i)}>View certificate</button>
          </motion.article></Item>
        ))}
      </Stagger>
      <AnimatePresence>
        {sel !== null && (
          <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.div className="certbox" initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} onClick={(e) => e.stopPropagation()}>
              <div className="bar"><strong>{certs[sel].title}</strong><button className="btn sm" onClick={() => setSel(null)}>Close</button></div>
              <Image src={certs[sel].img} alt={certs[sel].alt} width={1300} height={978} className="full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div></section>
  );
}
