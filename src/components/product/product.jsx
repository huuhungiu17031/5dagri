import React, { Component } from 'react'
import styles from './product.module.css'
import ProductElement from '../productElement/productElement'
export default class Product extends Component {
    render() {
        return (
            <section className={styles.page_section} id="product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className={styles.section_heading}>SẢN PHẨM</h2>
                            <h3 className={styles.section_subheading}>Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                            <ProductElement/>
                            <ProductElement/>
                            <ProductElement/>
                            <ProductElement/>
                            <ProductElement/>
                            <ProductElement/>
                    </div>
                </div>
            </section>

        )
    }
}
