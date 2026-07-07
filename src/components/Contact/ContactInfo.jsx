import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const ContactInfo = () => {
  const items = [
    {
      icon: Mail,
      title: "Email Us",
      value: "contact@dreamnestrealty.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "College Road, Nashik, Maharashtra",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat | 9:00 AM - 7:00 PM",
    },
  ];

  return (
    <div className="space-y-8">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="flex gap-5 items-start"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Icon
                className="text-[#2563EB]"
                size={24}
              />
            </div>

            <div>
              <h4 className="font-semibold text-xl text-[#1F2937]">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-1">
                {item.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;