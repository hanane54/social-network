import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../components/menu/menu'
import FeedsContainer from '../components/feeds/feedsContainer'
import ProfileSectionContainer from '../components/profileSection/profileSectionContainer';
import RecentFollowers from '../components/followersSection/recentFollowersSection';

const HomePage = () => {
  return <>
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Menu/>
        </Col>
        <Col xs={6}>
          <FeedsContainer/>
        </Col>
        <Col xs={4}>
            <ProfileSectionContainer/>
            <RecentFollowers />
        </Col>
      </Row>
    </Container>
  </>
};
export default HomePage;
