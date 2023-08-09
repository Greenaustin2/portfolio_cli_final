import { ExternalLink } from "react-external-link";
import "../css/command.css";

const PortfolioProject = ({
  title,
  image,
  url,
  repo,
  alt,
  description,
  tech,
}) => {
  return (
    <>
      <ExternalLink href={url}>
        <h3 className="projectHeader">
          <b>{title}</b>
        </h3>
      </ExternalLink>
      <br />
      <ExternalLink href={url}>
        <img className="portfolioScreenshot" src={image} alt={alt} />
      </ExternalLink>
      <p>{description}</p>
      <br />
      <p>
        <em>tech stack: {tech}</em>
      </p>
      <br />
      <ExternalLink href={repo}>
        <span style={{ marginLeft: "20px" }}>github repo</span>
      </ExternalLink>
      <hr style={{ width: "80%", marginLeft: "20px" }}></hr>
    </>
  );
};

export default PortfolioProject;
