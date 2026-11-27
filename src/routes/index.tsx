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
import { clinicPostalAddress, whatsappDisplay } from "@/lib/contact";

const pageTitle = "Mauro Roberto | Fisioterapia em Bonito, Pernambuco";
const pageDescription =
  "Fisioterapia presencial e domiciliar em Bonito, Pernambuco. Conheça os tratamentos e recursos terapêuticos de Mauro Roberto.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Mauro Roberto",
          description:
            "Atendimento fisioterapêutico presencial e domiciliar em Bonito, Pernambuco.",
          telephone: whatsappDisplay,
          address: {
            "@type": "PostalAddress",
            ...clinicPostalAddress,
          },
          areaServed: [
            "Bonito, Pernambuco",
            "Barra de Guabiraba",
            "Camocim de São Félix",
            "São Joaquim",
          ],
          employee: {
            "@type": "Person",
            name: "Mauro Roberto",
            jobTitle: "Fisioterapeuta",
            identifier: "CREFITO 1 — 455966-F",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços de fisioterapia",
            itemListElement: [
              "Fisioterapia convencional",
              "Quiropraxia",
              "Ventosaterapia",
              "Liberação miofascial",
              "Eletroterapia",
              "Atendimento fisioterapêutico domiciliar",
            ].map((name) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name,
              },
            })),
          },
        },
      },
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
    let secondAnimationFrame: number | undefined;
    const animationFrame = requestAnimationFrame(() => {
      resetToHero();
      secondAnimationFrame = requestAnimationFrame(resetToHero);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      if (secondAnimationFrame !== undefined) {
        cancelAnimationFrame(secondAnimationFrame);
      }
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
