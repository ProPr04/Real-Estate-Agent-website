import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const links = [
  "Home",
  "Properties",
  "About",
  "Services",
  "Contact",
];

const MobileMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-72 bg-white z-50 p-6"
          >
            <div className="flex justify-end mb-10">
              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {links.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-lg font-medium text-gray-700 hover:text-blue-600"
                >
                  {item}
                </a>
              ))}

              <button className="mt-4 bg-blue-600 text-white rounded-full py-3 font-semibold hover:bg-emerald-500 transition">
                Get Your Future Home
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;