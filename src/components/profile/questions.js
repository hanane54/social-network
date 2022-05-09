import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../menu/menu'

import Header from "../header/header";
import Ads from '../menu/Ads';
import UserInfoSection from './UserInfoSection';
import UserNavigationSection from './UserNavigationSection';
// import QuestionsData from './questionsData';


const questions = () => {
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
            <h3>You have published posts that answer the following questions</h3>
            

           </Col> 
          
        </Row>
      </Container>
    </>
    );
  };
  export default questions;