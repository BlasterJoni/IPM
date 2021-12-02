import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap';
import TeamMember from "./TeamMember"
import AssignmentItem from './AssignmentItem';
import AssignmentItemRaw from './AssignmentItemRaw';
import './App.css';
import assignments from './assignments';
import flowmap from "./flowmap.png"

function App() {

  let ind = 0;

  return (
    <div className="App">
      <div id="home">
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Group 18</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#assignments">Assignments</Nav.Link>
                <Nav.Link href="#team">The Team</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id="hero" className="d-flex flex-column justify-content-center align-items-center">
          <h1>Welcome to Group 18's Page</h1>
          <h2>IPM 21/22</h2>
        </div>
      </div>
      <div id="assignments" className="p-4">
        <h1>Assignments</h1>
        <div className="d-flex flex-wrap flex-column align-items-center">
          {assignments.map((assig, index) => {
            ind++;
            return (<AssignmentItem id={index} key={index} assignment={assig} />)
          })}
          <AssignmentItemRaw id={ind} title={"Navegante Marvel Prototype"} resume={"Navegante's initial prototype made using MarvelApp"} image={flowmap}>
            <div className="text-center" style={{ width: "100%" }}>
              <Image id="image" src={flowmap} style={{ width: "100%" }}/>
              <a href="https://marvelapp.com/prototype/d0g16jb"><Button variant="primary" className="mt-3 me-1">Go to Prototype</Button></a>
              <a href="https://userflows.marvelapp.com/d0g16jb"><Button variant="primary" className="mt-3 ms-1">Go to UserFlow</Button></a>
            </div>
          </AssignmentItemRaw>
        </div>
      </div>
      <div id="team" className="p-4">
        <h1>The Team</h1>
        <div className="d-flex flex-wrap flex-row justify-content-around pt-4 pb-4">
          <TeamMember image={process.env.PUBLIC_URL + "/ines.jpeg"} name="Inês Simões" number="55584" />
          <TeamMember image={process.env.PUBLIC_URL +"/arvana.jpeg"} name="João Arvana" number="54982" />
          <TeamMember image={process.env.PUBLIC_URL + "/felix.jpeg"} name="Rodrigo Félix" number="55268" />
        </div>
      </div>
      <div id="footer" className="p-4">
        <h1>Group 18's Page</h1>
        <h2>IPM 21/22</h2>
        <span><a href="#home">Home</a> | <a href="#assignments">Assignments</a> | <a href="#team">The Team</a></span>
      </div>
    </div>
  );
}

export default App;
