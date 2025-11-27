import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import verticalLandscape from "@/assets/vertical-soil-landscape.jpg";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="relative min-h-screen">
      {/* Parallax Background */}
      <motion.div 
        className="fixed inset-0 w-full h-[400vh] z-0"
        style={{ y: backgroundY }}
      >
        <img 
          src={verticalLandscape} 
          alt="Vertical soil landscape from sky to underground layers" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <ValueProposition />
        <Features />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
