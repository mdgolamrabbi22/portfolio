"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CV_PATH } from "@/data/site";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });
export const useCv = () => useContext(Ctx);

export function CvProvider({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setShow(false);
    document.body.style.overflow = show ? "hidden" : "";
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [show]);
  return (
    <Ctx.Provider value={{ open: () => setShow(true) }}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShow(false)}>
            <motion.div className="cvbox" role="dialog" aria-modal="true" aria-label="Curriculum Vitae"
              initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }} onClick={(e) => e.stopPropagation()}>
              <div className="bar">
                <strong>Md Golam Rabbi — CV</strong>
                <div className="row">
                  <a className="btn pri sm" href={CV_PATH} download="Md_Golam_Rabbi_CV.pdf">⬇ Download CV</a>
                  <button className="btn sm" onClick={() => setShow(false)}>Close</button>
                </div>
              </div>
              <iframe src={`${CV_PATH}#view=FitH`} title="CV preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}

export function ViewCvButton({ className = "btn", children = "View CV" }: { className?: string; children?: ReactNode }) {
  const { open } = useCv();
  return <button className={className} onClick={open}>{children}</button>;
}
