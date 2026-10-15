"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, filters, type Category, type Project } from "@/data/site";
import { Reveal } from "./Motion";

const icons: Record<Project["icon"], JSX.Element> = {
  face: <><path d="M8 20V10h10M46 10h10v10M56 44v10H46M18 54H8V44" /><circle cx="32" cy="26" r="9" /><path d="M16 50c2-9 9-13 16-13s14 4 16 13" /></>,
  screen: <><rect x="8" y="12" width="48" height="34" rx="4" /><path d="M8 22h48M24 54h16M32 46v8" /></>,
  drop: <><path d="M32 8C32 8 16 28 16 38a16 16 0 0 0 32 0C48 28 32 8 32 8Z" /><path d="M24 40c0 4 3 7 8 8" /></>,
};

function LiveButton({ url }: { url?: string }) {
  if (url) return <a className="btn pri sm" href={url} target="_blank" rel="noopener noreferrer">● Live Demo</a>;
  return <span className="btn pri sm off" role="link" aria-disabled="true" title="Live link coming soon">● Live Demo</span>;
}

export default function Projects() {
  const [f, setF] = useState<"all" | Category>("all");
  const list = projects.filter((p) => f === "all" || p.category === f);
  return (
    <section id="projects"><div className="wrap">
      <Reveal><h2>Featured projects</h2><p className="lead">Three projects across AI, web development and IoT.</p></Reveal>
      <div className="flt" role="group" aria-label="Filter projects">
        {filters.map((x) => (
          <button key={x.key} aria-pressed={f === x.key} onClick={() => setF(x.key)}>
            {f === x.key && <motion.span layoutId="pill" className="pill" transition={{ type: "spring", stiffness: 350, damping: 30 }} />}
            <span className="lb">{x.label}</span>
          </button>
        ))}
      </div>
      <motion.div className="grid g3" layout>
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article key={p.title} layout className="card pc" initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 26 }}>
              <div className="th" style={{ ["--c1" as string]: p.c1, ["--c2" as string]: p.c2 }}>
                <motion.svg viewBox="0 0 64 64" aria-hidden="true" whileHover={{ scale: 1.15, rotate: -4 }}>{icons[p.icon]}</motion.svg>
              </div>
              <div className="pb">
                <div className="meta"><span>{p.meta}</span><span className={`st ${p.status === "Developed" ? "done" : "dev"}`}>{p.status}</span></div>
                <h3>{p.title}</h3><p className="tg">{p.tagline}</p><p>{p.description}</p>
                <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <div className="row">
                  {p.category !== "iot" && <LiveButton url={p.live} />}
                  <a className="btn sm" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div></section>
  );
}
