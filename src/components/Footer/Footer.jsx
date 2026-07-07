import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              DreamNest<span className="text-[#2563EB]">.</span>
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              Helping families discover affordable premium and luxury
              homes with complete transparency, trusted guidance,
              and unmatched local expertise.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "About",
                "Properties",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#10B981] transition flex items-center gap-2"
                  >
                    <ArrowUpRight size={16} />
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>Property Buying</li>
              <li>Property Selling</li>
              <li>Investment Advice</li>
              <li>Luxury Homes</li>
              <li>Property Consultation</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <MapPin className="text-[#2563EB] mt-1" />

                <p className="text-gray-300">
                  College Road,
                  <br />
                  Nashik, Maharashtra
                </p>

              </div>

              <div className="flex gap-4">

                <Phone className="text-[#2563EB]" />

                <p className="text-gray-300">
                  +91 98765 43210
                </p>

              </div>

              <div className="flex gap-4">

                <Mail className="text-[#2563EB]" />

                <p className="text-gray-300">
                  contact@dreamnestrealty.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} DreamNest Realty.
            All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400">

            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;