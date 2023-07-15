import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

function Home() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [shortlink, setShortlink] = useState("");
  const [user, setUser] = useState(false);
  const [linkGenerated, setLinkGenerated] = useState(false);
  

  useEffect(() => {
  
    const queryParameters = new URLSearchParams(window.location.search);
    const userparam = queryParameters.get("username");
    console.log(userparam);
    if (userparam == null) {
      setUser(false);
    } else {
      const url = `https://8tdgrcf0cc.execute-api.ap-south-1.amazonaws.com/default/z-alpha_api`;

      const payload = {
        "queryload": `SELECT * FROM url_shortener.user WHERE username='${userparam}';`
      };

      axios.post(url, JSON.stringify(payload))
        .then(response => {
          console.log(response.data);
          if (response.data.length === 0) {
            toast.error("Username Doesn't Exist Please create an account!");
            setUser(false);
            return
          } else {
            setUser(true);
            setName(response.data[0].name);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
    
  }, []);

  
  function handleLinkChange(event) {
    setLink(event.target.value);
  }
  function handleSubmit(event) {
    console.log("handle submit");
    if (name === "" || link === "") {
      toast.error("Fields can't be empty");
      return;
    }
    const url = `https://ob99ff61i4.execute-api.ap-south-1.amazonaws.com/default/url_shortner_copy`;

    const payload = {
      link: link,
      created_by: name,
    };

    axios
      .post(url, JSON.stringify(payload))
      .then((response) => {
        console.log(response);
        setShortlink(response.data);
        setLinkGenerated(true);
        toast.success("Short link generated successfully!!");
      })
      .catch((error) => {
        toast.error("Some error occurred, please try again!!");
        setLinkGenerated(false);
        console.error(error);
      });

    setName("");
    setLink("");
  }

  return (
    <>
      <ToastContainer />
      <Header loginstatus={user} />
      <Container className="mt-5">
        <Form>
          {user ? (
            <h1> Welcome {name} Enter the Link you want to shorten</h1>
          ) : (
            <h1>Please Login First!!</h1>
          )}

          
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Enter the link"
              value={link}
              onChange={handleLinkChange}
            />
          </Form.Group>
          <Button
            variant="info"
            onClick={handleSubmit}
            disabled={!user}
          >
            Get Short Link
          </Button>
        </Form>
      </Container>
      <Container className="mt-5">
        <div>
          {linkGenerated ? (
            <h2>
              Your short link is{" "}
              <a href={shortlink}>{shortlink}</a>{" "}
            </h2>
          ) : (
            ""
          )}
        </div>
      </Container>
    </>
  );
}

export default Home;
