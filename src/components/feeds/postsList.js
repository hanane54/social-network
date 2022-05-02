import PostsData from "./postsData";
import Post from "./post";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  post:{
    marginTop:'8px',
    borderRadius:'20px',
    padding:'10px',
    backgroundColor:'white',
    textAlign:'justify',
    textJustify:'inter-word',
    marginBottom:'10px',
  }
}));

const PostsList = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.postsContainer}>
        {PostsData.map((post, key) => {
          return (
            <div className={classes.post} key={key}>
              <Post
                postId={post.postId}
                postUser={post.postUser}
                userImage={post.userImage}
                userJob={post.userJob}
                relativeTime={post.relativeTime}
                question={post.question}
                article={post.article}
                commentsCounter={post.commentsCounter}
                likesCounter={post.likesCounter}
                postImage={post.postImage}
                liked={post.liked}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostsList;
