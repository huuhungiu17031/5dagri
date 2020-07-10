import React, { Component } from 'react';
import styles from './footer.module.css'
export default class Footer extends Component {
	render() {
		return (
			<footer className={styles.footer} id='contact'>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-xs-12">
							<div classname={styles.footer_left}>
								<h5>Thông Tin Liên Hệ</h5>
								<div className="text-muted">Địa Chỉ: Phòng 5, Nhà 5, đường số 13, khu công viên phần mềm Quang Trung, phường Tân Chánh Hiệp, quận 12, TP.HCM</div>
								<div className="text-muted">Số Điện Thoại: 0906678340</div>
								<div className="text-muted"> E-mail: contact@5d-agrisolutions.com</div>
							</div>
						</div>
						<div className="col-lg-6 col-xs-12">
							<div classname={styles.footer_right}>
								<a className={styles.footer_link} href="https://www.facebook.com/">
									<i className="fab fa-facebook fa-3x" />
								</a>
								<a className={styles.footer_link} href="https://www.google.com/">
									<i className="fab fa-google-plus fa-3x" />
								</a>
								<a className={styles.footer_link} href="https://github.com/">
									<i className="fab fa-github fa-3x" />
								</a>
							</div>
						</div>
						<div className="col-md-12">
							<div classname={styles.footer_end}>
								<span className="copyright">Copyright © Your Website 2020</span>
							</div>
						</div>
					</div>
				</div>
			</footer>

		);
	}
}
