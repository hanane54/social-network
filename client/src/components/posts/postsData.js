import image1 from "../assets/img1.jpeg";
import image2 from "../assets/img2.jpg"
import post1image from '../assets/post1.jpg'
import post2image from '../assets/post2.jpg'

const PostsData = [
  {
    postId: "1",
    postUser: "Ayoub Alaoui",
    userImage: image1,
    userJob: "Business Analyst",
    relativeTime: "36 minutes",
    question:
      "lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
    article:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    commentsCounter: "5",
    likesCounter: "23",
    postImage: post1image,
    liked: true
  },
  {
    postId: "2",
    postUser: "Akram Aouni",
    userImage: image2,
    userJob: "Software Developer",
    relativeTime: "47 minutes",
    question:
      "lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
    article:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    commentsCounter: "4",
    likesCounter: "55",
    postImage: post2image,
    liked: true
  }
];
export default PostsData;