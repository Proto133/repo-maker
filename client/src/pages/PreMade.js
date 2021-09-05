import Tab from 'react-bootstrap/Tab'
import PreMadeList from '../components/PreMadeList'
export default function PreMade(){
    return(
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
    <PreMadeList />
  </Tab.Container>)
}