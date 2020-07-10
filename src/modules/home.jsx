import React from 'react';
import Service from '../components/service/service';
import Product from '../components/product/product';
import AboutUs from '../components/aboutUs/aboutUs';

export default function Home() {
	return (
		<div className="Home">
			<div>
				<Service/>
				<Product/>
				<AboutUs/>
            </div>
		</div>
	);
}
