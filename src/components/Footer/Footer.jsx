
import PropTypes from "prop-types";

const Footer = ({ year = new Date().getFullYear(), name = "Manik Patra" }) => {
  return (
    <footer className="py-8 bg-gray-900 text-center">
      <p className="text-gray-400">
        © {year} {name}. All rights reserved.
      </p>
    </footer>
  );
};

Footer.propTypes = {
  year: PropTypes.number,
  name: PropTypes.string,
};

export default Footer;
