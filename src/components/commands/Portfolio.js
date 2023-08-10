import "../../css/command.css";
import PortfolioProject from "../PortfolioProject";
import sixfh from "../../images/6fh.png";
import gb from "../../images/gb.png";
import glh from "../../images/glh.png";
import gbd from "../../images/gbd.png";
import { ExternalLink } from "react-external-link";

const Portfolio = () => {
  const projects = {
    sixfh: {
      title: "sixfingerhand.xyz",
      url: "http://www.sixfingerhand.xyz/",
      repo: "https://github.com/Greenaustin2/sfh_mern.git",
      image: sixfh,
      alt: "six finger hand website",
      description:
        "Portfolio website for audio/visual arts collective Six Finger Hand",
      tech: "react, react-router, node.js, express, css, material ui, vercel",
    },
    gb: {
      title: "graphic-balance.tv",
      url: "https://graphic-balance-3bf05d57cb18.herokuapp.com/",
      repo: "https://github.com/Greenaustin2/graphicBalance_MERN.git",
      image: gb,
      alt: "graphic balance website",
      description:
        "An alternative streaming platform with randomly generated content",
      tech: "react, react-router, node.js, express, mongodb, css, heroku",
    },
    gbd: {
      title: "Random Youtube Downloader",
      url: "https://github.com/Greenaustin2/GB_YT_Downloader_CLI.git",
      repo: "https://github.com/Greenaustin2/GB_YT_Downloader_CLI.git",
      image: gbd,
      alt: "random youtube downloader",
      description:
        "A program designed for content collection for archivalist documentarian",
      tech: "python, youtube data api, pytube",
    },
    glh: {
      title: "Location History Visualizer",
      url: "https://github.com/Greenaustin2/google_location.git",
      repo: "https://github.com/Greenaustin2/google_location.git",
      image: glh,
      alt: "location history visualizer",
      description:
        "A program that translates location history data into a line drawing",
      tech: "python, tkinter, turtle",
    },
  };

  return (
    <div>
      <h3>Portfolio</h3>
      <br></br>

      {Object.keys(projects).map((key, i) => (
        <PortfolioProject
          title={projects[key]["title"]}
          url={projects[key]["url"]}
          repo={projects[key]["repo"]}
          image={projects[key]["image"]}
          alt={projects[key]["alt"]}
          description={projects[key]["description"]}
          tech={projects[key]["tech"]}
        />
      ))}

      {/* <ExternalLink href="http://www.sixfingerhand.xyz/">
        <span className="projectHeader">
          <b>sixfingerhand.xyz</b>
        </span>
      </ExternalLink>
      <br />
      <img
        className="portfolioScreenshot"
        src={sixfh}
        alt="six finger hand wesite"
      />
      <p>
        <em>
          Portfolio website for audio/visual arts collective Six Finger Hand
        </em>
      </p>
      <br />
      <ExternalLink href="https://github.com/Greenaustin2/sfh_mern.git">
        <span style={{ marginLeft: "20px" }}>repo</span>
      </ExternalLink>
      <hr style={{ width: "80%", marginLeft: "20px" }}></hr>

      <ExternalLink href="http://www.graphic-balance.tv/">
        <span className="projectHeader">
          <b>graphic-balance.tv</b>
        </span>
      </ExternalLink>
      <br />
      <img
        className="portfolioScreenshot"
        src={gb}
        alt="graphic balance website"
      />
      <p>
        <em>
          An alternative streaming platform with randomly generated content
        </em>
      </p>
      <br />
      <ExternalLink href="https://github.com/Greenaustin2/graphicBalance_MERN.git">
        <span style={{ marginLeft: "20px" }}>repo</span>
      </ExternalLink>
      <hr style={{ width: "80%", marginLeft: "20px" }}></hr>
      <ExternalLink href="http://www.graphic-balance.tv/">
        <span className="projectHeader">
          <b>Location History Visualizer</b>
        </span>
      </ExternalLink>
      <br />
      <img
        className="portfolioScreenshot"
        src={gb}
        alt="graphic balance website"
      />
      <p>
        <em>
          An alternative streaming platform with randomly generated content
        </em>
      </p>
      <br />
      <ExternalLink href="https://github.com/Greenaustin2/graphicBalance_MERN.git">
        <span style={{ marginLeft: "20px" }}>repo</span>
      </ExternalLink>
      <hr style={{ width: "80%", marginLeft: "20px" }}></hr>
 */}

      {/* <table>
        <tbody>
          <tr>
            <th id="italics">link</th>
            <th id="italics">description</th>
            <th id="italics">github</th>
          </tr>
          <tr>
            <td>
              <ExternalLink href="https://www.sixfingerhand.xyz">
                <span>sixfingerhand.xyz</span>
              </ExternalLink>
            </td>
            <td>
              Portfolio website for audio/visual arts collective Six Finger Hand
            </td>
            <td>
              <ExternalLink href="https://github.com/Greenaustin2/sfh_mern.git">
                <span>repo</span>
              </ExternalLink>
            </td>
          </tr>
          <tr>
            <td>
              <ExternalLink href="https://www.graphic-balance.tv">
                <span>graphic-balance.tv</span>
              </ExternalLink>
            </td>
            <td>An alternative video streaming website generated at random</td>

            <td>
              <ExternalLink href="https://github.com/Greenaustin2/graphicBalance_MERN.git">
                <span>repo</span>
              </ExternalLink>
            </td>
          </tr>
          <tr>
            <td>
              <ExternalLink href="https://www.cochran-schope.com">
                <span>cochran-schope.com</span>
              </ExternalLink>
            </td>
            <td>
              Portfolio website for California based sculptor and artist Cochran
              Schope
            </td>

            <td>
              <ExternalLink href="">
                <span>repo</span>
              </ExternalLink>
            </td>
          </tr>
          <tr>
            <td>
              <ExternalLink href="https://www.cochran-schope.com">
                <span>Location History Visualizer</span>
              </ExternalLink>
            </td>
            <td>
              Python application designed to create artistic visuals utilizing
              google location history data
            </td>

            <td>
              <ExternalLink href="www.github.com">
                <span>repo</span>
              </ExternalLink>
            </td>
          </tr>
          <tr>
            <td>
              <ExternalLink href="www.google.com">
                <span>Reading List</span>
              </ExternalLink>
            </td>
            <td>Web application to store and organize a reading list</td>

            <td>
              <ExternalLink href="www.github.com">
                <span>repo</span>
              </ExternalLink>
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default Portfolio;
