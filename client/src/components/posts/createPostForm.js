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
            <label htmlFor="question">Your question</label>
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
            <label htmlFor="article">Your article</label>
            <br />
            <textarea
              id="article"
              className={styles.articleText}
              name="article"
              rows="4"
              cols="50"
            ></textarea>
            <br />
          </div>
          <div className={styles.singleInput}>
            <label htmlFor="postImg">Add a picture</label>
            <br />
            <input
              type="file"
              name="postImg"
              value=""
              id="postImg"
              className={styles.fileInput}
            ></input>
            <br />
          </div>
          <div className={styles.singleInput}>
            <label htmlFor="">Publication category</label>
            <br />
            <div className={styles.radioBtns}>
              <label>
                <input type="radio" name="categories" />
                <span>Technology</span>
              </label>
              <label>
                <input type="radio" name="categories" />
                <span>Science</span>
              </label>
              <label>
                <input type="radio" name="categories" />
                <span>education</span>
              </label>
              <label>
                <input type="radio" name="categories" />
                <span>Cooking</span>
              </label>
              <label>
                <input type="radio" name="categories" />
                <span>Fashion</span>
              </label>
              <label>
                <input type="radio" name="categories" />
                <span>Free Category</span>
              </label>
              <br />
            </div>
          </div>
          <div className={styles.singleInput} id={styles.setToPublic}>
            <div className={styles.labelInput}>
              <label htmlFor="">Set your post to public</label>
              <br />
              <span className={styles.explain}>
                If you set your publication to public, it means that anyone on{" "}
                <b>logo name</b> can see it
              </span>
            </div>
            <div className={styles.publicInput}>
              <label>
                <input type="radio" name="privacy" />
                <span>Public</span>
              </label>
              <label>
                <input type="radio" name="privacy" />
                <span>Private</span>
              </label>
            </div>
          </div>

          <div className={styles.sbmitBtns}>
            <button>Cancel</button>
            <button id={styles.submit}>Publish</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default CreatePostForm;
