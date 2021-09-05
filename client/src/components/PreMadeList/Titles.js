import ListGroup from 'react-bootstrap/ListGroup'
import Title from './Title'
export default function Titles({data}){
    return( 
    <ListGroup>
        <Title data={data} />
    </ListGroup> )
}