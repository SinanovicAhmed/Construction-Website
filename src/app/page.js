import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="font-poppins">
      <Header />
      <Hero />
      <About />
    </main>
  );
}
