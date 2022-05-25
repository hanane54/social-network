import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../menu/menu'

import Header from "../header/header";
import Ads from '../menu/Ads';
import UserInfoSection from './UserInfoSection';
import UserNavigationSection from './UserNavigationSection';
import CommentsData from './commentsData';


const commentsList = () => {
  // const classes = useStyles();
  return (
    <>
      <div className="">
        {CommentsData.map((comment, key) => {
          return (
        <>
              <div className="j" key={key}>
              <ul>
                <div> You commented on {comment.postOwner} post: ""{comment.comment}" </div>  
                {/* <div>"{comment.comment}"</div> */}
                <div>{comment.date}</div>

                </ul>
            </div>
            
            </>
            
          );
        })}
      </div>
    </>
  );
};
const comments = () => {
    return (
    <>
        <Header />
  
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Menu/>
            <Ads/>
          </Col>
          <Col xs={10}>
            <UserInfoSection/>
            <UserNavigationSection/>
            <h3>Comments</h3>
             {commentsList()}
           </Col> 
          
        </Row>
      </Container>
    </>
    );
  };
  export default comments;