
import { MdArrowForward } from "react-icons/md";
import PropTypes from 'prop-types';

const projects = [
  {
    title: "Project Title 1",
    description: "Short description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4ROTBcqn7i_R4TGbR35vpwXvfsrwUnVa_gcYT9voqNoAZ1BRRqHkz4EmVetvuG-FsFS0epr5cPNh46Ysz_hWS58SKlKBBEbC_cPvk6HwJcLe7Eoliv5gLEeH0f4nKARpLRUqaBth2hhCHKgLu7XQOyuBIv6I-rXV8AeueyOAZsQ3YtrppZxMuuY9RpJx0bFBGishbv4KwBCyh61C-keh0xFK9tIGq2e0cXSUI2XWoQJ7zqJcWtsiLU_St7v_1SsZqYLuC6uYnpK4",
    tags: ["React", "Node.js"],
    colors: ["bg-purple-500", "bg-green-500"],
  },
  {
    title: "Project Title 2",
    description: "Short description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfJsoAOKNz0nHZb4siM4kyqARxALl7Aivi1kWwl-hW8LHZPRUhO-_7gLuFFXYlxwSe4F2WEArVXb-FSDiNTzZ-jQNk5zJHfIyblQM0JsG2-uf12IIXsKDo-kcx81daSMP4ZPO_DfYmXwcGAHoX6GBy8IxZ72Y23mpy_k9zE43GDqBnZGps37GlWUtinll_NxqI511W0DZ9uN1v7sKZd-3Dqc_6odVkWJNqNA1zh2N3DilHoNCgkLy4NG4OFBatEwuPRIEFdfb6xr8",
    tags: ["Python", "Flask"],
    colors: ["bg-yellow-500", "bg-blue-500"],
  },
  {
    title: "Project Title 3",
    description: "Short description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1BuTjDtL2IVm5FwDCyZoeDf6gUeyjp-NCLjrjunC-_F3MoJQ05cpPj7rkKM1R1grNHTX6AT-l9vaYjKEltKjlz-XSQQNGwKlFiuAwQjdaPkz4pf_pYPeNZ9HdcLrUkC-hA1v5zPWB88SKMJG9pMHc7J4TjsS7eAW4mFIR8dAuz3oi5FD0o_f7wFA2YLEp6lrxT1mlPyUT_ltMT40ECPnqLaZWkjQLAc2XFL1dbgmQ0dzt5RTHEdeyUp06mVXNSYUKXkvzQy1E6RA",
    tags: ["Angular", "Firebase"],
    colors: ["bg-red-500", "bg-purple-500"],
  },
];

const ProjectCard = ({ title, description, image, tags, colors }) => (
  <div className="card bg-gray-700 p-4 rounded-lg shadow-lg">
    <img
      alt={title}
      src={image}
      className="rounded-lg mb-4 w-full h-48 object-cover"
    />
    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`${colors[index % colors.length]} text-xs text-white px-2 py-1 rounded-full`}
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href="#"
      className="inline-flex mt-4 text-purple-400 hover:text-purple-300 font-semibold items-center"
    >
      View Project <MdArrowForward className="text-sm ml-1" />
    </a>
  </div>
);

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gray-800" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
