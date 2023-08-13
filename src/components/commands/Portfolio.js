import "../../css/command.css";
import PortfolioProject from "../PortfolioProject";
import sixfh from "../../images/6fh.png";
import gb from "../../images/gb.png";
import glh from "../../images/glh.png";
import gbd from "../../images/gbd.png";
import { ExternalLink } from "react-external-link";

const Portfolio = () => {
  //Projects Object
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
      url: "http://www.graphic-balance.com/",
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
    </div>
  );
};

export default Portfolio;
