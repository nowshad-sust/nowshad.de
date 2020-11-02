import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMediumM,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Person = () => {
  return (
    <div className="person">
      <h2>My goal for now</h2>
      <h3>Is to visit Norway to watch aurora borealis.</h3>

      <div className="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/nowshad.de/"
        >
          <FontAwesomeIcon icon={faInstagram} color="white" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/tripsharebd"
        >
          <FontAwesomeIcon icon={faMediumM} color="white" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCsO3ox8-C-wkl61zaIEWMfw"
        >
          <FontAwesomeIcon icon={faYoutube} color="white" />
        </a>
      </div>
      <span>
        Photo:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/photos/BIzowjmRc_g"
        >
          Luke Stackpoole
        </a>
      </span>
    </div>
  );
};

export default Person;
