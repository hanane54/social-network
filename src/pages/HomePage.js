import { Col, Container, Row } from 'react-bootstrap';
import MenuSection from '../components/MenuSection'
import FeedsContainer from '../components/feeds/feedsContainer'
import ProfileSectionContainer from '../components/profileSection/profileSectionContainer';

const HomePage = () => {
  return <>
    <Container fluid>
      <Row>
        <Col xs={2}>
          <MenuSection/>
        </Col>
        <Col xs={6}>
          <FeedsContainer/>
        </Col>
        <Col xs={4}>
            <ProfileSectionContainer/>
        </Col>
      </Row>
    </Container>
  </>;
};
export default HomePage;
