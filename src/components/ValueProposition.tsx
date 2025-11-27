import { Droplets, Activity, TrendingUp, Database } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Droplets,
    title: "Water Management",
    description: "Optimize irrigation with real-time moisture tracking",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Track soil vitality and detect issues early",
  },
  {
    icon: TrendingUp,
    title: "Yield Prediction",
    description: "AI-powered forecasting for better planning",
  },
  {
    icon: Database,
    title: "Historical Data",
    description: "Years of soil analytics at your fingertips",
  },
];

const ValueProposition = () => {
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
            Why Choose Soil Intelligence?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make data-driven decisions to improve soil health, increase yields,
            and promote sustainable farming
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 shadow-glow">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
