import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Attendance } from "@/components/sections/Attendance";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PainPoints } from "@/components/sections/PainPoints";
import { Testimonials } from "@/components/sections/Testimonials";
import { Treatments } from "@/components/sections/Treatments";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mauro Roberto | Fisioterapia e qualidade de vida." },
      {
        name: "description",
        content:
          "Conheça os tratamentos de fisioterapia de Mauro Roberto, com atendimento presencial e domiciliar. Dê o primeiro passo para recuperar seu bem-estar.",
      },
      { property: "og:title", content: "Mauro Roberto | Fisioterapia e qualidade de vida" },
      {
        property: "og:description",
        content:
          "Fisioterapia, movimento e cuidado individualizado. Conheça os tratamentos e as modalidades de atendimento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const wasReloaded =
      navigationEntry?.type === "reload" ||
      (
        "navigation" in performance &&
        (performance as Performance & { navigation: { type: number } }).navigation.type === 1
      );

    if (!wasReloaded) return;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${window.location.search}`,
    );

    const resetToHero = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    resetToHero();
    const animationFrame = requestAnimationFrame(() => {
      resetToHero();
      requestAnimationFrame(resetToHero);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Treatments />
        <About />
        <HowItWorks />
        <Attendance />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
