import { Header } from "../components/Header/Header";
import { Hero } from "../components/TypingHero/Hero";
import { Welcome } from "../components/LandingPage/Welcome";
import { UseCase } from "../components/LandingPage/UseCase";
import { Footer } from "../components/Footer/Footer";
import { Updates } from "../components/LandingPage/Updates";

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <UseCase />
      <Updates />
      <Welcome />
      <Footer />
    </>
  );
}
