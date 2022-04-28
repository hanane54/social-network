import styles from './recentFollowersSection.module.css';
const RecentFollowers = () => {
    return <>
        <div className={styles.followersContainer}>
            <ul>
                <li>Fatima Amjad</li>
                <li>Laila Zaimi</li>
                <li>Ibrahim Sabri</li>
                <li>Soulaiman Chahid</li>
            </ul>
        </div>
    </>
}

export default RecentFollowers;