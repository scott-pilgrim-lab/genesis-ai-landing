import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import soilLayersBg from "@/assets/soil-layers-bg.png";

const Index = () => {
  return (
    <>
      <Header />
      <main 
        className="relative min-h-screen overflow-x-hidden pt-20"
        style={{
          backgroundImage: `url(${soilLayersBg})`,
          backgroundAttachment: 'scroll',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      {/* Content Sections */}
      <div className="relative z-10">
        <section className="min-h-[100vh]">
          <Hero />
        </section>
        <section className="min-h-[80vh]">
          <ValueProposition />
        </section>
        <section className="min-h-[100vh]">
          <Features />
        </section>
        <section className="min-h-[80vh]">
          <CTASection />
        </section>
        <section>
          <Footer />
        </section>
      </div>
      </main>
    </>
  );
};

export default Index;
