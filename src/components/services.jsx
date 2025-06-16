import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

const services = [
  {
    icon: <FaPaintBrush className="text-purple-400 text-5xl" />,
    title: "UI/UX Design",
    text_color:"text-white",
    color: "border-purple-500",
    buttonColor: "bg-purple-500",
  },
  {
    icon: <FaCode className="text-green-400 text-5xl" />,
    title: "Web Development",
    text_color:"text-white",
    color: "border-green-500",
    buttonColor: "bg-green-500",
  },
  {
    icon: <FaAndroid className="text-purple-400 text-5xl" />,
    title: "Android Development",
    text_color:"text-white",
    color: "border-purple-500",
    buttonColor: "bg-purple-500",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20 text-center">
      <h2 className="text-4xl font-bold text-purple-400">Services</h2>
      <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
        I transform your ideas, and consequently your desires, into a distinctive web project that both inspires you and captivates your customers.
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gray-900 p-6 rounded-lg shadow-lg border ${service.text_color} relative w-full md:w-1/3 hover:shadow-${service.color.replace("border-", "")} transition-shadow duration-300`}
          >
            <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-10 h-1 ${service.color}`}></div>
            <div className="flex justify-center">{service.icon}</div>
            <h3 className={`text-xl font-semibold mt-4 ${service.color}`}>
              {service.title}
            </h3>
            <p className="text-gray-400 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente optio rerum sequi!
            </p>
            <div className="mt-4 flex justify-center">
              <button className={`text-white py-2 px-4 rounded-lg ${service.buttonColor}`}>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
