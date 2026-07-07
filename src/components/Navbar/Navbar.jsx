import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import MobileMenu from "../Navbar/MobileMenu";

const links = [
  "Home",
  "Properties",
  "About",
  "Services",
  "Contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-7 py-4 flex items-center justify-between">

            <div className="flex items-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                alt="logo"
                className="w-8 h-8 invert"
              />

              <span className="text-white font-bold text-xl">
                DreamNest
              </span>
            </div>

            <nav className="hidden lg:flex gap-10 text-white">
              {links.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative group"
                >
                  {item}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <button className="hidden lg:block bg-blue-600 hover:bg-emerald-500 transition px-6 py-3 rounded-full text-white font-semibold shadow-xl">
              Get Your Future Home
            </button>

            <button
              onClick={() => setOpen(true)}
              className="text-white lg:hidden"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;