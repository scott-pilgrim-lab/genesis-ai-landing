import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import verticalLandscape from "@/assets/vertical-soil-landscape.jpg";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Fixed Parallax Background - Applied via CSS */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${verticalLandscape})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Content Sections - Each with min-height for parallax effect */}
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
  );
};

export default Index;
