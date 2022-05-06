import React from "react";
import { Col, Row } from "react-bootstrap";
import cover from "../assets/cover.jpg";
import profile from "../assets/profile.jpg"
import styles from "./UserInfoSection.module.css";



function UserInfoSection() {

    return <div className={styles.container}>
        <img className={styles.cover} src={cover} alt="" />
        <img className={styles.profile} src={profile} alt="" />
        <p className={styles.date}> Joined March 2022</p>
        <Row>
            <Col md={{ span: 1, offset: 1 }}>
                <p className={styles.number}><strong>15K</strong></p>
                <p className={styles.nbrof}>Followers</p>
            </Col>
            <Col md={{ span: 1, offset: 1 }}>
                <p className={styles.number}><strong>1OK</strong></p>
                <p className={styles.nbrof}>Followings</p>

            </Col>
        </Row>
        <div className={styles.wrapper}>
            <h1 className={styles.name}>John Doe</h1>
            <p className={styles.descp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
}
export default UserInfoSection;