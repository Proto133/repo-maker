import {useState} from 'react'

export default function ModelInputs(handleInput){
    const [index, setIndex]= useState([0])
  return(  <Container gap={1}>
                <FloatingLabel size='sm' controlId='floatingInput' label='Model Name'>
                    <Form.Control size='sm' name='model1' onChange={(e)=>handleInput('title', e.target.value)} placeHolder='Model Name'/>
                </FloatingLabel>
                </Container>
        )
}