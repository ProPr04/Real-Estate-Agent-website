import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import ContactInfo from "./ContactInfo";

const ContactMap = lazy(() => import("./ContactMap"));

const Contact = () => {
  const position = [19.9975, 73.7898];

  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Form & Map */}
          <div className="flex flex-col gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[32px] shadow-xl p-10"
            >
              <div className="mb-8">
                <span className="uppercase tracking-[4px] text-sm font-semibold text-[#10B981]">
                  Book Consultation
                </span>
                <h2 className="mt-3 text-4xl font-bold text-[#1F2937]">
                  Let's Find Your Dream Home
                </h2>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#2563EB]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#2563EB]"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#2563EB]"
                />

                <select
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#2563EB]"
                >
                  <option>Select Budget</option>
                  <option>Under ₹50 Lakh</option>
                  <option>₹50L - ₹1 Cr</option>
                  <option>₹1 Cr - ₹2 Cr</option>
                  <option>Above ₹2 Cr</option>
                </select>

                <select
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#2563EB]"
                >
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>Commercial</option>
                </select>

                <textarea
                  rows="5"
                  placeholder="Tell us about your dream property..."
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none resize-none focus:border-[#2563EB]"
                />

                <button
                  className="bg-[#2563EB] hover:bg-[#10B981] transition text-white px-8 py-4 rounded-full font-semibold"
                >
                  Book Consultation
                </button>
              </form>
            </motion.div>

            {/* Map (Square Frame) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="overflow-hidden rounded-[32px] shadow-xl aspect-square w-full bg-gray-100 flex items-center justify-center border border-white"
            >
              <Suspense fallback={
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm font-semibold text-gray-500">Loading Map...</span>
                </div>
              }>
                <ContactMap position={position} />
              </Suspense>
            </motion.div>
          </div>

          {/* Right Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <span className="uppercase tracking-[4px] text-sm font-semibold text-[#10B981]">
              Contact Us
            </span>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-[#1F2937]">
              Schedule A Visit To
              <br />
              Your Future Home
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Whether you're searching for a budget-friendly apartment,
              a premium villa, or your forever home, our experts are
              ready to help you make the right decision.
            </p>

            <div className="mt-10">
              <ContactInfo />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;