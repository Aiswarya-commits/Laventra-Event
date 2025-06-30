import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Years of Experience.", highlight: false },
  { value: "30+", label: "Skilled Professionals.", highlight: false },
  { value: "300+", label: "Projects Worldwide.", highlight: true },
  { value: "100%", label: "Customer Satisfaction.", highlight: false },
];

const StatsSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "60px 20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            marginTop: "150px",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                color: "#800080",
                minWidth: "220px",
              }}
            >
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: 900,
                  color: "#800080",
                  textShadow: `
                1px 1px 0 #c77dff,
                2px 2px 0 #a855f7,
                3px 3px 2px rgba(0, 0, 0, 0.2)
              `,
                  letterSpacing: "1px",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "1.5",
                  color: "#800080",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StatsSection;
