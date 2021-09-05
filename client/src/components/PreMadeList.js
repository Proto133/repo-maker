import PreMadeListData from "../data/PreMadeListData"
import {Tab,Row,Col} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import Titles from './PreMadeList/Titles'
import Descriptions from './PreMadeList/Descriptions'

export default function PreMadeList(){
  
  return(
    <Row>
        <Col sm={4}>
        <ListGroup>
            <Titles data={PreMadeListData} />
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
           <Descriptions data={PreMadeListData} />
           </Tab.Content>
        </Col>
      </Row>
  )}