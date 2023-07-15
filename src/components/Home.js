import React, { useState } from "react";
import { Container, Form,Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Header() {
const [name,setName] = useState("");
const [link,setLink] = useState("");
const [shortlink,setshortlink] = useState("");

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
    if(name === "" || link === "")
    {
        toast.error("Fields can't be empty");
        return 
    }
    const url = `https://ob99ff61i4.execute-api.ap-south-1.amazonaws.com/default/url_shortner_copy`
  

    const payload = {
        "link" : link,
        "created_by" : name
    }
      
  
      axios.post(url, JSON.stringify(payload))
        .then(response => {
          console.log(response); // Make sure response.data is already a JSON object
          setshortlink(response.data);
          toast.success("Short link generating successfully!!")
  
        })
        .catch(error => {
            toast.error("Some error occurs please try again!!");
          console.error(error);
        })
  
      setName("");
      setLink("");
}

  return (
    <>
    <ToastContainer/>
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
      <Container className="mt-5">
        <div><h2>your short link is <a href={shortlink}>{shortlink}</a> </h2></div>
    </Container>
    </>
  );
}

export default Header;
