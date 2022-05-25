import Menu from '../menu/menu'
import Ads from '../menu/Ads'
import { Col, Container, Row } from 'react-bootstrap'
import UserSettingsForm from './userSettingsForm'

const UserSettingsContainer = () => {
    return  <>
    <Container fluid>
  <Row>
    <Col xs={2}>
      <Menu/>
      <Ads/>
    </Col>
    <Col xs={10}>
      <UserSettingsForm/>
    </Col>
  </Row>
</Container>
</>
}

export default UserSettingsContainer;