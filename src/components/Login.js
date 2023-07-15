import React, { useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router's useNavigate hook

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
      "queryload": `SELECT EXISTS(SELECT 1 FROM url_shortener.user WHERE username='${username}' AND password='${password}') AS is_valid;`
    };

    axios.post(url, JSON.stringify(payload))
      .then(response => {
        if (response.data[0].is_valid === true) {
          toast.success("Logged in successfully!");

          // Delay the redirect by 2 seconds
          setTimeout(() => {
            navigate(`/?username=${username}`); // Redirect to the desired path
          }, 2000);
        } else {
            setUsername("");
            setPassword("");
          toast.error("Wrong Username or Password");
        }
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
        <h1 className="mb-4">Login </h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter your username" value={username} onChange={handleUserNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
          </Form.Group>
          <Button variant="info" onClick={handleSubmit}>Login</Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
