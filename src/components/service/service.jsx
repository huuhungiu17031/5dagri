import React, { Component } from 'react'
import styles from './service.module.css'
export default class Service extends Component {
    render() {
        return (
            <section className={styles.page_section} id="services">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h2 className={styles.section_heading}>DỊCH VỤ</h2>
                            <h3 className={styles.section_subheading}>Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-success"></i>
                                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className={styles.service_heading}>Nông nghiệp</h4>
                            <p className="text-muted">Cung cấp dịch vụ tư vấn và lắp đặt hệ thống nhà màng trồng cây tự động, hệ thống trồng nấm phun sương nano.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-success"></i>
                                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className={styles.service_heading}>Nuôi trồng thủy sản</h4>
                            <p className="text-muted">Cung cấp dịch vụ tư vấn, thiết kế và lắp đặt hệ thống lọc kiểm soát chất lượng nước nuôi trồng thủy sản.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-success"></i>
                                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className={styles.service_heading}>Chăn nuôi</h4>
                            <p className="text-muted">Cung cấp dịch vụ tư vấn và thiết kế hệ thống kiểm soát chăn nuôi tự động.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
