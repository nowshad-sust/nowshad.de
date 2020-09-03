import React, { lazy, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import {
	faMedium,
	faLinkedin,
	faGithubSquare,
	faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

import particlesConf from "./particlesConf";
import ProfileImgLow from "./static/img/profile-low.JPG";
import ProfileImgHQ from "./static/img/profile-hq.JPG";

const Particles = lazy(() => import("react-tsparticles"));

const resume = process.env.PUBLIC_URL + "/nowshad-resume.pdf";

export default function App() {
	return (
		<div className="App">
			<div className="main" id="main">
				<LazyLoadImage
					className="image-container"
					alt="profile img"
					src={ProfileImgHQ}
					placeholderSrc={ProfileImgLow} // use normal <img> attributes as props
				/>
				<h2>MD. AL-AMIN NOWSHAD</h2>
				<h4>SOFTWARE ENGINEER (FRONTEND FOCUS)</h4>
				<h5>BERLIN, GERMANY</h5>
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
				<Particles id="background" options={particlesConf} />
			</Suspense>
		</div>
	);
}
