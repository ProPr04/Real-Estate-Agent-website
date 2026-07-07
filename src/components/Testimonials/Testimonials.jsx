import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import testimonials from "./testimonialData";

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-[#10B981]">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#1F2937] lg:text-5xl">
            Trusted By Families
            <span className="block text-[#2563EB]">
              Across Maharashtra
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our clients trust us to find homes that perfectly balance
            affordability, luxury, and long-term value.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}

        <div className="mt-20 grid gap-6 rounded-[32px] bg-[#F3F4F6] p-10 text-center md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold text-[#2563EB]">
              500+
            </h3>

            <p className="mt-2 text-gray-600">
              Happy Families
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#2563EB]">
              10+
            </h3>

            <p className="mt-2 text-gray-600">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#2563EB]">
              300+
            </h3>

            <p className="mt-2 text-gray-600">
              Properties Sold
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#2563EB]">
              98%
            </h3>

            <p className="mt-2 text-gray-600">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;