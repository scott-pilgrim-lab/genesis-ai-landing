import { motion } from "framer-motion";

interface SoilHealthData {
  category: string;
  value: number;
  percentage: number;
  color: string;
}

interface SoilHealthChartProps {
  data: SoilHealthData[];
  totalPercentage: number;
}

const SoilHealthChart = ({ data, totalPercentage }: SoilHealthChartProps) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="backdrop-blur-md bg-black/40 rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-white/90 font-medium text-sm mb-1">
          Share of soils in good health
        </h3>
        <div className="flex items-baseline gap-2">
          <motion.span
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {totalPercentage}%
          </motion.span>
          <span className="text-white/60 text-xs">in good health</span>
        </div>
        <span className="text-white/40 text-xs">0 St. of 11.66 ha</span>
      </div>

      <div className="flex items-end justify-between gap-3 h-48">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 gap-2">
            {/* Bar */}
            <div className="relative w-full h-full flex items-end">
              <motion.div
                className="w-full rounded-t relative"
                style={{
                  backgroundColor: item.color,
                  height: `${(item.value / maxValue) * 100}%`,
                }}
                initial={{ height: 0 }}
                animate={{ height: `${(item.value / maxValue) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Value label */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-white/80 text-xs font-medium">
                  {item.value}
                </div>
              </motion.div>
            </div>

            {/* Label */}
            <div className="text-center">
              <div className="text-white/90 text-xs font-medium mb-0.5">
                {item.category}
              </div>
              <div className="text-white/40 text-[10px]">
                {item.percentage} St.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoilHealthChart;
