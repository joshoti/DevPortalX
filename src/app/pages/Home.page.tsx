import { Header } from "../components/Header/Header";
import { Hero } from "../components/TypingHero/Hero";
import { Welcome } from "../components/Welcome/Welcome";
import { Footer } from "../components/Footer/Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <Footer />
    </>
  );
}
