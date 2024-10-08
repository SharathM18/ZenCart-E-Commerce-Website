import { Link } from "react-router-dom";

import "./HeroSection.css";

const HeroSection = ({ title, subtitle, link, image }) => {
  return (
    <>
      <section className="hero_section">
        <div className="hero_content">
          <h2 className="hero_title">{title}</h2>
          <p className="hero_subtitle">{subtitle}</p>

          <Link to={link} className="hero_link">
            Buy Now
          </Link>
        </div>
        <div className="hero_image">
          <img src={image} alt={title} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
