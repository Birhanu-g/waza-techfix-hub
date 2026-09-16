 import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* Services */}
        <section id="services">
          <Services />
        </section>

        {/* About */}
        <About />
		 <Solutions />
		  <Projects />
		  <Training />
		    <Contact />
			 <Footer />
      </main>
    </>
  );
}