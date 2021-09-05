
import React from 'react' 
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CreateRepo from './pages/CreateRepo'
import PreMade from './pages/PreMade'
import Home from './pages/Home'
// import Dropdown from 'react-bootstrap/Dropdown'

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
            <Home />
        </Tab>
        <Tab eventKey="NewRepo" title="New Repo">
          <CreateRepo />
        </Tab>
        <Tab eventKey="Premade" title="PreMade">
          <PreMade />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
