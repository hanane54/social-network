import { makeStyles } from "@material-ui/core";
import { Image } from "react-bootstrap";
import CommentsData from "./commentsData";

const useStyles = makeStyles((theme) => ({
  comment: {
    display: "flex",
    margin: "10px",
    fontFamily: "karla",
  },
  commenterImage: {
    width: "70px",
    height: "70px",
    borderRadius: "20px",
    objectFit: "cover",
    marginRight: "10px",
    border: "1px solid var(--fourth-color)",
  },
  infoSection: {
    backgroundColor: "var(--second-color)",
    width: "100%",
    padding: "7px",
    borderRadius: "20px",
    color: "var(--first-color)",
  },
  userName: {
    color: "black !important",
    lineHeight: "normal",
  },
  commentText: {
    padding: "5px",
  },
}));

const Comments = () => {
  const classes = useStyles();
  return (
    <>
      {CommentsData.map((comment, key) => {
        return (
          <div className={classes.comment} key={key}>
            <Image
              src={comment.commenterImage}
              className={classes.commenterImage}
            />
            <div className={classes.infoSection}>
              <span className={classes.userName}>{comment.commenterName}</span>{" "}
              <br />
              <span>{comment.relativeTime} ago</span>
              <div className={classes.commentText}>{comment.comment}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
