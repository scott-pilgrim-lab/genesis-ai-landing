import { Brain, Workflow, BarChart3, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Intelligent Automation",
    description:
      "Our AI learns your workflows and optimizes them automatically. Save hours every week with smart task routing and predictive analytics.",
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: Workflow,
    title: "Seamless Workflows",
    description:
      "Build complex automation chains with our visual editor. Connect any app, API, or database without writing a single line of code.",
    gradient: "from-accent to-accent-glow",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Monitor performance with live dashboards. Get actionable insights to optimize your operations and improve ROI continuously.",
    gradient: "from-primary-dark to-accent",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SOC 2 compliance, and advanced access controls. Your data stays private and secure, always.",
    gradient: "from-accent to-primary",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, automate, and scale your operations
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
                <Card className="p-8 h-full border-2 hover:border-primary transition-colors group hover:shadow-glow bg-gradient-card">
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
