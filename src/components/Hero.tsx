import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import ResilienceScore from "./charts/ResilienceScore";
import SoilHealthChart from "./charts/SoilHealthChart";

const soilHealthData = [
  { category: "Critical", value: 3, percentage: 0.02, color: "hsl(0 84% 60%)" },
  { category: "Degraded", value: 9, percentage: 2.2, color: "hsl(36 100% 50%)" },
  { category: "Fair", value: 18, percentage: 4.04, color: "hsl(45 100% 50%)" },
  { category: "Good", value: 81, percentage: 0.04, color: "hsl(142 76% 36%)" },
  { category: "Optimal", value: 23, percentage: 5.31, color: "hsl(142 76% 46%)" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
        >
          <ResilienceScore score={6.5} change={2.2} />
          <SoilHealthChart data={soilHealthData} totalPercentage={74} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-white backdrop-blur-sm mb-6"
          >
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Advanced Soil Intelligence</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Understand Your Soil{" "}
            <span className="text-gradient-primary">Like Never Before</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto"
          >
            Real-time soil health monitoring, predictive analytics, and actionable
            insights for sustainable agriculture
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-glow text-lg px-8 py-6 group"
            >
              Start Monitoring
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white hover:text-foreground backdrop-blur-sm text-lg px-8 py-6"
            >
              See Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "50K+", label: "Hectares Monitored" },
              { value: "99.2%", label: "Accuracy" },
              { value: "2.5M+", label: "Soil Samples" },
              { value: "24/7", label: "Live Monitoring" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
