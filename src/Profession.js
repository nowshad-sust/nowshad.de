import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import {
  faMediumM,
  faLinkedinIn,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const resume = process.env.PUBLIC_URL + "/nowshad-resume.pdf";

const Profession = () => {
  return (
    <div className="profession">
      <h2>MD. AL-AMIN NOWSHAD</h2>
      <h4>SOFTWARE ENGINEER (FRONTEND FOCUS)</h4>
      <h5>BERLIN, GERMANY</h5>
      <div className="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/al-aminnowshad"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@iamnowshad"
        >
          <FontAwesomeIcon icon={faMediumM} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UC3PPNB_VsG7-NO42mgdrbbA"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nowshad-sust"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={resume}>
          <FontAwesomeIcon icon={faAddressCard} />
        </a>
      </div>
    </div>
  );
};

export default Profession;
