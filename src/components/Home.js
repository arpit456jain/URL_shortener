import { useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Header from "./Header";
import {getShortLink} from "../RestApis"

function Home() {
  // const user = JSON.parse(localStorage.getItem('user'))
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [link, setLink] = useState("");
  const [shortlink, setShortlink] = useState("");
  const [linkGenerated, setLinkGenerated] = useState(false);
    
  const BASE_API = process.env.REACT_APP_BASE_API;
  function handleSubmit(event) {
    event.preventDefault();
    const body = {
      userId : user.user_id,
      original_url: link,
    };

    
      getShortLink(body).then((response) => {
        setShortlink(`${BASE_API}/${response.data.short_code}`);
        setLinkGenerated(true);
        toast.success("Short link generated successfully!!");
      })
      .catch((error) => {
        toast.error("Some error occurred, please try again!!");
        setLinkGenerated(false);
      });
    setLink("");
  }

  return (
    <>

      <Header loginstatus={user} />
      <Container className="mt-5 col-lg-7 col-md-10">
        <Form onSubmit={handleSubmit}>
          {user != null ? (
            <h1> Welcome {user.name} Enter the Link you want to shorten</h1>
          ) : (
            <h1>Please Login First!!</h1>
          )}

          
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Enter the link"
              value={link}
              required
              onChange={(e)=>(setLink(e.target.value))}
            />
          </Form.Group>
          <Button
            variant="info"
            type="submit"
            disabled={!user}
          >
            Get Short Link
          </Button>
        </Form>
      </Container>
      <Container className="mt-5">
        <div>
          {linkGenerated ? (
            <h2 className="text-white">
             Your short link is <a href={shortlink} target="_blank" rel="noopener noreferrer">{shortlink}</a>
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
