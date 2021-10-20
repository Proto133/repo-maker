import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function Descriptions({data}){
   return( data.map((item,index) => {
       let color = 'default'
    if (item.type === 'FullStack'){
        color = 'cyan'
       }
       if (item.type === 'ClientSide'){
         color = 'green'
       }
       if (item.type === 'ServerSide'){
         color = 'yellow'
       }
     const {title, description,repolink} = item
     const {headline, db,orm,api,server,frontend} = description
        return (
        <Tab.Pane eventKey={`#link${index}`}>
        <Card>
        <h3 style={{paddingTop : '1rem' }} align="center">{title} </h3> 
        <span style={{paddingLeft : '1rem' }}><img src={`https://badgen.net/badge/Type/${item.type}/${color}`} alt={`${item.type} Badge`}></img></span>
        <hr/>
        <div style={{paddingLeft : '1rem' }}>
        <h4 className="headline">{headline}</h4>
        <ul style={{marginLeft : '1.25rem' }}>
            <li>Database:<a href={db.link}>{db.name}</a></li>
                  {orm.name ? (
            <li>ORM/ODM:  
                  <a href={orm.link}>{orm.name}</a>             
            </li>): ''}
            <li>API Style: {api.type}</li>
            {api.tool.name !== '' ? (<li>API Tool: <a href={api.tool.link}>{api.tool.name}</a></li>): ''}
            <li>Web Framework:<a href={server.link}>{server.name}</a></li>
            <li>Frontend: <a href={frontend.link}>{frontend.name}</a></li>
        </ul>
        </div>
            <Button value={repolink}>Download</Button>
        </Card>
        </Tab.Pane>)
    })
   )}