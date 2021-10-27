
import React from 'react' 
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CreateRepo from './pages/CreateRepo'
import PreMade from './pages/PreMade'
import Home from './pages/Home'
import { ApolloProvider } from '@apollo/client'
// import Dropdown from 'react-bootstrap/Dropdown'
const client = new ApolloProvider({
  uri: "/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>

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
    </ApolloProvider>
  );
}

export default App;
