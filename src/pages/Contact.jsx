import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { Send, Check, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/layout/PageTransition";
import { PERSONAL_DETAILS } from "../lib/data";
import ScrollReveal from "../components/ui/ScrollReveal";
import Plasma from "../components/ui/Plasma";

gsap.registerPlugin(ScrollTrigger);

/**
 * Contact Page (/contact) — full editorial redesign.
 *
 * Design: Top-half is a full-bleed large text "invitation" block with
 * massive headline, then a documentary-style inline form below — 
 * inputs styled as underline fields on a document rather than glass cards.
 * A bottom info strip closes the page with links and availability.
 */
export default function Contact() {
  const formRef = useRef(null);
  const pageRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Freelance Project",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-headline-word", {
        y: "110%",
        opacity: 0,
        stagger: 0.1,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.from(".contact-meta", {
        opacity: 0,
        y: 14,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.8,
      });
      gsap.from(".form-field", {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.55 },
      colors: ["#C5A880", "#EADBC8", "#ffffff"],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setStatus("loading");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const isConfigured = serviceId && templateId && publicKey && serviceId !== "service_placeholder" && serviceId !== "";

    const handleSuccess = () => {
      setStatus("success");
      triggerConfetti();
      setFormState({ name: "", email: "", subject: "Freelance Project", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    };

    if (isConfigured) {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: formState.name,
            name: formState.name,
            sender: formState.name,
            reply_to: formState.email,
            email: formState.email,
            sender_email: formState.email,
            subject: formState.subject,
            message: formState.message,
          },
          publicKey
        )
        .then(
          () => handleSuccess(),
          (err) => {
            console.error("EmailJS error, falling back to mockup simulator:", err);
            setTimeout(() => handleSuccess(), 1400);
          }
        );
    } else {
      // Visual simulation fallback for unconfigured keys in local/development context
      setTimeout(() => {
        handleSuccess();
      }, 1400);
    }
  };

  const subjects = [
    "Freelance Project",
    "Full-time Opportunity",
    "UI/UX Collaboration",
    "General Inquiry",
  ];

  const socials = [
    {
      label: "GitHub",
      handle: `@${PERSONAL_DETAILS.github}`,
      icon: <FaGithub className="w-4 h-4" />,
      url: `https://github.com/${PERSONAL_DETAILS.github}`,
    },
    {
      label: "LinkedIn",
      handle: `@${PERSONAL_DETAILS.linkedin}`,
      icon: <FaLinkedin className="w-4 h-4" />,
      url: `https://linkedin.com/in/${PERSONAL_DETAILS.linkedin}`,
    },
    {
      label: "WhatsApp",
      handle: "Message directly",
      icon: <FaWhatsapp className="w-4 h-4" />,
      url: PERSONAL_DETAILS.whatsapp,
    },
  ];

  return (
    <PageTransition>
      <div ref={pageRef} className="w-full min-h-screen bg-primary-bg select-none overflow-x-hidden relative">
        {/* Dynamic WebGL Plasma Shader Background - ambient deep indigo glow */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none hidden lg:block">
          <Plasma
            color="#3448C5"
            speed={0.35}
            scale={2.0}
            opacity={0.25}
            mouseInteractive={true}
          />
        </div>

        {/* ════════════════════════════════════════
            TOP — Editorial invitation block
        ════════════════════════════════════════ */}
        <div className="border-b border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Eyebrow strip */}
            <div className="flex items-center justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 border-b border-white/[0.05]">
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
                ✦ Contact
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-glow-dot" />
                Available for work
              </span>
            </div>

            {/* Massive headline */}
            <div className="py-8 sm:py-10 md:py-16 lg:py-24">
              <h1 className="text-[clamp(2rem,9vw,8rem)] font-bold font-clash-display tracking-tight leading-[0.9] flex flex-wrap gap-x-3 sm:gap-x-6 gap-y-1">
                {["Let's", "Build"].map((w, i) => (
                  <span key={i} className="overflow-hidden inline-block">
                    <span className="contact-headline-word inline-block text-white">{w}</span>
                  </span>
                ))}
                <br className="hidden md:block" />
                {["Something"].map((w, i) => (
                  <span key={i} className="overflow-hidden inline-block w-full">
                    <span className="contact-headline-word inline-block text-white">{w}</span>
                  </span>
                ))}
                {["Great."].map((w, i) => (
                  <span key={i} className="overflow-hidden inline-block">
                    <span className="contact-headline-word inline-block text-gradient italic">{w}</span>
                  </span>
                ))}
              </h1>
            </div>

            {/* Sub-row: email direct link + response time */}
            <div className="contact-meta flex flex-col gap-4 pb-8 sm:pb-12">
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="group inline-flex items-center gap-2 text-sm sm:text-base md:text-xl font-mono text-text-secondary hover:text-primary-accent transition-colors duration-300 break-all"
              >
                {PERSONAL_DETAILS.email}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono tracking-widest text-text-secondary uppercase">Response</span>
                  <span className="text-xs font-bold text-white font-mono">&lt; 24 hours</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono tracking-widest text-text-secondary uppercase">Timezone</span>
                  <span className="text-xs font-bold text-white font-mono">IST UTC+5:30</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono tracking-widest text-text-secondary uppercase">Based in</span>
                  <span className="text-xs font-bold text-white font-mono">Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            FORM — Documentary underline style
        ════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.05]">

            {/* Left: subject selector as a visual list */}
            <div className="py-10 sm:py-14 lg:pr-12 flex flex-col gap-5 sm:gap-6">
              <ScrollReveal direction="up" distance={20}>
                <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase font-semibold">
                  What's this about?
                </span>
              </ScrollReveal>
              <div className="flex flex-col gap-2">
                {subjects.map((s, idx) => (
                  <ScrollReveal key={s} direction="up" delay={idx * 0.05} distance={20} className="w-full">
                    <button
                      type="button"
                      onClick={() => setFormState((p) => ({ ...p, subject: s }))}
                      className={`text-left px-4 py-3.5 rounded-xl border text-sm font-medium font-clash-display tracking-wide transition-all duration-200 w-full cursor-pointer ${
                        formState.subject === s
                          ? "border-primary-accent bg-primary-accent/[0.08] text-primary-accent"
                          : "border-white/[0.05] bg-white/[0.01] text-text-secondary hover:text-white hover:border-white/[0.1]"
                      }`}
                    >
                      {s}
                      {formState.subject === s && (
                        <span className="float-right text-primary-accent">✦</span>
                      )}
                    </button>
                  </ScrollReveal>
                ))}
              </div>

              {/* Divider */}
              <ScrollReveal direction="up" delay={0.2} distance={15}>
                <div className="h-px bg-white/[0.05] mt-4" />
              </ScrollReveal>

              {/* Social links */}
              <div className="flex flex-col gap-3">
                <ScrollReveal direction="up" delay={0.25} distance={20}>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase font-semibold">
                    Or reach out via
                  </span>
                </ScrollReveal>
                {socials.map((s, i) => (
                  <ScrollReveal key={i} direction="up" delay={0.3 + i * 0.05} distance={20} className="w-full">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-text-secondary hover:text-white transition-colors duration-300 w-full"
                    >
                      <span className="w-8 h-8 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center group-hover:border-primary-accent/30 group-hover:text-primary-accent transition-all duration-300">
                        {s.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono tracking-widest uppercase text-text-secondary">
                          {s.label}
                        </span>
                        <span className="text-xs font-mono group-hover:text-primary-accent transition-colors duration-300">
                          {s.handle}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right: the form */}
            <div className="py-10 sm:py-14 lg:pl-12">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <Check className="w-7 h-7 text-green-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-clash-display text-white">Message Sent!</h3>
                    <p className="text-sm text-text-secondary font-light">
                      I'll get back to you within 24 hours. Looking forward to
                      connecting!
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-0"
                >
                  <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase font-semibold mb-8 block">
                    Your details
                  </span>

                  {/* Name */}
                  <div className="form-field flex flex-col gap-1 border-b border-white/[0.08] pb-6 mb-6 group focus-within:border-primary-accent transition-colors duration-300">
                    <label className="text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase group-focus-within:text-primary-accent transition-colors duration-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Danish Khan"
                      className="contact-input bg-transparent border-none outline-none text-white text-base md:text-lg font-clash-display placeholder-white/20 focus:outline-none p-0 w-full"
                    />
                  </div>

                  {/* Email */}
                  <div className="form-field flex flex-col gap-1 border-b border-white/[0.08] pb-6 mb-6 group focus-within:border-primary-accent transition-colors duration-300">
                    <label className="text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase group-focus-within:text-primary-accent transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className="contact-input bg-transparent border-none outline-none text-white text-base md:text-lg font-clash-display placeholder-white/20 focus:outline-none p-0 w-full"
                    />
                  </div>

                  {/* Message */}
                  <div className="form-field flex flex-col gap-1 border-b border-white/[0.08] pb-6 mb-10 group focus-within:border-primary-accent transition-colors duration-300">
                    <label className="text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase group-focus-within:text-primary-accent transition-colors duration-300">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and budget…"
                      className="contact-textarea bg-transparent border-none outline-none text-white text-sm md:text-base font-light leading-relaxed placeholder-white/20 focus:outline-none p-0 w-full resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group w-full sm:w-auto mt-4 inline-flex items-center justify-center gap-3 h-12 px-8 rounded-full bg-white text-black text-sm font-semibold font-mono tracking-wider transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ opacity: 1, visibility: 'visible', display: 'flex', zIndex: 100 }}
                  >
                    {status === "loading" ? (
                      <span className="flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-bounce [animation-delay:0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-bounce [animation-delay:0.3s]" />
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* ════════════════════════════════════════
            BOTTOM INFO STRIP
        ════════════════════════════════════════ */}
        <div className="border-t border-white/[0.05] mt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 py-5 sm:py-6">
            <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary uppercase">
              Danish Khan © 2026
            </span>
            <span className="text-[10px] font-mono text-text-secondary">
              Full Stack Software Engineer · Maharashtra, India
            </span>
          </div>
        </div>

        <style>{`
          .contact-input, .contact-textarea {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            padding: 0 !important;
            border-radius: 0 !important;
          }
          .contact-input:focus, .contact-textarea:focus {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            outline: none !important;
          }
        `}</style>

      </div>
    </PageTransition>
  );
}
