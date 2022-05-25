import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../menu/menu'

import Header from "../header/header";
import Ads from '../menu/Ads';
import UserInfoSection from './UserInfoSection';
import UserNavigationSection from './UserNavigationSection';
// import Post from '../posts/post';
import PostsList from './postsList';

const posts = () => {
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
            <PostsList></PostsList>
           </Col> 
          
        </Row>
      </Container>
    </>
    );
  };
  export default posts;