import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = ({
  tag,
  title,
  description,
  image,
  reverse = false,
  buttonText,
}) => {
  return (
    <section className="py-20 lg:py-28">
      <div
        className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-[2px] bg-[#10B981]" />
            <span className="uppercase tracking-wider text-sm font-semibold text-[#10B981]">
              {tag}
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight">
            {title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            {description}
          </p>

          <button className="group mt-10 inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#10B981] transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:-translate-y-1">
            {buttonText}

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;