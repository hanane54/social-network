import ProfilePicCover from "./profilePic&Cover";
import styles from "./profileSectionContainer.module.css";

const ProfileSectionContainer = () => {
  return <>
    <div className={styles.sectionContainer}>
        <ProfilePicCover/>
    </div>
  </>;
};

export default ProfileSectionContainer;
