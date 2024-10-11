import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/TypingHero/Hero";
import { Documentation } from "../components/LandingPage/Documentation";
import { Updates } from "../components/LandingPage/Updates";
import { UseCase } from "../components/LandingPage/UseCase";

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Documentation />
      <UseCase />
      <Updates />
      <Footer />
    </>
  );
}
