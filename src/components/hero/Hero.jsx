import { FaAngleRight } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="h-wrapper">
      <article className="flexColStart innerWidth paddings h-container">
        <div className="flexColStart h-text">
          <h2>Neque porro</h2>
          <h3 className="orangeText">quisquam est</h3>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al
          </p>
        </div>
        <div className="flexStart innerWidth buttons">
          <button className="flexCenter primaryButton">
            <span>Lorem ipsum</span>
            <FaAngleRight />
          </button>
          <button className="flexCenter secondaryButton">
            <span>Lorem ipsum</span>
            <FaAngleRight />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Hero;
