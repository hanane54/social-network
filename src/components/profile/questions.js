import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../menu/menu'
import { makeStyles } from "@material-ui/core";
import Header from "../header/header";
import Ads from '../menu/Ads';
import UserInfoSection from './UserInfoSection';
import UserNavigationSection from './UserNavigationSection';
import QuestionsData from './questionsData';

const questionsList = () => {
  // const classes = useStyles();
  return (
    <>
      <div className="">
        {QuestionsData.map((question, key) => {
          return (
        <>
              <div className="j" key={key}>
              <ul>
                <li>{question.question}  </li>  
                <span>{question.date}</span>

                </ul>
            </div>
            
            </>
            
          );
        })}
      </div>
    </>
  );
};

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
            <h3>You have published posts that answer the following questions:</h3>
            {questionsList()}
            

           </Col> 
          
        </Row>
      </Container>
    </>
    );
  };
  export default questions;