import { Zap, Globe, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Zap,
    title: "AI-powered automation",
    description: "Let intelligent workflows handle repetitive tasks",
  },
  {
    icon: Globe,
    title: "Easy integration",
    description: "Connect with 1000+ apps in just a few clicks",
  },
  {
    icon: Rocket,
    title: "Fast setup",
    description: "Go live in minutes, not days or weeks",
  },
  {
    icon: Shield,
    title: "Scalable architecture",
    description: "Grows with your business, no matter the size",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate, integrate, and accelerate your
            business workflows
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
