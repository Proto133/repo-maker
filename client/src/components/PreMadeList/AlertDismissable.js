import {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
export default function AlertDismissable() {
    const [show, setShow] = useState(true);
    return (
      <>
        <Alert show={show} variant="info">
            <Alert.Heading>Important Notes:</Alert.Heading>
                <ul>
                    <li>Each of these repositories will be downloaded as zipped folder with the Repository Title as the directory name.</li>
                    <dl>
                        <dd> i.e. <code>MERN_R.zip</code></dd>
                    </dl>
                    <li>In the <code> RepoMaker </code> Directory You Will Find:</li>
                    <dl>
                        <dt>A <code>repoMap.md</code> File</dt>
                        <dd>This contains a elaborate outline of what is where in the repository.</dd>
                        <dt>A <code>Info.md</code> File</dt>
                        <dd>A simple Markdown document describing initialization instructions, and elaborating on why certain files were included.</dd>
                    </dl>
                </ul>
        <hr />
        <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-success">
              Close
        </Button>
        </div>
        </Alert>
         {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        <div>
          <br></br>
        </div>
      </>
    );
  }
  
