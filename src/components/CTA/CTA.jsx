import { motion } from "framer-motion";
import { ArrowRight, BadgeDollarSign, Building2 } from "lucide-react";

import ctaBg from "../../assets/images/cta-bg.webp";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[40px]">

          {/* Background */}

          <img
            src={ctaBg}
            alt="Luxury Home"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}

          <div className="relative z-10 flex items-center justify-center px-6 py-28">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl rounded-[32px] bg-white/95 backdrop-blur-xl shadow-2xl px-10 py-14 text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-[#2563EB] font-semibold">
                <Building2 size={18} />
                Find Your Dream Home
              </div>

              <h2 className="mt-8 text-4xl lg:text-6xl font-bold leading-tight text-[#1F2937]">
                Premium Living
                <br />
                <span className="text-[#2563EB]">
                  Within Your Budget
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                Discover carefully selected premium and luxury homes that match
                your lifestyle without exceeding your budget. From modern
                apartments to elegant villas, we help you find exceptional
                properties at the right price.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-8">

                <div className="flex items-center gap-3">
                  <BadgeDollarSign
                    className="text-[#10B981]"
                    size={24}
                  />

                  <span className="font-medium text-gray-700">
                    Budget Friendly Deals
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Building2
                    className="text-[#10B981]"
                    size={24}
                  />

                  <span className="font-medium text-gray-700">
                    Verified Luxury Homes
                  </span>
                </div>

              </div>

              <button className="group mt-12 inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#10B981] hover:-translate-y-1 shadow-xl">
                Explore Budget Homes

                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;