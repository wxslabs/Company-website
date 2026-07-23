
import React from "react";
import { ThemeProvider } from "./hooks/useTheme";
import { AuroraBackground } from "./components/shared/AuroraBackground";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/hero/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { Products } from "./components/Products";
import { WhyWXS } from "./components/WhyWXS";
import { Services } from "./components/Services";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Process } from "./components/Process";
import { TechStack } from "./components/TechStack";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-surface font-sans text-ink">
        <Preloader />
        <AuroraBackground />
        <Navbar />
        <main>
          <Hero />
          <TrustedBy />
          <Products />
          <WhyWXS />
          <Services />
          <FeaturedProjects />
          <Process />
          <TechStack />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>);

}