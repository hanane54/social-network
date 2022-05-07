import styles from "./userSettingsForm.module.css";
import Image from "react-bootstrap/Image";
import userImg from "../assets/profile.jpg";

const UserSettingsForm = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <h3>Settings</h3>
        <form>
          <h5>Profile</h5>
          <span className={styles.explain}>
            This information will be displayed publicly, so be carefull what you
            share.
          </span>
          <div className={styles.name}>
            <div className={styles.Fname}>
              <label htmlFor="Fname">First Name</label>
              <input type="text" name="Fname"></input>
            </div>
            <div className={styles.Lname}>
              <label htmlFor="Lname">Last Name</label>
              <input type="text" name="Lname"></input>
            </div>
          </div>
          <div className={styles.chngPic}>
            <label htmlFor="changeOrDelete">Photo</label>
            <div className={styles.profilePic}>
              <Image src={userImg} roundedCircle className={styles.userImage} />
              <div className={styles.profileImgBtns}>
                <button name="changeOrDelete">Change</button>
                <button name="changeOrDelete">Delete</button>
              </div>
            </div>
          </div>
          <div className={styles.aboutMe}>
            <label htmlFor="aboutMe">About your self</label>
            <br />
            <textarea name="aboutMe" rows="4" cols="50"></textarea>
          </div>
          <hr />
          <h5>Personal Information</h5>
          <span className={styles.explain}>
            This information will be displayed publicly, so be carefull what you
            share.
          </span>
          <div className={styles.row}>
            <div className={styles.singleInput}>
              <label htmlFor="email">Email Adress</label>
              <input type="email" name="email"></input>
            </div>
            <div className={styles.singleInput}>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone"></input>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.singleInput}>
              <label htmlFor="country">Country</label>
              <input type="text" name="country"></input>
            </div>
            <div className={styles.singleInput}>
              <label htmlFor="language">Language</label>
              <input type="text" name="language"></input>
            </div>
          </div>
          <hr />
          <h5>Password</h5>
          <div className={styles.password}>
            <label htmlFor="password">Current Password</label>
            <input type="password" name="password"></input>
          </div>
          <div className={styles.row}>
            <div className={styles.singleInput}>
              <label htmlFor="newPassword">New Password</label>
              <input type="password" name="newPassword"></input>
            </div>
            <div className={styles.singleInput}>
              <label htmlFor="confirmNew">Confirm New Password</label>
              <input type="password" name="confirmNew"></input>
            </div>
          </div>
          <div className={styles.btns}>
            <button>Cancel</button>
            <button type="submit" id={styles.submit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default UserSettingsForm;
