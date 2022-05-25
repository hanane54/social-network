import styles from "./profilePic&Cover.module.css";
import cover from "../assets/cover.jpg";
import profilePicture from "../assets/profile.jpg";
import { Container, Row, Col } from "react-bootstrap";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Link } from "react-router-dom";
const ProfilePicCover = () => {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <img src={cover} alt="profile" className={styles.coverPicture} />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 1 }} style={{ marginTop: "-18px" }}>
            <img
              src={profilePicture}
              alt="profile"
              className={styles.profilePicture}
            />
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <span className={styles.userName}>John Doe</span>
            <br />
            <span className={styles.userWork}>Software Engineer</span>
          </Col>
        </Row>
        <Row className={styles.followerSection}>
          <Col md={{ span: 3, offset: 2 }} >
            <p className={styles.numberof}><strong>13k</strong></p>
            <p className={styles.follow}>followers</p>
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <p className={styles.numberof}><strong>10k</strong></p>
            <p className={styles.follow}>following</p>
          </Col>
        </Row>
        <hr className={styles.hr}/>
        <Row>
            <Col>
            <div className={styles.newPost} >
                <a href="/create-post" className={styles.placeholder}>Do you have any question John Doe?</a>
            </div>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 4, offset: 2 }}>
                <div className={styles.btn}>
                    <AddPhotoAlternateIcon/>
                    Photo
                </div>
            </Col>
            <Col md={{ span: 4, offset: 1 }}>
                <div className={styles.btn}>
                    <AttachFileIcon/> Media
                </div>
            </Col>
        </Row>
        <Row>
            <Col className={styles.editProfilBtn}>
                <Link to ="/user-settings"><button>Edit Profile</button></Link>
            </Col>
        </Row>

      </Container>
    </>
  );
};
export default ProfilePicCover;
