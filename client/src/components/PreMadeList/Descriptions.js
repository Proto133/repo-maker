import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'

export default function Descriptions({data}){
   return( data.map((item,index) => {
     const {title, description,repolink} = item
     const {headline, db,orm,api,server,frontend} = description
        return (
        <Tab.Pane eventKey={`#link${index}`}>
        <h3>{title}</h3>
           <h4 className="headline">{headline}</h4>
           <ul>
               <li>Database:<a href={db.link}>{db.name}</a></li>
              <li>ORM/ODM:  
                  {orm.name ? 
                  <a href={orm.link}>{orm.name}</a>: 
                  'None'}
                  </li>
            <li>API Style: {api.type}</li>
            {api.tool? <li>API Tool: <a href={api.tool.link}>{api.tool.name}</a></li>: ''}
            <li>Web Framework:<a href={server.link}>{server.name}</a></li>
            <li>Frontend: <a href={frontend.link}>{frontend.name}</a></li>
            </ul>
            <Button value={repolink}>Download</Button>
        </Tab.Pane>)
    })
   )}