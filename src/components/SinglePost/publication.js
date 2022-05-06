import styles from "./publication.module.css";
import Image from "react-bootstrap/Image";
import PostsData from "../posts/postsData";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import Comments from './Comments'

const Publication = (props) => {
  return (
    <>
      <div className={styles.postWrapper}>
        <div className={styles.postHeader}>
          <div className={styles.postUserInfo}>
            <Image
              src={PostsData[0].userImage}
              rounded
              className={styles.userImage}
            />
            <div>
              <span>
                <b>
                  <a href="#">{PostsData[0].postUser}</a>
                </b>
              </span>
              <p>{PostsData[0].userJob}</p>
            </div>
          </div>
          <div>
            <p>{PostsData[0].relativeTime} ago</p>
          </div>
        </div>
        <span className={styles.postQuestion}>
          <b> {PostsData[0].question}</b>
        </span>
        <div className={styles.article}>
          {PostsData[0].article}
          <Image src={PostsData[0].postImage} className={styles.postImage} />
        </div>

        <div className={styles.iconsContainer}>
          <div>
            <a href="#"><FavoriteIcon /></a>
            <span>{PostsData[0].likesCounter} likes</span>
          </div>
          <div>
            <CommentIcon/>
            <span>{PostsData[0].commentsCounter} comments</span>
          </div>
        </div>

        <hr className={styles.hrLine}/>

        <div className={styles.newComment}>
          <form>
            <input type="text" placeholder="Write a comment ..." className={styles.commentInput}/>
            <button type="submit" className={styles.commentBtn}>Comment</button>
          </form>
        </div>
        <Comments />
      </div>
    </>
  );
};

export default Publication;
