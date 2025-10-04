import ParallaxHero from "@/components/ParallaxHero";
import About from "@/sections/About";
import Blog from "@/sections/Blog";
import ChairsMessage from "@/sections/ChairsMessage";
import Faculty from "@/sections/Faculty";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import NewsEvents from "@/sections/News&Events";

export default function Home() {
  return (
    <main className="site-container">
      <ParallaxHero>
        <Navbar />
        <Hero />
      </ParallaxHero>
      <About />
      <NewsEvents />
      <Faculty />
      <Blog />
      <ChairsMessage />
      <Footer />
    </main>
  );
}
