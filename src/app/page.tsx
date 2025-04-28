import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import DoctorDirectory from "@/components/DoctorDirectory";
import Contact from "@/components/Contact";
import InteractiveDemo from "@/components/InteractiveDemo";
import OnboardingTour from "@/components/OnboardingTour";

export default function Home() {
  return (
    <main>
      <OnboardingTour />
      <Hero />
      <InteractiveDemo />
      <About />
      <Features />
      <Screenshots />
      <DoctorDirectory />
      <Contact />
    </main>
  );
}
