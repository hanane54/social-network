import styles from "./createPostForm.module.css";
import Image from "react-bootstrap/Image";
import userImg from "../assets/profile.jpg";

const CreatePostForm = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.userSection}>
          <Image src={userImg} roundedCircle className={styles.userImage} />
          <span>John Doe</span>
        </div>
        <form className={styles.form}>
          <div className={styles.singleInput}>
            <label for="question">Your question</label>
            <br />
            <input
              type="text"
              name="Postquestion"
              className={styles.question}
              id="question"
            ></input>
            <br />
          </div>
          <div className={styles.singleInput}>
            <label for="article">Your article</label>
            <br />
            <textarea id="article" 
            className={styles.articleText}
            name="article" rows="4" cols="50"></textarea>
            <br />
          </div>
          <div className={styles.singleInput}>
            <label for="postImg">Add a picture</label>
            <br />
            <input 
            type="file" name="postImg" value="" id="postImg"
            className={styles.fileInput} ></input>
            <br />
          </div>
          <div className={styles.singleInput}>
            <label for="">Publication category</label>
            <br />
            <div className={styles.radioBtns}>
              <label>
                <input type="radio" name="radio" />
                <span>Technology</span>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span>Science</span>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span>education</span>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span>Cooking</span>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span>Fashion</span>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span>Free Category</span>
              </label>
              <br />
            </div>
          </div>
          <div className={styles.singleInput}>
            <label for="">Set your post to public</label>
            <br />
            <span className={styles.explain}>
              If you set your publication to public, it means that anyone on{" "}
              <b>logo name</b> can see it
            </span>
            <br />
            <input name="" value=""></input>
            <br />
          </div>

          <button>Cancel</button>
          <button>Publish</button>
        </form>
      </div>
    </>
  );
};
export default CreatePostForm;
