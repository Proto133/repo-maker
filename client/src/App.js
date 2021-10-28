
import React from 'react' 
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CreateRepo from './pages/CreateRepo'
import PreMade from './pages/PreMade'
import Home from './pages/Home'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
// import ApolloClient from "apollo-boost";
// import Dropdown from 'react-bootstrap/Dropdown'
const client = new ApolloClient({
  // request: (operation) => {
  //   // const token = localStorage.getItem("id_token");
  //   operation.setContext({
  //     headers: {
  //       authorization: 'token' ? `Bearer token` : "",
  //     },
  //   });
  // },
  cache: new InMemoryCache(),
  uri: "http://localhost:3001/graphql",
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
