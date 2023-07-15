import React, { useState } from "react";
import { Container, Form,Button } from "react-bootstrap";
import axios from "axios";

function Header() {
const [name,setName] = useState("");
const [link,setLink] = useState("");

function handleNameChange(event)
{
    setName(event.target.value);
}
function handleLinkChange(event)
{
    setLink(event.target.value);
}
function handleSubmit(event) {
    console.log("handle submit");
    
      setName("");
      setLink("");
}

  return (
    <>
      <Container className="mt-5">
        <Form>
        <h1>Enter your name and the Link you want to shorten</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter the link" value={link} onChange={handleLinkChange} />
          </Form.Group>
          <Button variant="info" onClick={handleSubmit}>Get Short Link</Button>
        </Form>
      </Container>
    </>
  );
}

export default Header;
