import ListGroup from 'react-bootstrap/ListGroup'
export default function Title({data}){
    const itemTitles = data.map((item, index) =>{
    return (
    <ListGroup.Item action href={"#link"+index}>
        {item.title}
    </ListGroup.Item>)
    })

    return (
    <ListGroup align="right">
        {itemTitles}
    </ListGroup>)
   
}