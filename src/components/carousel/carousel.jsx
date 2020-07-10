import React from 'react';
import styles from './carousel.module.css';

export default function Carousel() {
const { header, darkSkin, introText, introLeadIn, introHeading }=styles;
	return (
	<section className={header} id="carousel">
		<div className={darkSkin} />
		<div className="container">
			<div className={introText}>
				<div className={introLeadIn}>Welcome To My Home!</div>
				<div className={introHeading}>
				5D-AGRISOLUTIONS
      </div>
			</div>
		</div>
	</section>


	);
}
