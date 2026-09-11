import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="
      min-h-screen
      bg-[#051424]
      text-[#d4e4fa]
    ">

      <Navbar />

      <main className="pt-16">

        {/* HOME */}
        <Hero />

        {/* PROJECTS */}
        <FeaturedWork />

        {/* ABOUT */}
        <About />

        <Contact/>

      </main>

      <Footer />

    </div>
  );
}