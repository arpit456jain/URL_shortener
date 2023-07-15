import React, { useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // React Router's useNavigate hook

  
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleUserEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleUserNameChange(event) {
    setUsername(event.target.value);
  }
  

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    console.log("submit ");
    const url = `https://8tdgrcf0cc.execute-api.ap-south-1.amazonaws.com/default/z-alpha_api`;

    const payload = {
      "queryload": `INSERT INTO url_shortener.user (username, password, name, email) VALUES ('${username}', '${password}', '${name}', '${email}');`
    };

    axios.post(url, JSON.stringify(payload))
      .then(response => {
        console.log(response);
        
          toast.success("Signed Up in successfully!");

          // Delay the redirect by 2 seconds
          setTimeout(() => {
            navigate(`/login`); // Redirect to the desired path
          }, 2000);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <ToastContainer />
      <Header/>  
      <Container className="mt-5 col-lg-6">
        <h1 className="mb-4">Sign Up </h1>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleUserEmailChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter your username" value={username} onChange={handleUserNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
          </Form.Group>
          <Button variant="info" onClick={handleSubmit}>Sign Up</Button>
        </Form>
      </Container>
    </>
  );
}

export default SignUp;
