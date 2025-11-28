import { Leaf, LineChart, MapPin, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Leaf,
    title: "Soil Health Scoring",
    description:
      "Comprehensive analysis of soil vitality, nutrient levels, and organic matter. Get actionable scores that guide your agricultural decisions and track improvements over time.",
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "AI-powered forecasts for crop yields, optimal planting times, and resource needs. Leverage historical data and weather patterns to maximize productivity and minimize waste.",
    gradient: "from-accent to-accent-glow",
  },
  {
    icon: MapPin,
    title: "Precision Mapping",
    description:
      "GPS-enabled soil mapping with centimeter accuracy. Visualize variations across your fields and apply targeted treatments exactly where needed for optimal results.",
    gradient: "from-primary-dark to-accent",
  },
  {
    icon: Shield,
    title: "Compliance & Reporting",
    description:
      "Automated documentation for environmental certifications and sustainable farming practices. Generate detailed reports that meet regulatory requirements effortlessly.",
    gradient: "from-accent to-primary",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-black/20 backdrop-blur-md">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Tackle the key challenges
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to monitor, analyze, and optimize soil health for sustainable agriculture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border border-white/10 hover:border-primary/50 transition-all group hover:shadow-xl bg-white/5 backdrop-blur-lg">
                  <div
                    className={`w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
