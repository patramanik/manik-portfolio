import PropTypes from 'prop-types';

const GlowingImage = ({ src, alt }) => {
  return (
    <div className="relative inline-flex items-center justify-center group">
      <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-full blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
      <img 
        src={src}
        alt={alt}
        className="relative w-50 h-50 rounded-full"
      />
    </div>
  );
};

GlowingImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default GlowingImage;
