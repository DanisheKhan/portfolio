import React from "react";
import PageTransition from "../components/layout/PageTransition";
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
