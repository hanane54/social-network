import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../menu/menu'
import Ads from '../menu/Ads'
import CreatePostForm from './createPostForm'

const CreatePostContainer = ( ) => {
    return <>
        <Container fluid>
      <Row>
        <Col xs={2}>
          <Menu/>
          <Ads/>
        </Col>
        <Col xs={10}>
          <CreatePostForm/>
        </Col>
      </Row>
    </Container>
  </>
}
export default CreatePostContainer;