import React from 'react';
import styles from './aboutUs.module.css';
import AboutUsElement from '../aboutUsElement/aboutUsElement';
export default function AboutUs() {
	return (

		<section className={styles.about_content}  id="about">
			<div className="dark-skin" />
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className={styles.section_heading}>GIỚI THIỆU</h2>
						<h3 className={styles.section_subheading}>Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-5">
						<img className="img-fluid" src={require("../../img/home-page/home-farm.JPG")} alt='' />
					</div>
					<div className="col-lg-7 ">
						<div className="row">
							<AboutUsElement />
							<AboutUsElement />
							<AboutUsElement />
							<AboutUsElement />
						</div>
					</div>
				</div>
			</div>
		</section>


	);
}
