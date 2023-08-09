import "../../css/command.css";
import portrait from "../../images/portrait.png";

const About = () => {
  return (
    <div className="command">
      <h3>About</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2",
          gridTemplateRows: "1",
          width: "80%",
        }}
      >
        <div
          style={{ gridColumn: 1, gridRow: 1, width: "80%", margin: "auto 0" }}
        >
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
        </div>
        <div style={{ gridColumn: "1fr 1fr", gridRow: 1 }}>
          <img src={portrait} alt="self portrait" style={{ width: "80%" }} />
        </div>

        {/* prettier-ignore */}

        <pre>
                                                                                                                                                                                                                                                 
      </pre>
      </div>
    </div>
  );
};

export default About;
