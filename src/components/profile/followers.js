import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../menu/menu'

import Header from "../header/header";
import Ads from '../menu/Ads';
import UserInfoSection from './UserInfoSection';
import UserNavigationSection from './UserNavigationSection';
import FollowersData from './followersData';
import Image from "react-bootstrap/Image";


const followersList = () => {
  // const classes = useStyles();
  return (
    <>
      <div className="">
        {FollowersData.map((follower, key) => {
          return (
        <>
        <ul>
              {/* <div className="j" key={key}> */}
               <Image  width={"10%"} src={follower.followerImage} rounded /> 
              
                  {follower.followerName}
                  <button type="button">Remove</button>

                  <div>{follower.followerJob}</div>

              
                  </ul>
                
            {/* </div> */}
            
            </>
            
          );
        })}
      </div>
    </>
  );
};
const followers = () => {
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
            {followersList()}
             
           </Col> 
          
        </Row>
      </Container>
    </>
    );
  };
  export default followers