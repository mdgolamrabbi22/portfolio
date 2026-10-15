// ===== Edit links here =====
export const CV_PATH = "/cv/Md_Golam_Rabbi_CV.pdf"; // replace this PDF in /public/cv/
export const EMAIL = "mr2433399@gmail.com";
export const GITHUB = "https://github.com/mdgolamrabbi22";
export const LINKEDIN = "https://www.linkedin.com/in/md-golam-rabbi-11a920330";

export type Category = "ai" | "web" | "iot";
export interface Project {
  title: string; tagline: string; description: string; meta: string;
  status: "In development" | "Developed"; category: Category;
  tags: string[]; github: string;
  live?: string; // put the live link here later, e.g. "https://your-site.com"
  c1: string; c2: string; icon: "face" | "screen" | "drop";
}

export const projects: Project[] = [
  {
    title: "Face Recognition & Attendance System",
    tagline: "Making attendance smarter through face recognition.",
    description: "A Python desktop app for student attendance. It has a graphical interface for student information, department and semester selection, and attendance operations, and explores how computer vision can simplify attendance in schools and colleges.",
    meta: "AI, Computer Vision, Desktop", status: "In development", category: "ai",
    tags: ["Python", "CustomTkinter", "OpenCV", "Computer Vision"],
    github: "https://github.com/mdgolamrabbi22/Face-Recognation-Attendence-System",
    live: "", c1: "#2f6bff", c2: "#8b5cf6", icon: "face",
  },
  {
    title: "Institute Management System",
    tagline: "Bringing academic services together in one platform.",
    description: "A web platform for an educational institution that organizes student records, teacher information, departments and academic notices in one place, making academic information easier to reach for students, teachers and administrators.",
    meta: "Web Development, Database", status: "In development", category: "web",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/mdgolamrabbi22/Institute-Management-System",
    live: "https://bpi.infy.click/index.php", c1: "#22d3ee", c2: "#2f6bff", icon: "screen",
  },
  {
    title: "Water Level Monitoring System",
    tagline: "Connecting hardware with real-world monitoring.",
    description: "A hardware project that uses electronic sensors and embedded-system technology to monitor water levels. It reflects my interest in combining hardware and software to solve practical problems.",
    meta: "IoT, Embedded Systems", status: "Developed", category: "iot",
    tags: ["Arduino", "Embedded Systems", "Sensors", "C/C++"],
    github: "https://github.com/mdgolamrabbi22/Water-Level-Monitoring-System",
    c1: "#8b5cf6", c2: "#22d3ee", icon: "drop",
  },
];

export const filters: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All" }, { key: "ai", label: "AI & Computer Vision" },
  { key: "web", label: "Web" }, { key: "iot", label: "IoT & Embedded" },
];

export const skills: { title: string; items: { n: string; l?: string }[] }[] = [
  { title: "Programming & development", items: [{ n: "Python", l: "practicing" }, { n: "TypeScript" }, { n: "Next.js" }, { n: "PHP" }, { n: "JavaScript" }, { n: "HTML5" }, { n: "CSS3" }, { n: "MySQL" }, { n: "C/C++" }] },
  { title: "Data Science & ML", items: [{ n: "NumPy", l: "practicing" }, { n: "Pandas", l: "learning" }, { n: "Data analysis", l: "developing" }, { n: "Data cleaning", l: "learning" }, { n: "Visualization", l: "learning" }, { n: "ML fundamentals", l: "learning" }, { n: "Computer Vision" }] },
  { title: "Tools & platforms", items: [{ n: "Git & GitHub" }, { n: "VS Code" }, { n: "XAMPP" }, { n: "Arduino IDE" }, { n: "CustomTkinter" }] },
  { title: "Professional skills", items: [{ n: "Problem-solving" }, { n: "Debugging" }, { n: "Project development" }, { n: "Database integration" }, { n: "Self-directed learning" }] },
];

export const certs = [
  { img: "/images/cert-ssc.jpeg", cat: "Academic qualification", title: "Secondary School Certificate (SSC)", org: "Board of Intermediate and Secondary Education, Barishal", note: "2022, Science group, GPA 4.83 / 5.00", alt: "Secondary School Certificate, with personal details covered" },
  { img: "/images/cert-skills.jpg", cat: "Competition & achievement", title: "Skills and Innovation Competition 2025", org: "Institute level participation, organized by Barishal Polytechnic Institute, supported by the ASSET Project (Directorate of Technical Education, Ministry of Education)", note: "27 September 2025", alt: "Certificate of Participation, Skills and Innovation Competition 2025" },
  { img: "/images/cert-frontend.jpg", cat: "Professional learning, web development", title: "Front-End Development (React / NodeJS / VueJS / AngularJS)", org: "80-hour training by the Department of CSIT, Patuakhali Science and Technology University, under the EDGE Project of Bangladesh Computer Council, ICT Division", note: "Aug to Sep 2024. Issued 19 Dec 2024. Serial EDGE-DSTS-101-3175-00004, QR-verifiable.", alt: "Front-End Development training certificate" },
  { img: "/images/cert-brac.jpg", cat: "AI training", title: "AI Skills Training Programme", org: "Certificate of completion from BRAC Education Programme and Social Innovation Lab, part of the AI Opportunity Fund: Asia-Pacific with AVPN, supported by Google.org and the Asian Development Bank", note: "", alt: "BRAC AI Skills Training certificate of completion" },
];

export const roadmap = [
  ["Strengthen the foundation", "Develop Python, problem-solving, essential mathematics and core computer science concepts."],
  ["Develop Data Science skills", "Learn NumPy, Pandas, data cleaning, exploratory analysis and visualization."],
  ["Learn Machine Learning", "Study statistics, supervised and unsupervised learning, model training and evaluation."],
  ["Build real-world projects", "Create practical Data Science and ML projects, publish them on GitHub and document the outcomes."],
  ["Become an AI/ML engineer", "Pursue internships, full-time roles, scholarships and further education while keeping skills current."],
];
