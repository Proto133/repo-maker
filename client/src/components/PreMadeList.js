import PreMadeListData from "../data/PreMadeListData"
import {Tab,Row,Col,Container} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import Titles from './PreMadeList/Titles'
import Descriptions from './PreMadeList/Descriptions'
import AlertDismissable from './PreMadeList/AlertDismissable'
export default function PreMadeList(){
  
  return(
    <Container>
      <br/>
      <Row>
        <h2 align="center">Pre-made Project Repositories Read for Download</h2>
        <hr></hr>
      </Row>
      <Row>
        <AlertDismissable />
      </Row>
    <Row>
         <Col sm={3}>
        <ListGroup>
            <Titles data={PreMadeListData} />
          </ListGroup>
        </Col>
        <Col sm={8}>
        {/* <Container> */}
          <Tab.Content >
           <Descriptions data={PreMadeListData} />
           </Tab.Content>
        {/* </Container> */}
        </Col>
      </Row>
    </Container>
    
  )}