import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import hero from "../../assets/images/hero.webp";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src={hero}
        alt="Luxury Home"
        className="absolute inset-0 h-full w-full object-cover"
        fetchpriority="high"
        decoding="async"
      />

      {/* Dark Vignette Overlay (Dark border shadow to make text pop) */}
      <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]"></div>

      <Navbar />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium text-gray-100">
                Trusted Real Estate Agency
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Find The Perfect{" "}
              <span className="text-blue-400">Home</span>
              <br />
              For Your Future
            </h1>

            {/* Paragraph */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Discover premium properties, expert guidance, and exceptional
              opportunities tailored to help you buy, sell, or invest with
              complete confidence.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-full bg-[#2563EB] px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#10B981]">
                Get Your Future Home
              </button>

              <button className="rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-white">
                Explore Properties
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;