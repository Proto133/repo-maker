import ListGroup from 'react-bootstrap/ListGroup'
export default function Title({data}){
    let color = 'blue'
    const itemTitles = data.map((item, index) =>{
      if (item.type === 'FullStack'){
        color = 'cyan'
       }
       if (item.type === 'ClientSide'){
         color = 'green'
       }
       if (item.type === 'ServerSide'){
         color = 'yellow'
       }
    return (
    <ListGroup.Item action href={"#link"+index}>
        {item.title}
        <img src={`https://badgen.net/badge/Type/${item.type}/${color}`} alt={`${item.type} Badge`}></img>
    </ListGroup.Item>)
    })

    return (
    <ListGroup>
        {itemTitles}
    </ListGroup>)
   
}