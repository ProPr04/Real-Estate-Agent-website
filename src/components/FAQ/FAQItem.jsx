import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ faq, active, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-xl font-semibold text-[#1F2937] pr-5">
          {faq.question}
        </h3>

        <ChevronDown
          className={`transition duration-300 ${
            active ? "rotate-180 text-[#2563EB]" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .35 }}
            className="overflow-hidden"
          >
            <p className="mt-5 text-gray-600 leading-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;