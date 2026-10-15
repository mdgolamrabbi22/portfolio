import { CvProvider } from "@/components/CvModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import { About, Training, Skills, Education, Roadmap, Contact } from "@/components/Sections";

export default function Home() {
  return (
    <CvProvider>
      <Navbar />
      <main>
        <Hero /><About /><Training /><Projects /><Skills /><Education /><Certificates /><Roadmap /><Contact />
      </main>
      <footer>© 2026 Md Golam Rabbi. Dhaka / Barishal, Bangladesh.</footer>
    </CvProvider>
  );
}
