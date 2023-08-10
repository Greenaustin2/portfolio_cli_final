import "../../css/command.css";
import "../../css/about.css";
import portrait from "../../images/portrait.png";
import Social from "./Social";

const About = () => {
  return (
    <div className="command">
      <h3>About</h3>
      <div className="aboutGrid">
        <div className="aboutLeft">
          <p>
            I am <em style={{ color: "#00eeff" }}>Austin Machin Green</em>, a
            full-stack <b>web developer</b> and <b>programmer</b> based in NYC.
            <br />
            <br />
            After an arduos career in the culinary industry, I have since
            translated my acquired skills and disciplines to the digital realm.
            Organization, efficiency, optimization, creative problem solving,
            and persistance are but a few of my strengths and skills that I
            implement while writing code on a daily basis.
            <br />
            <br />
            Outside of programming, I enjoy experimenting with fermentation,
            frequenting jazz clubs in the village, sonic exploration with
            synthesizers, documentary film, and exploring New York City by bike.
          </p>
          <Social />
        </div>
        <div className="aboutRight">
          <img src={portrait} alt="self portrait" className="selfPortrait" />
        </div>

        <pre></pre>
      </div>
    </div>
  );
};

export default About;
