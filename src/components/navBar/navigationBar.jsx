import React, { Component } from 'react';
import styles from './navbar.module.css';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import cx from 'classnames'
export default class NavigationBar extends Component {
	constructor() {
		super();
		this.state = {
			scrolled: false,
			clicked: false,
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', () => {
			const isTop = window.scrollY < 100;
			if (isTop !== true) {
				this.setState({ scrolled: true });
			} else {
				this.setState({ scrolled: false });
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('scroll');
	}
	handleOnClick = () => {
		const { clicked } = this.state;
		this.setState({ clicked: !clicked })
	}

	render() {
		const { scrolled, clicked } = this.state;
		const { navbar, scrolled_Nav, brandTitle, active, navbarLinks, borderToggle, toggle, toggleButton, line1, line2, line3 } = styles;
		return (
			<nav
				className={scrolled ? cx(navbar, scrolled_Nav) : navbar}>
				<div className={brandTitle}>
					<img src={require('../../img/MainLogo.png')} alt="logo" />
				</div>
				<ul className={clicked ? cx(active, navbarLinks) : navbarLinks} >

					<li>
						<Link
							activeClass='active'
							to='carousel'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							>
							Trang chủ
					</Link>
					</li>

					<li>
						<Link
							activeClass='active'
							to='services'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							>
							Dịch vụ
					</Link>

					</li>

					<li>
						<Link
							activeClass='active'
							to='product'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							>
							Sản phẩm
						</Link>
					</li>

					<li>
					<Link
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							>
							Giới thiệu
						</Link>
					</li>

					<li>
					<Link
							activeClass='active'
							to='contact'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							>
							Liên hệ
						</Link>
					</li>
					<li>
						<Link to='/contact'>Download</Link>
					</li>

				</ul>

				<div
					className={clicked ? cx(toggleButton, borderToggle, toggle) : toggleButton}
					onClick={() => { this.handleOnClick() }}>
					<div className={line1}></div>
					<div className={line2}></div>
					<div className={line3}></div>
				</div>
			</nav>

		);
	}
}

