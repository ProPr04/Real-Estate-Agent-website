import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import properties from "./propertyData";

const areas = ["All", ...new Set(properties.map((p) => p.area))];

const Properties = () => {
  const [selectedArea, setSelectedArea] = useState("All");

  const filteredProperties = useMemo(() => {
    if (selectedArea === "All") return properties;

    return properties.filter((item) => item.area === selectedArea);
  }, [selectedArea]);

  return (
    <section className="bg-[#F3F4F6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-semibold uppercase tracking-[4px] text-[#10B981]">
            Best Properties In Budget
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#1F2937] lg:text-5xl">
            Find Properties Near You
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Browse handpicked homes in different neighborhoods and filter them
            based on your preferred area.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-4">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`rounded-full px-6 py-3 font-semibold transition ${
                selectedArea === area
                  ? "bg-[#2563EB] text-white"
                  : "bg-white hover:bg-[#10B981] hover:text-white"
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="rounded-full bg-[#2563EB] px-8 py-4 font-semibold text-white transition hover:bg-[#10B981]">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;