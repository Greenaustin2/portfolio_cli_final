import "../../css/social.css";
import { ExternalLink } from "react-external-link";
import instagram from "../../images/icons/instagram.png";
import spotify from "../../images/icons/spotify.png";
import github from "../../images/icons/github.png";
import linkedIn from "../../images/icons/linkedIn.png";

const Social = () => {
  return (
    <div className="command">
      {/* <h3>Social</h3> */}
      <div className="socialContainer">
        <ExternalLink href="https://github.com/Greenaustin2">
          <img src={github} alt="instagram logo" className="socialImage" />{" "}
        </ExternalLink>
        <br />
        <ExternalLink href="https://www.linkedin.com/in/austin--green/">
          <img src={linkedIn} alt="instagram logo" className="socialImage" />{" "}
        </ExternalLink>
        <br />
        <ExternalLink href="https://www.instagram.com/a____green/">
          <img src={instagram} alt="instagram logo" className="socialImage" />
        </ExternalLink>
        <br />
        <ExternalLink href="https://open.spotify.com/user/1248693798?si=32a17289121f4d22">
          <img src={spotify} alt="spotify logo" className="socialImage" />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Social;
