import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface ResilienceScoreProps {
  score: number;
  change: number;
  maxScore?: number;
}

const ResilienceScore = ({ score, change, maxScore = 10 }: ResilienceScoreProps) => {
  const percentage = (score / maxScore) * 100;
  const strokeDasharray = 2 * Math.PI * 45;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  const getScoreLabel = (score: number) => {
    if (score >= 8) return "EXCELLENT";
    if (score >= 6.5) return "GOOD";
    if (score >= 5) return "FAIR";
    if (score >= 3) return "DEGRADED";
    return "CRITICAL";
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return "hsl(142 76% 46%)";
    if (score >= 6.5) return "hsl(142 76% 36%)";
    if (score >= 5) return "hsl(45 100% 50%)";
    if (score >= 3) return "hsl(36 100% 50%)";
    return "hsl(0 84% 60%)";
  };

  return (
    <div className="backdrop-blur-md bg-black/40 rounded-2xl p-6 border border-white/10">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-white/90 font-medium text-sm">Resilience score</h3>
        <span className="text-white/60 text-xs">Top 30%</span>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          {/* Background circle */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={getScoreColor(score)}
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ strokeDashoffset: strokeDasharray }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                strokeDasharray,
              }}
            />
          </svg>
          
          {/* Score text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {score.toFixed(1)}
            </motion.span>
            <span
              className="text-xs font-semibold mt-1"
              style={{ color: getScoreColor(score) }}
            >
              {getScoreLabel(score)}
            </span>
            <span className="text-white/40 text-xs">{maxScore}</span>
          </div>
        </div>
      </div>

      {/* Change indicator */}
      <div className="mt-4 flex items-center gap-2 text-sm">
        <TrendingUp className="w-4 h-4 text-primary" />
        <span className="text-white/90">
          <span className="text-primary font-semibold">+{change.toFixed(1)} pts</span> since 2021
        </span>
      </div>
    </div>
  );
};

export default ResilienceScore;
