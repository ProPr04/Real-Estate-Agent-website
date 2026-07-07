import { BedDouble, Bath, Ruler, MapPin } from "lucide-react";

const PropertyCard = ({ property }) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#2563EB]">
            {property.price}
          </span>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-[#10B981]">
            For Sale
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-bold text-[#1F2937]">
          {property.title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-gray-500">
          <MapPin size={18} />
          {property.location}
        </div>

        <div className="mt-6 flex justify-between border-t pt-5 text-gray-600">
          <div className="flex items-center gap-2">
            <BedDouble size={18} />
            {property.beds}
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} />
            {property.baths}
          </div>

          <div className="flex items-center gap-2">
            <Ruler size={18} />
            {property.sqft}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;