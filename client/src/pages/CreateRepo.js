import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import fileDefs from "../data/fileDefs";
import GEN_INDEX_HTML_DATA from "../data/GenHTMLData";
import { SAVE_REPO_CONTENT, SAVE_REPO } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/react-hooks";
import FormControl from "react-bootstrap/FormControl";
import Stack from "react-bootstrap/Stack";

export default function CreateRepo() {
 const [repoRefID, setRepoRefID] =useState('')
  const [saveRepo,{saveRepoLoading, saveRepoError }] = useMutation(SAVE_REPO,{ 
    onCompleted: ({saveRepo}) =>{
    setRepoRefID(saveRepo._id)
    console.log(saveRepo._id)
   }
  })
  const [saveContent, { saveContentLoading, saveContentError }] = useMutation(SAVE_REPO_CONTENT);
  const [repoDetails, setRepoDetails] = useState({
    name: null,
    kind: null,
    db: {
      name: null,
      link: null,
    },
    orm: {
      name: null,
      link: null,
      models: [null],
    },
    api: {
      type: null,
      tool: {
        name: null,
        link: null,
      },
    },
    server: {
      name: null,
      link: null,
    },
    frontend: {
      name: null,
      link: null,
    },
    content: [null],
    repolink: null,
  });
 
  const [frontEndTech, setFrontEndTech] = useState({
    html: {
      value: false,
      data: fileDefs.indexHTML,
    },
    css: {
      value: false,
      data: fileDefs.styleCSS,
    },
    js: {
      value: false,
      data: fileDefs.scriptJS,
    },
    assets:{
      value:false,
      data: fileDefs.assetsDir
    },
    assetsJS: {
      value:false,
      data: fileDefs.assetsJS
    },
    assetsCSS: {
      value:false,
      data: fileDefs.assetsCSS
    }
  });
 
  let indexHTMLData = GEN_INDEX_HTML_DATA(
    repoDetails.name,
    frontEndTech.css.value,
    frontEndTech.js.value
  );

  const [newFile, setNewFile] = useState([]);
  const [contentList, setContentList] = useState([]);

  const handleFECheck = (name, value) => {
    frontEndTech[name].value = value;
    if (frontEndTech.css.value == false && frontEndTech.js.value === false) {
      frontEndTech.assets.value = false}
    else {frontEndTech.assets.value = true} 
      if (name === 'css'){
        frontEndTech.assetsCSS.value = value
      }
       if (name === 'js'){
        frontEndTech.assetsJS.value = value
      }
    
    
    console.log(frontEndTech);
  };

  const genFiles = () => {
    repoDetails.content =[]
    setContentList([])
    let files = Object.entries(frontEndTech);
    // console.log(files)
    fileDefs.indexHTML.self.data = indexHTMLData;
    let content = new Set()
    files.forEach((item) => {
      item[1].value
        ? content.add(item[1].data)
        : console.log(item[0], "is not checked");
      // console.log(content);
    });
    setContentList(Array.from(content));
  };
  
  const handleInput = (name, value) => {
    // console.log(name, value);
    if (name === "kind" && value === "Front-End") {
      console.log("HandleInput if hit");
      repoDetails.frontend.name = "Custom" ;
    }
    setRepoDetails({ ...repoDetails, [name]: value });
  };

  const addContentToRepo = async (item)=>{
      const {level, parent, self} = item;
      console.log({repoRefID})
      console.log({item})
      await saveContent({
        variables:{
          repoID: repoRefID,
          level: level,
          parent: parent,
          selfType: self.type,
          selfName: self.name,
          selfData: self.data}})
          if (saveContentLoading) {
            console.log(`Loading. . .`);
          }
          if (saveContentError) {
            throw new Error(`So, that shit didn't work`);
          }
    
  }
  
  const handleSaveProject = async () => {
    console.log("Save Project Clicked");
    await genFiles();
    try {
      let newRepo = {name:repoDetails.name, kind:repoDetails.kind, databaseTech: repoDetails.db.name, apiType: repoDetails.api.type, frontend: repoDetails.frontend.name }
      await saveRepo({
        variables: newRepo
      
      });
      if (saveRepoLoading) {
        console.log(`Loading. . .`);
      }
      if (saveRepoError) {
        throw new Error(`So, that shit didn't work`);
      }
    
      } catch (err) {
        throw err;
      }
      contentList.forEach(item => {
        addContentToRepo(item)
      })

  };
  
  useEffect(() => { 
    setRepoDetails({ ...repoDetails, content: contentList })
  }, [contentList]);
  
  return (
    <div>
      <h2> This is the Create a Repo Page.</h2>
      <Container fluid="sm">
        <h4>Your Repo Info:</h4>
        <Form>
          <Row>
            <Col>
              <FloatingLabel
                size="sm"
                controlId="floatingInput"
                label="Project Title"
                classNAme
              >
                <Form.Control
                  size="sm"
                  name="name"
                  onChange={(e) => handleInput("name", e.target.value)}
                  placeHolder="Project Title"
                />
              </FloatingLabel>
            </Col>
            <Col>
              <div
                style={{
                  border: "1px solid rgba(0 , 0, 0, .2)",
                  flex: "0 0 40%",
                  height: "100%",
                  borderRadius: "3px",
                  padding: "1rem",
                }}
              >
                <label>
                  Project Type: &nbsp;
                  <select
                    value={repoDetails.type}
                    onChange={(e) => handleInput("kind", e.target.value)}
                  >
                    <option value="Front-End">Front-End</option>
                    <option value="Server">Server</option>
                    <option value="Fullstack">FullStack</option>
                    <option value="mango">Mango</option>
                  </select>
                </label>
              </div>
            </Col>
          </Row>
          <Row>
            <br></br>
          </Row>
          {repoDetails.kind === "Front-End" ? (
            <Row>
              <Col>
                <div
                  style={{
                    border: "1px solid rgba(0 , 0, 0, .2)",
                    flex: "0 0 40%",
                    height: "100%",
                    borderRadius: "3px",
                    padding: "1rem",
                  }}
                >
                  <h5> What will you be using for this project?</h5>
                  <Form.Check
                    type="checkbox"
                    id="html-checkbox"
                    name="html"
                    label="HTML"
                    onChange={(e) => handleFECheck("html", e.target.checked)}
                  />
                  <Form.Check
                    type="checkbox"
                    id="css-checkbox"
                    name="css"
                    label="CSS"
                    onChange={(e) => handleFECheck("css", e.target.checked)}
                  />
                  <Form.Check
                    type="checkbox"
                    id="js-checkbox"
                    name="js"
                    label="JavaScript"
                    onChange={(e) => handleFECheck("js", e.target.checked)}
                  />
                  <sub>
                    <em> If you are planning on using React, just use</em>{" "}
                    <code
                      style={{
                        padding: ".1rem",
                        color: "grey",
                        backgroundColor: "black",
                      }}
                    >
                      create-react-app
                    </code>{" "}
                    <em>in your terminal.</em>
                  </sub>
                </div>
              </Col>
              <Col>
                <Container align="center" style={{ paddingTop: "2rem" }}>
                  <Button disabled={false} onClick={handleSaveProject}>
                    Save Project
                  </Button>
                  {/* <Button disabled={false} onClick={handleWriteRepo}>
                    Write to Server
                  </Button> */}
                </Container>
              </Col>
            </Row>
          ) : null}
          {repoDetails.kind === "Server" || repoDetails.kind === "Fullstack" ? (
            <Row>
              <Col>
                <h5> Database Type: </h5>
                <Container gap={1}>
                  <Form.Check
                    label="MongoDB"
                    type="radio"
                    value="MongoDB"
                    data-link="https://www.mongodb.com/"
                    onClick={(e) =>
                      handleInput("db", {
                        name: e.target.value,
                        link: e.target.dataset.link,
                      })
                    }
                    id="MongoDB-radio"
                    aria-label="MongoDB"
                  />
                  <Form.Check
                    label="MySQL"
                    type="radio"
                    value="MySQL"
                    data-link="https://www.mysql.com/"
                    onClick={(e) =>
                      handleInput("db", {
                        name: e.target.value,
                        link: e.target.dataset.link,
                      })
                    }
                    id="MySQL-radio"
                    aria-label="MySQL"
                  />
                </Container>
              </Col>
              <Col>
                <Button>Would you like to create your models now?</Button>
              </Col>
            </Row>
          ) : null}
        </Form>
      </Container>
    </div>
  );
}
