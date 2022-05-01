import styles from "./postsList.module.css";
import PostsData from "./postsData";
import Post from "./post";

const PostsList = () => {
  return (
    <>
      <div className={styles.postsContainer}>
        {PostsData.map((post, key) => {
          return (
            <div className={styles.post} key={key}>
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
