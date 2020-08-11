/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { lazy, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import {
	faMedium,
	faLinkedin,
	faGithubSquare,
	faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import particlesConf from "./particlesConf";
import ProfileLow from "./static/img/profile-low.JPG";

const Particles = lazy(() => import("react-particles-js"));
const ProfileImg = lazy(() => import("./components/ProfileImg"));

const resume = process.env.PUBLIC_URL + "/nowshad-resume.pdf";

export default function App() {
	return (
		<div className="App">
			<div className="main" id="main">
				<Suspense fallback={<img src={ProfileLow} alt="profile" />}>
					<ProfileImg />
				</Suspense>
				<h2>MD. AL-AMIN NOWSHAD</h2>
				<h4>FULL STACK JAVASCRIPT DEVELOPER</h4>
				<h5>COLOGNE, GERMANY</h5>
				<div className="social">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/al-aminnowshad"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://medium.com/@iamnowshad"
					>
						<FontAwesomeIcon icon={faMedium} />
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.youtube.com/channel/UC3PPNB_VsG7-NO42mgdrbbA"
					>
						<FontAwesomeIcon icon={faYoutubeSquare} />
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/nowshad-sust"
					>
						<FontAwesomeIcon icon={faGithubSquare} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href={resume}>
						<FontAwesomeIcon icon={faAddressCard} />
					</a>
				</div>
			</div>
			<Suspense fallback="Loading...">
				<Particles id="background" params={particlesConf} />
			</Suspense>
		</div>
	);
}
