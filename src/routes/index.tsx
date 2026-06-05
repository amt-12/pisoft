import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/pisoft/Hero";
import { ChaosStory } from "@/components/pisoft/ChaosStory";
import { Transformation } from "@/components/pisoft/Transformation";
import { DayInLife } from "@/components/pisoft/DayInLife";
import { DashboardShowcase } from "@/components/pisoft/DashboardShowcase";
import { Industries } from "@/components/pisoft/Industries";
import { Results } from "@/components/pisoft/Results";
import { Services } from "@/components/pisoft/Services";
import { Process } from "@/components/pisoft/Process";
import { Demo } from "@/components/pisoft/Demo";
import { Trust } from "@/components/pisoft/Trust";
import { Finale } from "@/components/pisoft/Finale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pisoft ERP — One Platform. Complete Business Control." },
      { name: "description", content: "Pisoft transforms scattered operations into one intelligent business ecosystem. ERP, custom software, and digital solutions for ambitious teams." },
      { property: "og:title", content: "Pisoft ERP — One Platform. Complete Business Control." },
      { property: "og:description", content: "Transform scattered operations into one intelligent business ecosystem." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Playfair+Display:ital,wght@1,600&family=Caveat:wght@700&family=Dancing+Script:wght@700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Hero />
      <ChaosStory />
      <Transformation />
      <DayInLife />
      <DashboardShowcase />
      <Industries />
      <Results />
      <Services />
      <Process />
      <Demo />
      <Trust />
      <Finale />
    </main>
  );
}
