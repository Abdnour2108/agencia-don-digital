import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <UseCases />
      <Services />
      <WhyUs />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
