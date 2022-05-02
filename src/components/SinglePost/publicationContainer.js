import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../menu/menu'
import Ads from '../menu/Ads'
import Publication from './publication'

const PublicationContainer = () => {
  return <>
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Menu/>
          <Ads/>
        </Col>
        <Col xs={10}>
          <Publication/>
        </Col>
      </Row>
    </Container>
  </>
};
export default PublicationContainer;
