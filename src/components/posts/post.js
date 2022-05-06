import styles from "./post.module.css";
import Image from "react-bootstrap/Image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from "react";

const ShowMore = ({ children }) => {
  const text = children;
  const [isShowMore, setIsShowMore] = useState(true);
  const toggleShowMore = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <p className={styles.text}>
      {isShowMore ? text.slice(0, 150) : text}
      <span onClick={toggleShowMore} className={styles.showOrHide}>
        {isShowMore ? "...show more" : " show less"}
      </span>
    </p>
  );
};

const Post = (props) => {
  return (
    <>
      <div className={styles.postHeader}>
        <div className={styles.postUserInfo}>
          <Image src={props.userImage} rounded className={styles.userImage} />
          <div>
            <span>
              <b>
                <a href="#">{props.postUser}</a>
              </b>
            </span>
            <p>{props.userJob}</p>
          </div>
        </div>
        <div>
          <p>{props.relativeTime} ago</p>
        </div>
      </div>
      <span className={styles.postQuestion}>
        <b> {props.question}</b>
      </span>
      <div className={styles.article}>
        <ShowMore>{props.article}</ShowMore>
        <Image src={props.postImage} className={styles.postImage} />
      </div>
      <div className={styles.commentSection}>
        <FavoriteIcon className={styles.heartIcon} />
        <div className={styles.newComment}>
            <a href="#">Write a comment ... </a>
        </div>
        <div style={{textAlign:'center'}}>
            <span><a href="#">{props.commentsCounter} comments</a></span><br/>
            <CommentIcon/>
        </div>
        <div style={{textAlign:'center'}}>
            <span><a href="#">{props.likesCounter} likes</a></span><br/>
            <FavoriteIcon/>
        </div>
      </div>
    </>
  );
};
export default Post;
