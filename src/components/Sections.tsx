"use client";
import { skills, roadmap, EMAIL, GITHUB, LINKEDIN } from "@/data/site";
import { Reveal, Stagger, Item } from "./Motion";
import { ViewCvButton } from "./CvModal";
import { motion } from "framer-motion";

const Head = ({ title, lead }: { title: string; lead?: string }) => (
  <Reveal><h2>{title}</h2>{lead && <p className="lead">{lead}</p>}</Reveal>
);

export function About() {
  const rows = [
    ["Education", "Diploma Engineering, 8th semester, BGPI"], ["Training", "Data Science & Machine Learning, DIPTI"],
    ["Interests", "Python, Data Science, ML, Computer Vision, Web, IoT"], ["Languages", "Bengali (native), English (professional working), Japanese (JLPT N4)"],
    ["Location", "Dhaka / Barishal, Bangladesh"], ["Career goal", "AI & Machine Learning Engineer"],
  ];
  return (
    <section id="about"><div className="wrap">
      <Head title="About me" />
      <div className="ab">
        <Reveal>
          <p>I’m Md Golam Rabbi, an 8th-semester Diploma Engineering student at Barisal Government Polytechnic Institute (BGPI), Bangladesh. I’m passionate about programming, artificial intelligence, and building technology that solves real problems.</p>
          <p>My work spans web development, IoT, embedded systems and Python desktop applications. Projects like an Institute Management System, a Face Recognition &amp; Attendance System and a Water Level Monitoring System taught me how software, hardware, databases and intelligent technologies fit together.</p>
          <p>My long-term goal is to become an AI and Machine Learning engineer who builds meaningful intelligent applications using data and technology.</p>
          <div className="motto">“Still learning. Still building. Never settling.”</div>
        </Reveal>
        <Reveal delay={0.15}><div className="card"><dl>{rows.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl></div></Reveal>
      </div>
    </div></section>
  );
}

export function Training() {
  return (
    <section id="training"><div className="wrap">
      <Head title="Professional training & industrial attachment" lead="Structured industry training, separate from my diploma coursework and self-study." />
      <Reveal><div className="train">
        <div>
          <h3>Data Science &amp; Machine Learning</h3>
          <p className="org">Daffodil International Professional Training Institute (DIPTI), Dhaka, Bangladesh</p>
          <p>As part of my industrial attachment, I’m training in Data Science and Machine Learning. It moves me from foundational programming toward data-driven problem solving and intelligent application development. My focus is Python, data analysis workflows, essential Data Science tools, and Machine Learning fundamentals.</p>
          <p className="note">Topics are listed as studied or in progress, not as finished mastery.</p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.05rem", marginBottom: 12 }}>Learning areas</h3>
          <ul>{["Python programming", "NumPy and numerical computing", "Data analysis with Pandas", "Data cleaning and visualization", "Machine Learning fundamentals", "Practical Data Science projects"].map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </div></Reveal>
    </div></section>
  );
}

export function Skills() {
  return (
    <section id="skills"><div className="wrap">
      <Head title="Skills & technologies" lead="Grouped by what I use, and honest about what I’m still learning." />
      <Stagger className="grid g2">
        {skills.map((g) => (
          <Item key={g.title}><motion.div className="card" whileHover={{ y: -6 }}>
            <h3 style={{ marginBottom: 14 }}>{g.title}</h3>
            <ul className="tags">{g.items.map((s) => <li key={s.n}>{s.n}{s.l && <small>{s.l}</small>}</li>)}</ul>
          </motion.div></Item>
        ))}
      </Stagger>
      <Reveal><div className="card" style={{ marginTop: 22 }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: 6 }}>AI-assisted development</h3>
        <p style={{ margin: 0 }}>I use AI tools as learning and development assistants: to understand concepts, explore implementation approaches, troubleshoot errors and improve my workflow, while building my own programming and problem-solving ability.</p>
      </div></Reveal>
    </div></section>
  );
}

export function Education() {
  const e = [
    ["Diploma Engineering", "Barisal Government Polytechnic Institute (BGPI), Barishal. Computer Science and Technology, currently in the 8th semester."],
    ["Secondary School Certificate", "Science group, Board of Intermediate and Secondary Education, Barishal. 2022, GPA 4.83 out of 5.00."],
    ["Professional training", "Data Science & Machine Learning at DIPTI, Dhaka, as part of my industrial attachment."],
  ];
  return (
    <section id="education"><div className="wrap">
      <Head title="Education" />
      <Stagger className="edu">{e.map(([t, d]) => <Item key={t}><motion.div className="card" whileHover={{ y: -6 }}><h3>{t}</h3><p style={{ margin: 0 }}>{d}</p></motion.div></Item>)}</Stagger>
    </div></section>
  );
}

export function Roadmap() {
  return (
    <section id="roadmap"><div className="wrap">
      <Head title="Learning journey & career roadmap" lead="The path from my current foundation to an AI/ML engineering role." />
      <ol className="rm">
        {roadmap.map(([t, d], i) => (
          <motion.li key={t} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: i * 0.05 }}>
            <b>{i + 1}</b><div><h3>{t}</h3><p>{d}</p></div>
          </motion.li>
        ))}
      </ol>
    </div></section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="ct"><div className="wrap">
      <Head title="Let’s build something together" lead="Have an opportunity, an interesting project, or an idea worth building? I’d love to connect, collaborate and learn." />
      <Reveal delay={0.1}><div className="row">
        <a className="btn pri" href={`mailto:${EMAIL}`}>Email me</a>
        <a className="btn" href="#projects">View projects</a>
        <ViewCvButton className="btn">View CV</ViewCvButton>
        <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
      </div>
      <p className="links"><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></p></Reveal>
    </div></section>
  );
}
