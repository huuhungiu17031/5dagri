import React from 'react'
import styles from './productElement.module.css'
export default function ProductElement() {
    return (
        <div className="col-md-4 col-sm-6 ">
            <a className={styles.product_link} href="./product-detail.html">
                <img className={styles.product_image} src={require("../../img/home-page/home-farm.JPG")} alt="" />
            </a>
            <div className={styles.product_caption}>
                <h4>Product 1</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni.</p>
                <a className="btn btn-success btn-xl js-scroll-trigger" href="./product-detail.html">Read More</a>
            </div>
        </div>

    )
}
