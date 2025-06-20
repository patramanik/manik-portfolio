import { useState } from "react";
import { FaPaintBrush, FaCode, FaAndroid } from "react-icons/fa";
import ServiceModal from "../Models/ServiceModel"; // Make sure this path is correct

const services = [
  {
    icon: <FaPaintBrush className="text-purple-400 text-5xl" />,
    title: "UI/UX Design",
    border: "border-purple-500",
    color: "bg-purple-600 hover:bg-purple-700",
    desc: `Crafting intuitive and visually appealing interfaces that enhance user experience and drive engagement.`,
    techStack: ["Figma", "Adobe XD", "UX Research"],
  },
  {
    icon: <FaCode className="text-green-400 text-5xl" />,
    title: "Web Development",
    border: "border-green-500",
    color: "bg-green-500 hover:bg-green-600",
    desc: `Building responsive and scalable web applications using the latest technologies to meet your specific needs.`,
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    icon: <FaAndroid className="text-purple-400 text-5xl" />,
    title: "Android Development",
    border: "border-purple-500",
    color: "bg-purple-600 hover:bg-purple-700",
    desc: `Creating innovative and user-friendly Android applications that deliver seamless experiences on mobile devices.`,
    techStack: ["Kotlin", "Java", "Firebase"],
  },
];

const ServicesSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleClose = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  return (
    <section className="py-20 bg-gray-800" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Services
        </h2>
        <p className="text-lg text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          I transform your ideas into distinctive web projects that inspire you
          and captivate your customers.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`card text-center border-t-4 ${service.border}`}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">{service.desc}</p>
              <button
                onClick={() => handleOpen(service)}
                className={`${service.color} text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300`}
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={handleClose}
          title={selectedService.title}
          description={selectedService.desc}
          techStack={selectedService.techStack}
          color={selectedService.color}
        />
      )}
    </section>
  );
};

export default ServicesSection;
