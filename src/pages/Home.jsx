import PageTransition from "../components/layout/PageTransition";
import SEOHead from "../components/SEOHead";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import GitHubStats from "../components/sections/GitHubStats";
import ContactCTA from "../components/sections/ContactCTA";

/**
 * Home Page (Main Landing Route)
 * Consolidates all structural preview sections.
 */
export default function Home() {
  return (
    <PageTransition>
      <SEOHead
        title="Danish Khan | Full Stack MERN Developer — Portfolio"
        description="Danish Khan is a Full Stack MERN Developer from Bhusawal, Maharashtra, India. Specializing in React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and modern web applications. View projects and hire for freelance or full-time roles."
      />
      <div className="w-full relative flex flex-col">
        {/* Sections Stack */}
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <GitHubStats />
        <ContactCTA />
      </div>
    </PageTransition>
  );
}
