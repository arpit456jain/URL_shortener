import { useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Header from "./Header";
import {getShortLink} from "../RestApis"
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
function Home() {
  
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [link, setLink] = useState("");
  const [shortlink, setShortlink] = useState("");
  const [loading, setLoading] = useState(false);
  const [linkGenerated, setLinkGenerated] = useState(false);
  const navigate = useNavigate();
  const URL_SHORTEN = process.env.REACT_APP_URL_SHORTEN_API;
  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const token = sessionStorage.getItem("access_token");
    const body = {
      userId : user.user_id,
      original_url: link,
    };

    
      getShortLink(body,token).then((response) => {
        setShortlink(`${URL_SHORTEN}/${response.data.short_code}`);
        setLinkGenerated(true);
        toast.success("Short link generated successfully!!");  
      })
      .catch((error) => {
        
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          sessionStorage.clear();
          navigate("/login");
          toast.error("Session expired. Please log in again.");
      } else {
          toast.error("Some error occurred, please try again!!");
      }
      setLinkGenerated(false);
      }).finally(()=>{
        setLoading(false);
      });
    setLink("");
  }

  return (
    <>

      <Header loginstatus={user} />
      <Container className="mt-5 col-lg-7 col-md-10">
        <Form onSubmit={handleSubmit}>
          {user != null ? (
            <>
            <h1> Welcome {user.name} </h1>
            <h2>Enter the Link you want to shorten</h2>
            </>
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
          
          {
            loading ? 
             <Button variant="info" disabled type="submit">
              <Spinner animation="border" variant="dark" />
            </Button> : 
            
            <Button
            variant="info"
            type="submit"
            disabled={!user}
          >
            Get Short Link
          </Button>

          }
        </Form>
      </Container>
      <Container className="mt-5 col-lg-7 col-md-10">
        <div>
          {linkGenerated ? (
            <h3 className="text-white">
             Short link : <a href={shortlink} style={{color:"rgb(14, 202, 240)"}} target="_blank" rel="noopener noreferrer">{shortlink}</a>
            </h3>
          ) : (
            ""
          )}
        </div>
      </Container>
    </>
  );
}

export default Home;
