import styles from "./profilePic&Cover.module.css";
import cover from '../assets/cover.jpg'
const ProfilePicCover = () => {
  return <>
    <div>
    <img
                src={cover}
                alt="profile"
                className={styles.coverPicture}
              />
    </div>
    
  </>;
};
export default ProfilePicCover;
