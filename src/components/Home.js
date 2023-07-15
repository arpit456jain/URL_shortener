import React, { useState } from "react";
import { Container, Form,Button } from "react-bootstrap";


function Header() {
// const [name,setName] = useState=("");
// const [link,setLink] = useState("");

// function handleNameChange(event)
// {
//     setName(event.target.value);
// }
function handleSubmit(event) {
    console.log("handle submit")
}

  return (
    <>
      <Container className="mt-5">
        <Form>
        <h1>Enter your name and the Link you want to shorten</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter the link"/>
          </Form.Group>
          <Button variant="info" onClick={handleSubmit}>Get Short Link</Button>
        </Form>
      </Container>
    </>
  );
}

export default Header;
