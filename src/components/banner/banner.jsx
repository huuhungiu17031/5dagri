import React from 'react';
import styles from './banner.module.css';
export default function Banner() {
	return (
		<div className={styles.Banner}>
			<div className="container">
				<div className="row">
					<div className="col-3 col-md-3">
						<div className={styles.imageHover}>
							<img className='img-fluid' src={require('../../image/p1.jpg')} alt="" />
						</div>
					</div>
					<div className="col-3 col-md-3">
						<div className={styles.imageHover}>
							<img className='img-fluid' src={require('../../image/p2.jpg')} alt="" />
						</div>
					</div>
					<div className="col-3 col-md-3">
						<div className={styles.imageHover}>
							<img className='img-fluid' src={require('../../image/nhamanglon3.jpg')} alt="" />
						</div>
					</div>
					<div className="col-3 col-md-3">
						<div className={styles.imageHover}>
							<img className='img-fluid' src={require('../../image/nhamanglon4.jpg')} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
