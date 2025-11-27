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
    <section className="py-20 md:py-32 bg-transparent backdrop-blur-sm">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for Modern Farming
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to monitor, analyze, and optimize your soil health
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
                <Card className="p-8 h-full border-2 hover:border-primary transition-colors group hover:shadow-glow bg-card/60 backdrop-blur-md">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
