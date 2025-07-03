// import { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import PropTypes from "prop-types";
import BiologyLerner from "../../assets/image/BiologyLerner.jpg";
import ShopCart from "../../assets/image/shopCart/shopCart.png"
// import image_0 from "../../assets/image/image_0.jpg";
// import image_1 from "../../assets/image/image_1.jpg";
// import image_2 from "../../assets/image/image_2.jpg";
// import image_3 from "../../assets/image/image_3.jpg";
// import image_4 from "../../assets/image/image_4.jpg";
// import image_5 from "../../assets/image/image_5.jpg";

/* -------------------------------------------------------------------------- */
/* 1. Dummy data                                                               */
/* -------------------------------------------------------------------------- */

const projects = [
  {
    title: "BiologyLerner App",
    shortDescription:
      "Developed a sleek, responsive UI with content‑control features and integrated RESTful APIs using Dio.",
    image: BiologyLerner,
    description: "",
    images: [],
    tags: ["Flutter", "AdMob", "Firebase", "Laravel"],
    colors: ["bg-blue-400", "bg-red-400", "bg-yellow-500", "bg-red-400"],
    isLive: true,
    liveLink: "https://play.google.com/store/apps/details?id=com.biologylearner.biology_learner_app&hl=en",
    github: "",
  },
  {
    title: "ShopCart E-commerce Platform",
    shortDescription:
      "Built a responsive web and mobile UI with Tailwind CSS, including a role-based dashboard for product management and user-focused features like wishlist, cart, and product browsing.",
    image:ShopCart,
    images: [],
    tags: ["Java", "Hibernate","JSP","Servlet","Mysql"],
    colors: ["bg-red-500", "bg-stone-500","bg-orange-400","bg-blue-500","bg-gray-500"],
    isLive: false,
    liveLink: "https://github.com/patramanik/shopcart",
    github: "",
  },
  {
    title: "Vendor24 - Service Listing Platform API",
    shortDescription:
      "Developed RESTful APIs using MVC with JWT-based role authentication, secure Email OTP forpassword recovery, user detail management, and dynamic service categories for vendor service listing and management.",
    image:
      "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4085508%2Fcover_image%2Fregular_1708x683%2Fcover-secure-rest-api-in-nodejs-80fb5c435d64e62d270b46dc5618d74e.png",
    images: [],
    tags: ["NodeJs", "Express","JWT","MongoDB","Cloudinary"],
    colors: ["bg-red-500", "bg-purple-500","bg-yellow-500","bg-green-500",],
    isLive: false,
    liveLink: "",
    github: "",
  },
];

/* -------------------------------------------------------------------------- */
/* 2. Presentational card                                                      */
/* -------------------------------------------------------------------------- */

const ProjectCard = ({ project, }) => {
  const { title, shortDescription, image, tags, colors,liveLink } = project;

  return (
    <div className="card bg-gray-700 p-4 rounded-lg shadow-lg">
      <img
        alt={title}
        src={image}
        className="rounded-lg mb-4 w-full h-48 object-full"
      />

      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>

      <p className="text-gray-400 mb-4">{shortDescription}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`${colors[i % colors.length]} text-xs text-white px-2 py-1 rounded-full`}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={liveLink}
        target="_blank"
        className="inline-flex mt-4 text-purple-400 hover:text-purple-300 font-semibold items-center"
      >
        View Project <MdArrowForward className="text-sm ml-1" />
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
};

/* -------------------------------------------------------------------------- */
/* 3. Simple modal                                                             */
/* -------------------------------------------------------------------------- */

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
      <div className="relative w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>

        <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>

        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg mb-4 w-full object-cover"
        />

        {project.description && (
          <p className="text-gray-300 mb-4">{project.description}</p>
        )}

        {project.images?.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title}-${i}`}
                className="rounded object-cover"
              />
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`${project.colors[i % project.colors.length]} text-xs text-white px-2 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.object,
};

/* -------------------------------------------------------------------------- */
/* 4. Section with modal logic                                                 */
/* -------------------------------------------------------------------------- */

const ProjectsSection = () => {
  // const [selectedProject, setSelectedProject] = useState(null);

  // const handleOpen = (project) => setSelectedProject(project);
  // const handleClose = () => setSelectedProject(null);

  return (
    <section className="py-20 bg-gray-800" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
          // <ProjectCard key={p.title} project={p} onOpen={handleOpen} />
          ))}
        </div>
      </div>

      {/* <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleClose}
        project={selectedProject}
      /> */}
    </section>
  );
};

export default ProjectsSection;
