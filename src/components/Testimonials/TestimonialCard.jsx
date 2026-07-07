import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group h-full rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB] hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, index) => (
            <Star
              key={index}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <div className="rounded-2xl bg-blue-50 p-3 text-[#2563EB] transition group-hover:bg-[#2563EB] group-hover:text-white">
          <Quote size={24} />
        </div>
      </div>

      <p className="mt-8 leading-8 text-gray-600">
        "{testimonial.review}"
      </p>

      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-[#1F2937]">
          {testimonial.name}
        </h3>

        <p className="mt-1 text-[#10B981]">
          {testimonial.location}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;